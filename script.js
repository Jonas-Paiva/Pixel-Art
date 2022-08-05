function colorPalette() {
  const colorArray = ['black', 'blue', 'red', 'yellow'];

  for (let index = 0; index < 4; index += 1) {
    const DivColor = document.getElementById(`${index}`);

    DivColor.style.backgroundColor = colorArray[index];

    DivColor.addEventListener('click', () => {
      const selectedOld = document.getElementsByClassName('selected');
      selectedOld[0].classList.remove('selected');
      DivColor.classList.add('selected');
    });
  }
}

window.onload = colorPalette;

function criandoPixel(Y = 2) {
  const DivPixel = document.createElement('div');
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.appendChild(DivPixel).className = 'pixel';

  DivPixel.addEventListener('click', () => {
    const selectedNow = document.getElementsByClassName('selected')[0];
    DivPixel.style.backgroundColor = selectedNow.style.backgroundColor;
  });
}
criandoPixel();

const button = document.getElementById('clear-board');

button.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index = +1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
