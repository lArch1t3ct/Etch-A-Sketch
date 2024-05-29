const GRID_DIV = 'pixel-div';
const HOVER_EFFECT = 'mouse-over';

const divContainer = document.querySelector('.div-container');
const resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', () => {
    divContainer.replaceChildren();

    let userDimension;
    do {
        userDimension = prompt("How many divs per row?", 16);
    } while (userDimension > 100);

    const divs_per_side = userDimension ?? 16;
    divContainer.style["max-width"] = `${divs_per_side * 16 + 6}px`;

    for(let i = 0; i < divs_per_side; i++){
        for(let j = 0; j < divs_per_side; j++){
            const pixelDiv = document.createElement('div');
            pixelDiv.classList.toggle(GRID_DIV);
            divContainer.appendChild(pixelDiv);
        }
    }
});



divContainer.addEventListener('mouseover', (event) => {
    const RED = Math.floor(Math.random() * 255);
    const GREEN = Math.floor(Math.random() * 255);
    const BLUE = Math.floor(Math.random() * 255);

    if(event.target.classList.contains(GRID_DIV)){ // classList returns a DOMTokenList
        if(!event.target.style["background-color"].includes("rgb")){
            event.target.style["background-color"] = `rgb(${RED}, ${BLUE}, ${GREEN})`;
        }
        
    }
});