const reverseString = function(text) {
    if(text == "")
    {
        return "";
    }
    let newArr = Array.from(text);
    newArr = newArr.reduceRight((i,j)=>i+j);
    // function newfunc(i ,j) {return i+j;}
    return newArr;
};

// Do not edit below this line
module.exports = reverseString;
