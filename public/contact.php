<?php
// ── Rate limiting (max 5 submissions per 5 minutes per visitor) ───
session_start();
$now = time();
if (!isset($_SESSION['submit_first_at'])) {
    $_SESSION['submit_first_at'] = $now;
    $_SESSION['submit_count']    = 0;
}
// Reset window after 5 minutes
if (($now - $_SESSION['submit_first_at']) > 300) {
    $_SESSION['submit_first_at'] = $now;
    $_SESSION['submit_count']    = 0;
}
$_SESSION['submit_count']++;
if ($_SESSION['submit_count'] > 5) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests. Please wait 5 minutes and try again.']);
    exit;
}

// ── CORS — only your own domain may POST ─────────────────────────
$allowed = 'https://www.transcomtools.com';
$origin  = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin === $allowed) {
    header("Access-Control-Allow-Origin: $allowed");
} else {
    // Allow localhost for local development
    header('Access-Control-Allow-Origin: http://localhost:5173');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ── Read & sanitise input ─────────────────────────────────────────
$data    = json_decode(file_get_contents('php://input'), true);
$name    = htmlspecialchars(trim($data['name']    ?? ''));
$company = htmlspecialchars(trim($data['company'] ?? ''));
$phone   = htmlspecialchars(trim($data['phone']   ?? ''));
$email   = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$subject = htmlspecialchars(trim($data['subject'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));

// ── Validation ────────────────────────────────────────────────────
if (!$name || !$phone || !$subject || !$message) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please fill all required fields.']);
    exit;
}

// Phone: digits, spaces, +, -, (), 7–20 chars
if (!preg_match('/^[+0-9\s\-()\[\]]{7,20}$/', $phone)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid phone number.']);
    exit;
}

// Message length cap
if (strlen($message) > 5000) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Message is too long (max 5000 characters).']);
    exit;
}

// ── Build email ───────────────────────────────────────────────────
$to      = 'atijain711@gmail.com';
$subLine = "New Enquiry from Transcom Website: $subject";

$body  = "You have received a new enquiry from the Transcom website.\n\n";
$body .= "-------------------------------------------\n";
$body .= "Name    : $name\n";
$body .= "Company : " . ($company ?: 'N/A') . "\n";
$body .= "Phone   : $phone\n";
$body .= "Email   : " . ($email ?: 'N/A') . "\n";
$body .= "Subject : $subject\n";
$body .= "-------------------------------------------\n\n";
$body .= "Message:\n$message\n\n";
$body .= "-------------------------------------------\n";
$body .= "Sent via transcomtools.com contact form\n";

$replyTo  = $email ? "Reply-To: $email\r\n" : '';
$headers  = "From: noreply@transcomtools.com\r\n";
$headers .= $replyTo;
$headers .= "X-Mailer: Transcom-Mailer\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ── Send ──────────────────────────────────────────────────────────
$sent = mail($to, $subLine, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Enquiry sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail server error. Please call or WhatsApp us directly.']);
}
?>
