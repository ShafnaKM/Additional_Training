let arr=[10,20,30,40,50,60];

//filtering data
//find all the elements which are multiple of 20

let arr20s=arr.filter(e=>e%20==0)
console.log(arr)
console.log(arr20s)

//find an element

let arr30s=arr.find(e=>e%30==0)//when item is not there find will return a undefined.. filter will return a empty array
console.log(arr30s)

//Apply some changes to the elements

let arrd10=arr.map(e=>e/10)
console.log(arrd10)

//count sum reduce

let count20s= arr.filter(e=>e%20==0).length
console.log(count20s)

let  sum=arr.reduce((x,y)=>x+y)
console.log(sum);

let  sum1=arr.reduce((x,y)=>x+y).toFixed()
console.log(sum1);

let sum3=arr.concat(5);
console.log(sum3)

let sum4=arr.push(5)
console.log(sum4)


let names=['shafna','Yadu','Shyma','Charu','Ashna']
names.sort()
console.log(names)


let set = new Set([10,20,30,10,30,40,50]);
set.add(50)
set.add(60)
console.log(set)


let map=new Map();
map.set(1,'shafna');
map.set(2,'Charu');
map.set(3,'Yadu');
map.set(4,'Ashna');
map.set(5,'Shyma');

console.log(map.get(2));
