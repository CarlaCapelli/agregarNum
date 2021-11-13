let numbers = [7, 6, 44, 101, 55, 60, 82, 1, 57, 6];

function agregarNum() {
  let agregar = String(prompt("quiere agregar un num?S/N"));

  if (agregar === "S") {
    let num = Number(prompt("que num quiere agregar?"));
    numbers.length++;
    numbers[numbers.length - 1] = num;
    numbers.sort((a, b) => {
      if (a === b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
      return 1;
    });
    console.log(numbers);
  }
}

agregarNum();
