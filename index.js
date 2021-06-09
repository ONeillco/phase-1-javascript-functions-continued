// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`; 
   
}
 saturdayFun();

 function mondayWork(activity = "go to the office") {
     return `This Monday, I will ${activity}.`
 }
 mondayWork();

 function wrapAdjective(style = "*") {
    return function(phrase) {
        return `You are ${style}${phrase}${style}!`
    }
      
    
 }
 
