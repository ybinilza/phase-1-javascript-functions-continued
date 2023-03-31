// code your solution here
function saturdayFun(saturdayActivity = "roller-skate")
{
  return(`This Saturday, I want to ${saturdayActivity}!`)
}

const mondayWork = function(mondayActivity="go to the office"){
 return(`This Monday, I will ${mondayActivity}.`)
}

function wrapAdjective(value)
{
    return (function(defaultValue = "special")
    {
        return(`You are ${value}${defaultValue}${value}!`)
    })
}