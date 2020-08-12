function bug3()
{
  //HINT: use the debugger to see the value of 'firstHalf' and 'secondHalf'
  var str = "I cannot seem to fix this bug!"
  var firstHalf = str.substring(0, 5);
  var secondHalf = str.substring(16, 29);
  var finalStr = firstHalf + secondHalf;
  console.log(finalStr);
  //should print: "I can fix this bug"
}