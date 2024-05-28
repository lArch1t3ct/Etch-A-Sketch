const divContainer = document.querySelector('.div-container');

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const pixelDiv = document.createElement('div');
        pixelDiv.classList.toggle('pixel-div');
        divContainer.appendChild(pixelDiv);
    }
}