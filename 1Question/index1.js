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
     let word = document.getElementById("text");
function capitaliseWord(){
  let value = word.value;
  let words= value.split(" ");
  let result =[];
  for (let i=0; i< words.length; i++  ){
    let w = words[i];
    
     if(w.length>0){
        result.push(w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      
     }
   
 
}
  word.value=result.join(" ")
}

//  let arr=[100 ,200 ,300, 5000,] ;


//  let num = document.getElementById("integar").value;
//   console.log(num)


// let b = Number(num);
function nextNumber(){
    let num = document.getElementById("integar").value;
    let b =Number(num);
     let y = 1;
  let a = y += b;
 document.getElementById("result").innerText=a;
//   if(num.includes(",")){
// let arr =num.split(",").map( x=> Number(x.trim()));
// let last = arr[arr.length -1]
//  if(num.includes(".")){
//   let [intPart ,decimalPart] =num.split(".");
//        let y= parseInt(decimalPart.slice(-1) );
//        let b = y += 1;
//        decimalPart =decimalPart.slice(-0 ,-1) + b;
//        let e = intPart + "." + decimalPart ;
//       //  let x = Number(e.toFixed(3));
// document.getElementById("result").innerText=e;
//     }
//     else{
// let r = last + 1;
// document.getElementById("result").innerText=r;
//     } 

if (num.includes(",")) {
  let arr = num.split(",").map(x => x.trim()); // array of numbers/strings
  let last = arr[arr.length - 1]; // last element as string

  if (last.includes(".")) {
    
 let [intPart ,decimalPart] =last.split(".");
       let y= parseInt(decimalPart.slice(-1) );
       let b = y += 1;
       decimalPart =decimalPart.slice(-0 ,-1) + b;
       let e = intPart + "." + decimalPart ;
       document.getElementById("result").innerText = e;
  // } else {
    
  //   let result = parseInt(last) + 1;
  //   document.getElementById("result").innerText = result;
  // } 
}
}
// else if( num % 1 !== 0){
 else if (num.includes(".")){
       let [intPart ,decimalPart] =num.split(".");
       let y= parseInt(decimalPart.slice(-1) );
       let b = y += 1;
       decimalPart =decimalPart.slice(-0 ,-1) + b;
       let e = intPart + "." + decimalPart ;
      //  let x = Number(e.toFixed(3));
document.getElementById("result").innerText=e;

}

}






//  let arr =num.split(",").map( x=> Number(x.trim()));
// let last = arr[arr.length -1]
//       let r = last + 0.1;
//       document.getElementById("result").innerText=r;







//     let n =Number(document.getElementById("integar").value);
//     let index= arr.indexOf(n);
//        let newArr = arr.filter ( (e)=>{
//         return e>=n
//        })   

// console.log( newArr);
// let newA = newArr[index+1]
// document.getElementById("result").innerText=newA;


