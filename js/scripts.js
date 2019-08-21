$(document).ready(function(){
 $("form#Pigs").submit(funcion(event){
   event.preventDefault();
   var vowel = ("A, a, E, e, I, i, O, o, U, u, Y, y")
   console.log(vowel)
 });
});
