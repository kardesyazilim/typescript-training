//Sayı Numaralandırma - Numeric Enum
enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}
// Örnekteki çıktı:
/* 
Newspaper = 0
Newsletter = 1
Magazine = 2
Book = 3
*/

//Enum veri tipinde olacak değişkenlere direk değerde atanabilir. 
//Numaralandırmanın başlangıcı tanımlanabilir. 
//(Aşağıdaki örnekte ilk değişken bir ile başlar, 
//diğer değişkenler sırayla 2,3 ve 4 değerlerini alır.)

enum PrintMedia2 {
Newspaper = 1,
Newsletter,
Magazine,
Book
}

// Örnekteki çıktı:

/* 
Newspaper = 1
Newsletter = 2
Magazine = 3
Book = 4
*/

//Enum üyelerine sıralı değerler atamak gerekli değildir. 
//Herhangi bir değere sahip olabilirler.

enum PrintMedia3 {
Newspaper = 1,
Newsletter = 5,
Magazine = 5,
Book = 10
}



/* 
Newspaper = 1
Newsletter = 5
Magazine = 5
Book = 10
*/

// Enum, aşağıda gösterildiği gibi, 
// bir fonksiyon parametresi veya dönüş tipi olarak kullanılabilir:
enum PrintMedia4 {
Newspaper = 1,
Newsletter,
Magazine,
Book
}

function getMedia(mediaName: string): PrintMedia4 {
if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
    return PrintMedia4.Magazine;
}
return PrintMedia4.Newsletter;
}

let mediaType: PrintMedia4 = getMedia('Forbes'); // returns Magazine


//Hesaplamalı Enum — Computed Enum


enum PrintMedia5 {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }
    return 1;
}

PrintMedia5.Newsletter; // returns 5
PrintMedia5.Magazine; // returns 15



//Metin İfadeleri Numaralandırma — String Enum

enum PrintMedia6 {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
PrintMedia6.Newspaper; //returns NEWSPAPER
PrintMedia6['Magazine'];//returns MAGAZINE


//Heterojen Enum — Heterogeneous Enum

enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}
//Rezerve Enum — Reserve Enum

enum PrintMedia7 {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
  }
  
  PrintMedia7.Magazine;   // returns  3
  PrintMedia7["Magazine"];// returns  3
  PrintMedia7[3];         // returns  Magazine