// String utility functions

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function truncate(str, maxLen) {
  if (str.length <= maxLen) return str;
  return str.substring(0, maxLen) + '...';
}

// Bug: no null check - will throw on null/undefined input
function repeat(str, times) {
  return str.repeat(times);
}

module.exports = { capitalize, reverse, truncate, repeat };
