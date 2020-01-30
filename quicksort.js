exports.quicksortfunc = function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let left = []; let right = []
    const [pivot, ...rest] = arr
   rest.forEach(element => {
    element >= pivot ? right.push(element) : left.push(element) 
   })
  // console.log(quickSort(left).concat(pivot).concat(quickSort(right)))
    return quickSort(left).concat(pivot).concat(quickSort(right))
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

