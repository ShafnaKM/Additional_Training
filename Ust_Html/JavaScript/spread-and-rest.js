const average=function(...nums){

    let sum=0;

    for(let num of nums){

        sum+=num;

    }

    return sum/ nums.length;

}

let avg=average(10,20,30,40,50);

console.log(avg);

let arr=[10,20,30,40,50] 
let [a,b]=arr;//array de-Structuring
let [x,,,y]=arr;
let [p,...q]=arr;//spread operator
console.log(arr);
console.log(a,b);
console.log(x,y);
console.log(p,q);

let arr2=[...arr];
console.log(arr2);

let employee={
    id:1001,
    name:'Rahul',
    email:'rahul@yahoo.com',
    salary:'52000.0'
};

// let {id}=employee;//object de-structuring
// console.log(id);

let {id,email}=employee;//object de-structuring
console.log(id,email);

