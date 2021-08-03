function factorial(a) {
  var b = 1;
  if (a === 1) {
    return 1;
  }

  b = a * factorial(a - 1);
  return b;
}

// console.log(factorial(7))

function productOfArray(a) {
  var result = 1;
  function helper(ab) {
    if (ab.length === 0) {
      return 0;
    }
    if (ab.length > 0) {
      result = result * ab[0];
    }
    helper(ab.splice(1));
  }
  helper(a);
  return result;
}

// console.log(productOfArray([1,2,3,4]))

function recursiveRange(a) {
  if (a === 0) {
    return 0;
  }
  c = a + recursiveRange(a - 1);
  return c;
}

// console.log(recursiveRange(10))

var fib = function (n) {
  var result = 0;
  if (n <= 3) {
    return n - 1;
  }
  result = fib(n - 1) + fib(n - 2);
  return result;
};

function reverse(s) {
  var r = "";
  function helper(ss) {
    if (ss.length === 0) {
      return "";
    }
    if (ss.length > 0) {
      r = r + "" + ss.substr(ss.length - 1, 1);
      ss = ss.slice(0, -1);
    }
    helper(ss);
  }
  helper(s);
  return r;
}

// console.log(reverse('shuham'))

function isPalindrome(s) {
  var r = "";
  function helper(ss) {
    if (ss.length === 0) {
      return "";
    }
    if (ss.length > 0) {
      r = r + "" + ss.substr(ss.length - 1, 1);
      ss = ss.slice(0, -1);
    }
    helper(ss);
  }
  helper(s);

  return r === s ? true : false;
}

//console.log(isPalindrome('nan'))

const isOdd = (val) => {
  return val % 2 !== 0;
};

function someRecursive(a, fn) {
  function helper(b, fn) {
    if (b.length === 0) {
      return false;
    }
    if (fn(b[0])) {
      return true;
    }
    result = helper(b.splice(1), fn);
    return result;
  }
  result = helper(a, fn);
  return result;
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
