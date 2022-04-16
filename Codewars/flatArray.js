function flat(arr) {
    const resArr = []
    arr.map(el => flat(el))
    for (let itm of arr) {
        if (Array.isArray(itm)) {
            //console.log("y");
            return itm.forEach((el) => flat(el));
        } else {
            resArr.push(itm);
        }
    }
    return resArr
}
console.log(flat([[1], [[2, 3]], [[[4]]]]));