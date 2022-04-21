/*
https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
*/
function add(a, b) {
    let length = a.length>b.length?a.length:b.length
    let sum = []
    a = a.split('').reverse()
    b = b.split('').reverse()
    for(let i=length+1; i<=a.length||i<=b.length; i--){

    }
    // return (Number(a) + Number(b)).toString(); // Fix me!
}

console.log(add("888", "222"))
// console.log(add('63829983432984289347293874', '90938498237058927340892374089'))