
let arr=[1,2,3,4,5,'Ramesh','Suresh'];
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

for(let i of arr){
    console.log(i)
}

// Adding a new Element

arr.push(100);

arr.push('Harsh');
console.log(arr)

// Removing an element

arr.pop();  // removes the last element

console.log(arr)

// How to remove a specific element

arr.splice(2);
console.log(arr);