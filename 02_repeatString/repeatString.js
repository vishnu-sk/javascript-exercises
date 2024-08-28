const repeatString = function (text, noOfTimes) {
    let output = "";
    if (noOfTimes < 0) {
        output = "ERROR";
    }
    else if(text == "")
    {
        return output;
    }
    else {
        for (i = 0; i < noOfTimes; i++) {
            output += text;
        }
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
