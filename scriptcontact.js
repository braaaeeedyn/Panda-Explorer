const webhookUrl = "https://discord.com/api/webhooks/1313384332840403016/M7bWyeZaZyEMY_qSLpArOYNP-h26NCWKUOEBuBGmQXu4XtUGV5F9-jbrxXBk0hypDd0q"
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