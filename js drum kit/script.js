//window.addEventListener('keydown'), function(e){
function playDown(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const keyNotes = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) 
		return; 
		audio.currentTime = 0;
		audio.play();
		
		keyNotes.classList.add("playing");
};

function removeTransition(e){
if(e.propertyName !== "transform") return;
e.target.classList.remove("playing");
}
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener('keydown', playDown);

//var keyLay = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const kbd = [...document.querySelectorAll('kbd')];
const note = [...document.querySelectorAll('span')];
const noteList = [...document.querySelectorAll('.key')];

let datakeys=[];
var i= 0, len = 26;
for(i; i < len; i++){
	datakeys.push({
		key: kbd[i].innerHTML,
		name: note[i].innerHTML,
		code: noteList[i].dataset.key
	});
}

console.log(datakeys);

Key = function(){
	var key = this;

	key.element = document.querySelector('.key');
	key.audio = document.querySelector('audio');

	key.play = function(){
		key.element.classList.add('playing');
		key.audio.currentTime = 0;
		key.audio.play();
	}

	key.removeTransition = function(e){
		if('transform' !== e.propertyName){
			return;
		}
		key.target.classList.remove('playing');
	}

	key.element.addEventListener('transitioned', key.removeTransition);
	key.element.addEventListener('touchstart', key.play);
	key.element.addEventListener('click', key.play);

}

datakeys.forEach(key => Key.call( key ));





//var asc;
function keyPlay(e){
	//num = parseInt(num);

	const aud = document.querySelector(`audio[data-key="${datakeys.code}"]`);
	console.log(aud);
	const allkey = document.querySelector(`div[data-key="${datakeys.code}"]`);
	console.log(allkey);
	if(!aud)
		return;
		aud.currentTime = 0;
		aud.play();
		
		allkey.classList.add("playing");
		
}


noteList.forEach(key => key.addEventListener("click", keyPlay));

const test = null;
test.onclick = function(){
	var	 a = document.querySelector("kbd").innerHTML;
	//console.log(a);
	return a;
}


switch(test.onclick()) {
  case "A":
	k1=0;
	//window.addEventListener("click", keyPlay);
	break;
  case "B":
	k2=1;
	//alert("this is B");
	break;
  case "C":
	k3=2;
	//keyplay(k3);
	break;
  default:
    //alert( "I don't know such values" );
}

