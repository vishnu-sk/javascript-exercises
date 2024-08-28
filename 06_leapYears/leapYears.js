const leapYears = function(year) {
    if(Number.isInteger(year) && year % 4 == 0)
    {
        if(year % 100 ==0 && year % 400 != 0)
        {
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
