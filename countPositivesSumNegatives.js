/*
https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
*/
function countPositivesSumNegatives(input) {
    if(input?.length>0)
        return input.reduce(function(acc, curVal){
            if(curVal > 0){
                acc[0] +=1
            }else if(curVal<0){
                acc[1] +=curVal
            }
            return acc
        }, [0,0]);
    else return []
}