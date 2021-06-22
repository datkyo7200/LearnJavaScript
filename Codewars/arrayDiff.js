function arrayDiff(a1, b1) {
  var a = [],
    diff = [];
  for (var i = 0; i < a1.length; i++) {
    a[a1[i]] = true;
    console.log(a[a1[i]]);
  }
  for (var i = 0; i < b1.length; i++) {
    if (a[b1[i]]) {
      delete a[b1[i]];
    } else {
      a[b1[i]] = true;
    }
  }

  for (var k in a) {
    diff.push(Number(k));
  }

  return diff;
}
console.log(arrayDiff([1, 2, 2, 2, 3], [8]));
