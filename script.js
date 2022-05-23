function display(event){
    let getimage=document.getElementById("block");
    getimage.src = URL.createObjectURL(event.target.files[0]);
}
function gray(){
    let val=document.getElementById("block");
    val.style.filter=" grayscale(100%)";
 }
 function invert(){
    let val=document.getElementById("block");
    val.style.filter=" invert(100%)";
 }
 function saturate(){
    let val=document.getElementById("block");
    val.style.filter=" saturate(8)";
 }
 function bright(){
    let val=document.getElementById("block");
    val.style.filter="brightness(200%)";
 }
 function contrast(){
    let val=document.getElementById("block");
    val.style.filter="contrast(200%)";
 }
 function oblur(){
    let val=document.getElementById("block");
    val.style.filter="blur(5px)";
 }
function sepia(){
   let val=document.getElementById("block");
   val.style.filter=" sepia(100%)";
}
function huerotate(){
    let val=document.getElementById("block");
    val.style.filter="hue-rotate(180deg)"
}
 function opacity(){
    let val=document.getElementById("block");
    val.style.filter="opacity(30%)";
 }
 function none(){
    let val=document.getElementById("block");
    val.style.filter="none";
 }
 function rotateleft(){
    let val=document.getElementById("block");
    val.style.transform="rotate(270deg)"
    val.style.width="570px"
    val.style.height="100%"
 }
 function rotateright(){
    let val=document.getElementById("block");
    val.style.transform="rotateZ(90deg)";
    val.style.width="570px"
    val.style.height="100%"
 }
 function rotateup(){
    let val=document.getElementById("block");
    val.style.transform="rotate(360deg)"
    val.style.width="100%"
 }
 function rotatedown(){
    let val=document.getElementById("block");
    val.style.transform="rotate(180deg)"
    val.style.width="100%"
 }
 function printDiv(){
   var printContents = document.getElementById("td1").innerHTML;
   var originalContents = document.body.innerHTML;

   document.body.innerHTML = printContents;

   window.print();

   document.body.innerHTML = originalContents;

}
