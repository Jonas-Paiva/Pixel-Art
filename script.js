function colorPalette() {
  const colorArray = ['black', 'blue', 'red', 'yellow'];

  for (let index = 0; index < 4; index += 1) {
    const DivColor = document.getElementById(`${index}`);
    DivColor.style.backgroundColor = colorArray[index];
    console.log(DivColor);
  }
}

colorPalette();
