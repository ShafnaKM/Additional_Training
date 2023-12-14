let strList=['ab','','abc','','abcd','xyz','pqrs','rstuv','',0];
let count=0;
for(let i of strList){
    if(i.length>3)
    {count++;}
}
console.log(count);
let filtered=strList.filter(i=>i);
console.log(filtered)