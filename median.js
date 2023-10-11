(function(arr1, arr2) {
    var combinedArr = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    
    var length = combinedArr.length;
    var median = (combinedArr[Math.floor(length / 2)] + combinedArr[Math.ceil(length / 2)]) / 2;
    console.log(median);
})([1, 3, 5], [2, 4, 6]);
