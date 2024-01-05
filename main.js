let voice=()=>{
	let a=document.getElementById("input").value
// let btn=document.getElementById("btn")
let speech=new SpeechSynthesisUtterance(a)
window.speechSynthesis.speak(speech)
}