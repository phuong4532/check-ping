module.exports = function() {
  console.log('Checking ping to google');
  var i = 0
  for(;;) {
    if(i/1000 == 0) {
      console.log(i)
    }
    i = i + 1
  }
  return;
};
