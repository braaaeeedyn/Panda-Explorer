function fetchRandomPandaFact() {
    const apiFactUrl = 'https://panda-api-temp.vercel.app/fact';

    fetch(apiFactUrl)
        .then(response => response.json())
        .then(data => {
            const fact = data.fact;
            document.getElementById('panda-fact').textContent = fact;
        })
        .catch(error => {
            console.error('Error fetching panda fact:', error);
            document.getElementById('panda-fact').textContent = 'Sorry, there was an error fetching the panda fact.';
        });
}

function fetchRandomPandaPicture() {
    const apiPicUrl = 'https://panda-api-temp.vercel.app/pic';

    fetch(apiPicUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            const imageContainer = document.getElementById('panda-image-container');
            imageContainer.innerHTML = '';
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = 'Random Panda';
            imageElement.classList.add('panda-image');
            imageContainer.appendChild(imageElement);
        })
        .catch(error => console.error('Error fetching panda picture:', error));
}

function fetchRandomPandaGif(side) {
    const apiGifUrl = 'https://panda-api-temp.vercel.app/gif';

    fetch(apiGifUrl)
        .then(response => response.json())
        .then(data => {
            const gifUrl = data.url;
            const gifContainer = document.getElementById(side === 'left' ? 'left-gif-container' : 'right-gif-container');
            gifContainer.innerHTML = '';
            const gifElement = document.createElement('img');
            gifElement.src = gifUrl;
            gifElement.alt = 'Random Panda GIF';
            gifContainer.appendChild(gifElement);
        })
        .catch(error => console.error('Error fetching panda GIF:', error));
}

const allFacts = [];
function fetchAllPandaData() {
    const apiUrl = 'https://panda-api-temp.vercel.app/all';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('panda-image-row').style.display = 'flex';
            const factDisplay = document.getElementById('panda-fact-display');
            factDisplay.textContent = data.fact;
            factDisplay.classList.add('styled-fact');
            allFacts.push(data.fact);
            updateFactList();

            const imageDisplay = document.getElementById('panda-image-display');
            imageDisplay.innerHTML = '';
            const imageElement = document.createElement('img');
            imageElement.src = data.pic;
            imageElement.alt = 'Random Panda';
            imageElement.classList.add('panda-image');
            imageDisplay.appendChild(imageElement);

            const gifDisplay = document.getElementById('panda-gif-display');
            gifDisplay.innerHTML = '';
            const gifElement = document.createElement('img');
            gifElement.src = data.gif;
            gifElement.alt = 'Random Panda GIF';
            gifElement.classList.add('panda-gif');
            gifDisplay.appendChild(gifElement);
        })
        .catch(error => console.error('Error fetching panda data:', error));
}

function updateFactList() {
    const factListElement = document.getElementById('fact-list');
    factListElement.innerHTML = ''; 

    allFacts.forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;

        listItem.addEventListener("click", () => {
            navigator.clipboard.writeText(fact)
                .then(() => {
                    alert("Fact copied to clipboard.");
                })
                .catch(err => {
                    console.error("Failed to copy text: ", err);
                });
        });
        factListElement.appendChild(listItem);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    
    if (document.getElementById('left-gif-container')) {
        fetchRandomPandaGif('left');
    }
    if (document.getElementById('panda-image-container')) {
        fetchRandomPandaPicture();
    }
    if (document.getElementById('right-gif-container')) {
        fetchRandomPandaGif('right');
    }


});