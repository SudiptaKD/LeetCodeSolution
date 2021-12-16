/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let triangleArr = []
    for (let i=0 ; i < numRows; i++) {
        let arr = []
        arr[0] = 1;
        arr[i] = 1;
        for (let j=1 ; j < i; j++) {
            arr[j] = triangleArr[i-1][j-1] + triangleArr[i-1][j]
        }
        triangleArr.push(arr)
    }
    return triangleArr;
};
console.log(generate(10))