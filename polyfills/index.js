
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFun){
        const origArr = this;
        for (let i = 0; i < this.length; i++) {
            userFun(origArr[i],i);
            
        }
    }
}

if(!Array.prototype.myMap){
    Array.prototype.myMap = function (userFun) {
        const result = []

        for (let i = 0; i < this.length; i++) {
            const value = userFun(this[i],i)

            result.push(value)
            
        }

        return result
    }
}

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function (userFun) {

        const result = [];

        for (let i = 0; i < this.length; i++) {
            if(userFun(this[i])){

                result.push(this[i])
            }

            
        }

        return result
        
    }
}

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (userFun) {
        let result = 0

        for (let i = 0; i < this.length; i++) {
            const value = userFun(result, this[i]);
            result = value; 
        }
        return result;
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10]


const ret = arr.myForEach(function (value,index) {
    console.log(`value at index ${index} is ${value}`);
})


const n = arr.myMap((e)=>e*3)
const n2 = arr.map((e)=>e*2)

console.log(n);
console.log(n2);

const n3 = arr.filter((e)=>e%2===0)

const n4 = arr.myFilter((e)=>e%3===0)

console.log(n3);
console.log(n4);


const n5 = arr.reduce((acc,e)=>acc+e,0);
const n6 = arr.myReduce((acc,e)=>acc+e,0);





console.log(n5);
console.log(n6);