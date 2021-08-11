var a = [12, [100], 3, 4, [5, 55, 56, [27, 28, [29, 30, [31, 32]]]], 10];
console.log(a.length)

function ab(data) {
  var output = [];

  function flatList(data) {
    for (var i = 0; i < data.length; i++) {
      if (typeof data[i] === 'object' && data[i].length > 0) {
        flatList(data[i])
      }
      if (typeof data[i] === 'number') {
        output.push(data[i])
      }

    }
  }
  flatList(data);
  return output;
}
console.log(ab(a))