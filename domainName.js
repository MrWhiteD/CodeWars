/*
https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
*/

function domainName(url){
    return /\/\/(?:w{3}\.)?([\w-]+)\./.exec(url)[1]
}

console.log(domainName("www.xakep.ru"))