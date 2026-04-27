<?php
// ── CORS — allow the React app to POST here ───────────────────────
header('Access-Control-Allow-Origin: *');
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

// ── Basic validation ──────────────────────────────────────────────
if (!$name || !$phone || !$subject || !$message) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please fill all required fields.']);
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

$replyTo = $email ? "Reply-To: $email\r\n" : '';
$headers  = "From: noreply@transcomtools.com\r\n";
$headers .= $replyTo;
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
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
