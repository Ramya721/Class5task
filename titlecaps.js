(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    }
    console.log(arr);
})(["hello world"]);
