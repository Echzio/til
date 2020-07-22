function concat(...props) {
  return props.reduce((acc, el) => {
    const result = Array.isArray(el) ? concat(...el) : [el]
    return [...acc, ...result]
  }, [])
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);

console.log(other)