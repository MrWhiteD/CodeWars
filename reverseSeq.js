const reverseSeq = n => {
    return Array.from({ length: n }, (v, k) => k+1).reverse();
};

console.log(reverseSeq(6))