 



let names = +prompt("son kiriting !")
let age = +prompt("Sonning darajasini kiriting !")
names * age

for (let i = names; i <= age; i++) {
    names = names * i * i
    alert(names)
}



while (isNaN(names)) {
    names = +prompt("siz harf kiritib qoydingiz !")
}
while (isNaN(age)) {
    age = +prompt("siz harf kiritib qoydingiz !")
}













// 1 * 2 * 3 * 4 * 5
// let box = 1 
// for (let i = 1; i <= 5; i++) {
//     box = box * i
  
//    console.log(box);
// }