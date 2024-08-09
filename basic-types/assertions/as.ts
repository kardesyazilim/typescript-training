// In this situation, you can use a type assertion to specify a more specific type
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

//You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:

const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");