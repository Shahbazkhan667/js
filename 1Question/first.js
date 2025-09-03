function convertAge (){
  let age = document.getElementById("age").value ;

  if ( age == "" || age<= 0 ){
    alert(" enter valid age ")
   return;
  }

  let days = age * 365 ;
 document.getElementById("days").value = days ;
}
    