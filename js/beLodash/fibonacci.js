function fibonacci(count = 1, callback) {
  if (count === 1) return callback(1);
  if (count === 2) return callback(2);
  return fibonacci(count - 2, callback) + fibonacci(count - 1, callback);
}
