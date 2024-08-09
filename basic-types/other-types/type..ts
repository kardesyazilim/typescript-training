// example 1
type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });
  //example 2
  
  type ID = number | string;
  
  //example 3
  type UserInputSanitizedString = string;
   
  function sanitizeInput(str: string): UserInputSanitizedString {
    return sanitize(str);
  }
   
  // Create a sanitized input
  let userInput = sanitizeInput(getInput());
   
  // Can still be re-assigned with a string though
  userInput = "new input";

function sanitize(str: string): string {
    throw new Error("Function not implemented.");
}


