$(document).ready(function(){

 $("form#Pigs").submit(function(event){
   event.preventDefault()
    var searchTerm =  'A, a, E, e, I, i, O, o, U, u, Y, y';
    var indexOfFirst = sentence.indexOf(searchTerm);
      $(".sentence").alert(sentenceofinput);
      var sentence = $("input#sentence")



 });
});
// if (indexOf("#sentence")["A", "a", "E", "e", "I", "i", "O", "o"]){
//   alert("yup")
// }
// else {
//   alert("no")
// }
// var vowel = ("A, a, E, e, I, i, O, o, U, u, Y, y")
// console.log(vowel)
