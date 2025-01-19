const webhookUrl = "https://discord.com/api/webhooks/1330618287741993100/EoG-CBByZu8qiFRM0ziefk05BI3_5SycPU3dkjWDOMxt-wHm8bnS-X4Wm3r3kfbqzee3"
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
