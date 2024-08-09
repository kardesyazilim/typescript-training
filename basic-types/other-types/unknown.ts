let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'John';
if (typeof userInput === 'string') {
  userName = userInput; // burada tip kontrolü yapıldı
  console.log(userName)
}
if (typeof userInput === 'number') {
  console.log(userInput)
}