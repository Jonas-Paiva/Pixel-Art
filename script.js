function colorPalette() {
  const colorArray = ['black', 'blue', 'red', 'yellow'];

  for (let index = 0; index < 4; index += 1) {
    const DivColor = document.getElementById(`${index}`);
    DivColor.style.backgroundColor = colorArray[index];
  }
}

colorPalette();

function criandoPixel() {
  const pixelBoard = document.getElementById('pixel-board');

  const DivPixel = document.createElement('div');

  pixelBoard.appendChild(DivPixel).className = 'pixel';

  console.log('teste');
}
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
