
// let inputOne = document.getElementById("firstbox")[0].value;
//     let inputTwo = document.getElementById("secondbox")[0].value;
//   let res = document.getElementById("thirdbox");
// function addNumbers() {
//     let sum = Number(inputOne) + Number(inputTwo);
//   res.value = sum;
  
// }
// addNumbers()
//     inputOne.addEventListener("input", addNumbers);
//     inputTwo.addEventListener("input", addNumbers);





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