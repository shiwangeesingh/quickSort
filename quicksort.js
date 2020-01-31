exports.quicksortfunc = function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let left = []; let right = []
    const [pivot, ...rest] = arr
   rest.forEach(element => {
    element >= pivot ? right.push(element) : left.push(element) 
   })
    return quickSort(left).concat(pivot).concat(quickSort(right))
}

