var myObject = {
    name: "John",
    age: 30
  } as const// myConstObject'teki değerler artık değiştirilemez
  myObject.name = "Jane"; // Hata! Değer değiştirilemez
  myObject.age = 31; // Hata! Değer değiştirilemez
  console.log(myObject)