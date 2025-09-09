function convertAge (){
  let age = document.getElementById("age").value ;

  if ( age == "" || age<= 0 ){
    alert(" enter valid age ")
   return;
  }

  let days = age * 365 ;
 document.getElementById("days").value = days ;
}

function converthours(){
    
let hour = document.getElementById("hours").value;
if (hours ==" " || hours<=0 ){
    alert(" enter the valid no of hours ")
    return;
}
let seconds = hour * 3600;
document.getElementById("seconds").value = seconds;

}

  let word = document.getElementById("text");
function capitaliseWord(){

     let value = word.value;
     if(value.length>0){
        word.value = value.charAt(0).toUpperCase() + value.slice(1);
     }

   
}
console.log(word);

function nextNumber(){
    let arr =[ 4.8 ,9,12,23 ];
    let n =Number(document.getElementById("integar").value);
    let index= arr.indexOf(n);
    if (index !==-1 && index< arr.length -1){
        document.getElementById("result").innerText= arr[index+1];

    }

}

setTimeout(() => {
    console.log("hi ")
}, 3000);


 function calculatenBmi(){
  let weight = document.getElementsByClassName("weight")[0].value;
let hieght =document.getElementsByClassName("hieght")[0].value;
    let bmi = weight / (hieght*hieght);
    console.log(bmi)
   let res =  document.getElementById("resultBmi").innerHTML = bmi +" BMI WIEGTH";
  
}

calculatenBmi()



    function generateRandomArray(length, maxValue) {
      let arr = [];
      for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * maxValue));
      }
      return arr;
    }

    function pickFirstAndLast(arr) {
      return {
        first: arr[0],
        last: arr[arr.length - 1]
      };
    }

    function showArray() {
      let arr = generateRandomArray(8, 100); 
      let result = pickFirstAndLast(arr);
      document.getElementById("output").innerHTML =
        "Array: [" + arr.join(", ") + "]<br>" +
        "First Element: " + result.first + "<br>" +
        "Last Element: " + result.last;
    }


  let inputOne = document.getElementById("firstbox");
  let inputTwo = document.getElementById("secondbox");
  let resultBox = document.getElementById("thirdbox");

  function addNumbers() {
    if (inputTwo.value === "" ){
         resultBox.value = NaN;
    }
    else{
           let sum = Number(inputOne.value) + Number(inputTwo.value);
    resultBox.value = sum;
    }
  }

  inputOne.addEventListener("input", addNumbers);
  inputTwo.addEventListener("input", addNumbers);
    