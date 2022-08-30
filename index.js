function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`
}

let wrapAdjective = function(emphatic) {
    return function(empText) {
    return `You are ${emphatic}${empText}${emphatic}!`
    }
}
