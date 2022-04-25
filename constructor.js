/*
https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript
*/
function treeByLevels (rootNode) {
    if (rootNode === null) return []
    let queue = []
    let values = []
    queue.push(rootNode)
    while(queue.length > 0){
        let tempNode = queue.shift();
        values.push(tempNode.value);
        if (tempNode.left){
            queue.push(tempNode.left);
        }
        if (tempNode.right){
            queue.push(tempNode.right);
        }
    }
    return values;
}
