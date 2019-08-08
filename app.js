
var outText = document.querySelector("#output");
var rotor1 = document.querySelector("#rotor1");
var rotor2 = document.querySelector("#rotor2");
var rotor3 = document.querySelector("#rotor3");


let rot1val = rotor1.value;
let rot2val = rotor2.value;
let rot3val = rotor3.value;
document.querySelector("#rt1text").textContent = rot1val;

document.querySelector("#rt2text").textContent = rot2val;

document.querySelector("#rt3text").textContent = rot3val;

rotor1.addEventListener("mousemove", ()=>{
rot1val = rotor1.value;
document.querySelector("#rt1text").textContent = rot1val;
});
rotor2.addEventListener("mousemove", ()=>{
rot2val = rotor2.value;
document.querySelector("#rt2text").textContent = rot2val;
});
rotor3.addEventListener("mousemove", ()=>{
rot3val = rotor3.value;
document.querySelector("#rt3text").textContent = rot3val;
});
var result = "";


document.querySelector("#txt").addEventListener("keydown", (event) => {
	 if(event.keyCode == 8 && result != "")
	 {
	 console.log(event.keyCode);
	 	result = result.slice(0,-1);
 outText.textContent = result;
}});
document.querySelector("#txt").addEventListener("keypress", (event)=>{
var txtInput = document.querySelector("#txt").value;
txtInput = txtInput.toUpperCase();

   let shift = (rot1val + rot2val + rot3val)
   if(shift <= 26)
   {
   shift = shift;
   }
   else if(shift > 26)
   {
   shift = shift%26;
   }
 let c = event.keyCode;
 


if(c == 32)
 {
	 result+= " ";
 }
 else if(c >= 65 && c <=97 || c >= 98 && c<=122)
 {
 result += String.fromCharCode(65+( c - 65 + shift) % 26);
 rot1val++;
 if(rot1val == 26)
 {
 rot1val = 1;
 rot2val++;
 {
 if(rot2val == 26)
 {
 rot2val = 1;
 rot3val++;
 {
 if(rot3val == 26)
 {
 rot3val = 1;
 }
 }
 }
 }
 }
 }
 outText.textContent = result;
 rotor1.value = rot1val;
 rotor2.value = rot2val;
 rotor3.value = rot3val;
 document.querySelector("#rt1text").textContent = rot1val;

document.querySelector("#rt2text").textContent = rot2val;

document.querySelector("#rt3text").textContent = rot3val;
});


