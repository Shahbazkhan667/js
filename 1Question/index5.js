


  function calculatenBmi(){
  let weight = document.getElementsByClassName("weight")[0].value;
let hieght =document.getElementsByClassName("hieght")[0].value;
    let bmi = weight / (hieght*hieght);
    console.log(bmi)
   let res =  document.getElementById("result").innerHTML = bmi +" BMI WIEGTH";
  
}

calculatenBmi()
