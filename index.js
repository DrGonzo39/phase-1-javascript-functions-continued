function saturdayFun(activity = 'roller-skate') {
   return `This Saturday, I want to ${activity}!`
}
function mondayWork(thing = 'go to the office') {
   return `This Monday, I will ${thing}.`
}
function wrapAdjective(_string = '*') { 
   return function(adj = 'special') {
      if (_string==='*') {
         return `You are *${adj}*!`
      }
      else return `You are ||${adj}||!`
   }
}