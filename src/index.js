module.exports = function reverse (n) {
  return n.toString().replaceAll('-', '').split('').reverse().join('');
}
