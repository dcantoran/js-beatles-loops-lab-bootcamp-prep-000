// add solution here

function theBeatlesPlay(mus, inst) {
  var arr = [];
  for(var i = 0; i < mus.length; i ++) {
    arr.push(`${mus[i]} plays ${inst[i]}`);
  }
  return arr;
}

function johnLennonFacts(arr) {
  var i = 0;
  while (i < arr.length) {
    arr[i] += '!!!';
    i ++;
  }
  return arr;
}