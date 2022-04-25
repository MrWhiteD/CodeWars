/*
https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
*/
function add(a, b) {
    function NaN2Numb(val){
        return val===undefined? 0: Number(val)
    }
    let sum = []
    a = a.split('').reverse()
    b = b.split('').reverse()
    let flag = 0
    for(let i=0; i<a.length||i<b.length; i++){
        sum.push((NaN2Numb(a[i])+NaN2Numb(b[i])+flag)%10)
        flag = (NaN2Numb(a[i])+NaN2Numb(b[i])+flag)>=10 ? 1:0
    }
    if (flag===1) sum.push(1)
    return ''+sum.reverse().join('')
    // return (Number(a) + Number(b)).toString(); // Fix me!
}

// console.log(add("888", "222"))
console.log(add('63829983432984289347293874', '90938498237058927340892374089'))