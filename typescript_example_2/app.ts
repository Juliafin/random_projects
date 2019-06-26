type electricSwitch = "on" | "off";
const someValue: electricSwitch = "on"

const x: number = 5;

enum Colors {
  red = "RED",
  green = "GREEN",
  blue = "BLUE"
}




const sum = (num1: number, num2: number): number => num1 + num2


sum(3, 5);


interface coords {
  x: number;
  y: number;
  z?: number;
}


interface triangle {
  color?: Colors;
  coords: coords;
  base: number;
  height: number;
  area: {(base, height):number} 
}


class T1 implements triangle {
  coords = {
    x: 1,
    y: 2,
    z: 3
  }
  base = 5;
  height = 10;
  area = (base, height) => .5 * base * height;
  color = Colors.blue
}








