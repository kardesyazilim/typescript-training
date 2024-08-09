const myValue: any = "Merhaba, TypeScript!";// myValue değişkeni "any" türüne dönüştürüldü
const myAnyValue = myValue as any;// myAnyValue üzerinde herhangi bir tür güvenliği kontrolü yapılmaz
const ret = myAnyValue.length; // Hata alınmaz, ancak çalışma zamanında hatalar meydana gelebilir