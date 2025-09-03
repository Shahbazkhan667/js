
function converthours(){
    
let hour = document.getElementById("hours").value;
if (hours ==" " || hours<=0 ){
    alert(" enter the valid no of hours ")
    return;
}
let seconds = hour * 3600;
document.getElementById("seconds").value = seconds;

}
