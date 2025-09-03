function nextNumber(){
    let arr =[ 4.8 ,9,12,23 ];
    let n =Number(document.getElementById("integar").value);
    let index= arr.indexOf(n);
    if (index !==-1 && index< arr.length -1){
        document.getElementById("result").innerText= arr[index+1];

    }

}
