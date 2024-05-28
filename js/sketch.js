const divContainer = document.querySelector('.div-container');
const GRID_DIV = 'pixel-div';
const HOVER_EFFECT = 'mouse-over'

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        const pixelDiv = document.createElement('div');
        pixelDiv.classList.toggle(GRID_DIV);
        divContainer.appendChild(pixelDiv);
    }
}

divContainer.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains(GRID_DIV)){ // classList returns a DOMTokenList
        event.target.classList.add(HOVER_EFFECT);
    }
});