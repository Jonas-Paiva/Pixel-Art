function colorPalette() {
  const colorArray = ['black', 'blue', 'red', 'yellow'];
  const selectedOld = document.getElementsByClassName('selected');

  for (let index = 0; index < 4; index += 1) {
    const DivColor = document.getElementById(`${index}`);
    DivColor.style.backgroundColor = colorArray[index];
    DivColor.addEventListener('click', () => {
      selectedOld[0].classList.remove('selected');
      console.log(selectedOld[0]);

      DivColor.classList.add('selected');
      console.log(DivColor);
    });
  }
}

function criandoPixel() {
  const pixelBoard = document.getElementById('pixel-board');

  const DivPixel = document.createElement('div');

  pixelBoard.appendChild(DivPixel).className = 'pixel';

  DivPixel.addEventListener('click', () => {
    console.log('PIXEL');
  });
}

colorPalette();

criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();

criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();

criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();

criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();

criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();
criandoPixel();
