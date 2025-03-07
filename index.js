// code your solution here
function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}
console.log(saturdayFun ("bathe my dog"));

//Test 2//
const mondayWork = function(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";

}
console.log(mondayWork ("go to the office"));

//Test 3//
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing"));  
console.log(encouragingPromptFunction());
