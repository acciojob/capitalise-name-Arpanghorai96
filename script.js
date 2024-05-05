//your JS code here. If required.
const fname=document.querySelector("#fname");
fname.addEventListener("blur",()=>{
	fname.innerText.toUpperCase();
})