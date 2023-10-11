(function(arr) {
    var uniqueArr = arr.filter(function(item, index, self) {
        return self.indexOf(item) === index;
    });
    console.log(uniqueArr);
})([1, 2, 2, 3, 4, 4, 5]);
