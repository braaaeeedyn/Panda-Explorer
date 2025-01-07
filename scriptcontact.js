const webhookUrl = "https://discord.com/api/webhooks/1326164862224699412/pcJztBW65x7ZQoVq54i8ai5QSChpxyrssHGqLFEuW7bUeNkqmw3dd5WqUhZw21HGi2e1"
const nameEl = document.getElementById('name-input');
const messageEl = document.getElementById('message-input');
const sendButtonEl = document.getElementById('send-button')

sendButtonEl.addEventListener('click', async () => {
    const typedName = nameEl.value;
    const typedMessage = messageEl.value;

    if (typedName !== "" && typedMessage !== "") {
        try {
            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({
                    content:typedMessage,
                    username: typedName,
                })
            });
            nameEl.value = "";
            messageEl.value = "";
        } catch(error) {
            alert("Can't send message!");
            console.log(error);
        }
    }
})
