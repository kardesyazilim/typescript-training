
let employeeName:string = "Cücü Birişbeceremez"; 
let employeeDept:string = "Mobbing"; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//Cücü Birişbeceremez works in the Mobbing department. 
console.log(employeeDesc2);//Cücü Birişbeceremez works in the Mobbing department. 

let str:string = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...";

//temel metin fonksiyonlari


// charAt Belirtilen index numarasındaki karakteri geri döndürür.
//character = str.charAt(index)
let character:string = str.charAt(3);// returns q

// concat	Belirtilen metin değişkenlerini birbirine ekler.
let str1: string = 'Hello';
let str2: string = 'TypeScript';
str1.concat(str2); // returns 'HelloTypeScript'
str1.concat(' ', str2); // returns 'Hello TypeScript'
str1.concat(' Mr. ', 'Bond'); // returns 'Hello Mr. Bond'

// indexOf Metnin içerisinde belirtilen ifadeyi arama yapıp index numarasını döndürür. 
// ilk buldugunu dondurdugunu unutmamak gerekir

let str3: string = 'TypeScript';

str3.indexOf('T'); // returns 0
str3.indexOf('p'); // returns 2
str3.indexOf('e'); // returns 3
str3.indexOf('T', 1); // returns -1
str3.indexOf('t', 1); // returns 9

//replace() Metnin içerisinde belirtilen ifadeyi bulur ve istenen ifade ile yer değiştirir.

let str4: string = 'Hello Javascript';
let str5: string = 'TypeScript';

str4.replace('Java', 'Type'); // returns 'Hello TypeScript'
str4.replace('JavaScript', str5); // returns 'Hello TypeScript'
str4.replace(/Hello/gi, 'Hi'); // returns 'Hi TypeScript'



//split() Metni belirtilen ayraca göre bölüp sonucunda oluşan elemanları dizi olarak geri döndürür.

let str6: string = 'Apple, Banana, Orange';
let str7: string = ',';

str6.split(str7) // returns [ 'Apple', ' Banana', ' Orange' ]
str6.split(',') // returns [ 'Apple', ' Banana', ' Orange' ]
str6.split(',', 2) // returns [ 'Apple', ' Banana' ]
str6.split(',', 1) // returns [ 'Apple']

//toUpperCase() Tüm metni büyük harfe dönüştürür.

let str8: string = 'Hello Typescript';
str8.toUpperCase(); // returns 'HELLO TYPESCRIPT'
'hello typescript'.toUpperCase(); // returns 'HELLO TYPESCRIPT'

//toLowerCase() Tüm metni küçük harfe dönüştürür.

let str9: string = 'Hello Typescript';
str9.toLowerCase(); // returns hello typescript
'HELLO TYPESCRIPT'.toLowerCase(); // returns hello typescript

//charCodeAt()	Belirtilen metindeki UTF-16 kod birimi değeri olan bir sayı döndürür.

//codePointAt()	Belirtilen metinde başlayan UTF-16 kodlu kod noktasının kod noktası değeri olan negatif olmayan bir tam sayı döndürür.

//includes()	Metnin belirtilen ifadeyi içerip içermediğini kontrol eder.

//endsWith()	Bir metnin başka bir ifadeyle bitip bitmediğini kontrol eder.

//LastIndexOf()	Metnin içerisinde belirtilen ifadenin geçtiği en son index numarasını döndürür.

//localeCompare()	Bir metnin verilen ifadeden önce mi sonra mı geldiğini kontrol eder.

//match()	Verilen metne karşı normal ifadeyi eşleştirir.

//normalize()	Verilen metnin Unicode Normalizasyon Formunu döndürür.

//padEnd()	Geçerli metnin sonunu verilen ifadeyle doldurur.

//padStart()	Geçerli metnin başlangıcını verilen ifadeyle doldurur.

//repeat()	Belirli sayıda tekrar eden ifadelerden oluşan metni döndürür.

//search()	Merin içerisinde verilen ifadeyi arar.

//slice()	Bir metnin bir bölümünü döndürür.

//startsWith()	Bir metnin başka bir metin ile başlayıp başlamadığını kontrol eder.

//substr()	Belirtilen konumda ve verilen karakterlerden başlayarak bir metin döndürür.

//substring()	Verilen iki metin arasındaki bir metni döndürür.

//toLocaleLowerCase()	Metni geçerli yerel formata göre küçük harfe dönüştürür.

//toLocaleUpperCase()	Metni geçerli yerel formata göre büyük harfe dönüştürür.

//trim()	Metnin hem başındaki hem de sonundaki boşlukları siler.

//trimLeft()	Metnin sol tarafındaki (başındaki) boşlukları siler.

//trimRight()	Metnin sağ tarafındaki (sonundaki) boşlukları siler.
