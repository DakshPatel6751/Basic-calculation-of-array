function findSort(value)
{
   return value.sort((a,b)=>a.age - b.age)
}
let employee = [
    { name : "John", 
        age : 30
    },
    { 
        name : "Jane", 
        age : 25
    },
    { name : "Bob",
         age : 40

    },

]
console.log(findSort(employee));