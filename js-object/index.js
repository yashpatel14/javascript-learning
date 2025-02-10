let person1 = {
    firstName:"yash",
    lastName:"patel",
    address:{
        address1:"surat",
        city:"surat"
    }
}

// let person2 = {
//     ...person1,
//     address:{
//         ...person1.address
//     }
// }

const person1KaString = JSON.stringify(person1)

console.log(person1KaString);

let person2 = JSON.parse(person1KaString)

person2.firstName = "shukan"
person2.address.address1 = "demo"

console.log(person2);
console.log(person1);
