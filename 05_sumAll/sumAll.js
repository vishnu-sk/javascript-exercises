const sumAll = function (num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if(num1 >= 0 && num2 >= 0){
      if (num2 < num1) {
        num2 = num2 + num1;
        num1 = num2 - num1;
        num2 = num2 - num1;
      }
      let total = 0;
      for (i = num1; i <= num2; i++) {
        total += i;
      }
      return total;
    }else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
