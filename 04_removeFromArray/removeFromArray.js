const removeFromArray = function(arr, ...num) 
{
    // return arr.filter((i)=>i!=num);
    return arr.filter(filtercrit);
    function filtercrit(value)
    {
        for(let arg of num)
        {
            if(value === arg) return false;
        }
        return true;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
