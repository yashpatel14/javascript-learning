
//create an Array of different type of my team
const myTeam = ["yash","shukan","jekin","parth","krish","kenil"];
console.log(myTeam);

// add ved to my team
myTeam.push("ved")
console.log(myTeam);

// remove kenil from my team
const index = myTeam.indexOf("kenil")

if(index > -1){
    myTeam.splice(index,1)
}

console.log(myTeam);

// Explaintion:-
// splice is use for removing the element of array
// splice function tack two value first it's take removeing value index and secound is how many number of value remove


//filter the list to only include myTeam that are in collage

const jobPerson = myTeam.filter(job=>job!=="krish")

console.log(jobPerson);

// short the name on a-z

myTeam.sort()
// myTeam.reverse()

console.log(myTeam);


//use a for loop to print each type of myTeam in Array

for (let i = 0; i < myTeam.length; i++) {
    const element = myTeam[i];
    console.log(element);
    
}

//use a for for loop how many member do a job excluding krish

let myJobPerson = 0;

for (let i = 0; i < myTeam.length; i++) {
    if(myTeam[i]!=="krish"){
        myJobPerson++
    }
    
}
console.log(myJobPerson);

//my team name in Uppercase

const upperMyTeam = [];

for (let i = 0; i < myTeam.length; i++) {
    upperMyTeam.push(myTeam[i].toUpperCase())
    // upperMyTeam.push(myTeam[i].toLowerCase())

    
}

console.log(upperMyTeam);

// use a for loop for get most number of name cheractor

let longName="";
let smallName=""
for (let i = 0; i < myTeam.length; i++) {
    if(myTeam[i].length>longName.length){
        longName = myTeam[i]
    }else if(myTeam[i].length<longName.length){
        smallName = myTeam[i]
    }
    
}

console.log(longName);
console.log(smallName);


// reverse the name of array

const reverseArray = [];

for (let i = myTeam.length - 1; i >= 0; i--) {
    reverseArray.push(myTeam[i])
    
}

console.log(reverseArray);