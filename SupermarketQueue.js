function queueTime(cust, n) {
    let arrTill = Array(n)
    let totalTime = 0
    totalTime = cust.reduce(function (acc, curVal){
        if (arrTill[arrTill.length-1] === undefined){
            arrTill[arrTill.length-1] = curVal
        }else{
            arrTill[0] += curVal
        }
        arrTill.sort((a,b) => a-b)
        return curVal > acc? curVal : acc
    }, 0)
    arrTill.sort((a,b) => b-a)
    console.log(arrTill)
    console.log(totalTime)
    console.log(arrTill[0])
    return arrTill[0]===undefined?0:arrTill[0]
}
queueTime([2,2,3,3,4,4], 2)