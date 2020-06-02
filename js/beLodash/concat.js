function concat(...props) {
  return props.flat(2)
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other)