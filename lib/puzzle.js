// console.log("Hi peeps!");

// 1. Select an Element
const buttonHint = document.querySelector('#show-hint');
const hint = document.querySelector('.hint');

// 2. Listen to an event
buttonHint.addEventListener('click', (event) => {
  // 3. Change the DOM
  hint.classList.add('active');
});




const checkIfEmpty = (tile) => {
  const tileX = tile.cellIndex;
  const tileY = tile.parentElement.rowIndex;
  const emptySpace = document.querySelector('.empty');
  const emptySpaceX = emptySpace.cellIndex;
  const emptySpaceY = emptySpace.parentElement.rowIndex;

  return (Math.abs(tileX - emptySpaceX) + Math.abs(tileY - emptySpaceY)) === 1;
}

const swapTiles = (tile) => {
  const emptySpace = document.querySelector('.empty');
  emptySpace.classList.remove('empty');
  emptySpace.innerText = tile.innerText;
  tile.innerText = "";
  tile.classList.add('empty');
};

const didWeWine = (tiles) => {
  const currentOrderArray = [];
  const winOrder = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  tiles.forEach((tile) => {
    currentOrderArray.push(tile.innerText);
  });
  return currentOrderArray.join() === winOrder;
};

// Select all the tiles
const tiles = document.querySelectorAll('table tr td');

// Iterate over the array of tiles
tiles.forEach((tile) => {
  // Listen to a 'click'
  tile.addEventListener("click", (event) => {
    const clickedTile = event.currentTarget;
    // Check if there is a empty tile around that tile
    console.log(checkIfEmpty(clickedTile));
    if (checkIfEmpty(clickedTile)) {
      // if there is a empty space, move the number and empty space
      swapTiles(clickedTile);
      // Check if the order is correct or not
      if (didWeWine(tiles)) {
        alert("You won!");
      }
    }
  });
});




