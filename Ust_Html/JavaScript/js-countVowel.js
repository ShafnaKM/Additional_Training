let string='Hello Abc';
// let count=0;
// for(let i of string){
//     i.toLowerCase();
//     console.log(i)
//     if(i=='a'|| i==='e'|| i==='i'||i==='o'||i==='u'||i==='A'||i==='E'||i==="I"||i==="O"||i==="U")
//     count++;
// }
// console.log(count);
//console.log(string.charAt(0));
let result=string.match(/[aeiouAEIOU]/g);
console.log(result.length);
