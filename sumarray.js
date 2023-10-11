(function(arr) {
    var sum = arr.reduce(function(total, num) {
        return total + num;
    }, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);
