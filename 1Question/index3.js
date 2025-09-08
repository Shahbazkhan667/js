     let word = document.getElementById("text");
function capitaliseWord(){

     let value = word.value;
     if(value.length>0){
        word.value = value.charAt(0).toUpperCase() + value.slice(1);
     }

   
}
console.log(word);

// function convertstring(){
//  var result = name.charAt(0).toUpperCase();
// console.log(result);


// }