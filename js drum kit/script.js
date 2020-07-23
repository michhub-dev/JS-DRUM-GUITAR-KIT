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

  //key.loop = function() {

  /*  if( ! key.isLooping ) {
      key.looper.classList.add('active');
      key.audio.setAttribute('loop', 'loop');
      key.isLooping = true;
    }
    else {
      key.looper.classList.remove('active');
      key.audio.removeAttribute('loop');
      key.isLooping = false;
    }
    window.addEventListener('click', function(e)){
    	const keplay = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    	if (!keplay) return;
    	keplay.currentTime= 0;

    	keplay.play();
		
		keplay.classList.add("playing");

    }*/
//var gz = {};

//const gz = Array.from(document.querySelectorAll(".key"));
// The container div for the keys
//gz.keysContainer = document.querySelector('#keyset');
const divsContents = [...document.querySelectorAll("div")].map(e=>e.innerHTML);
console.log(divsContents);
key.element = document.querySelector('.key');

divsContents.Key = function(){
	
	var key = this;
	//key.container = document.getElementsById("keyset");
	//key.container.classList.add('key-container');


	
	//gz.keysContainer.childNodes( key.container );


	  // the audio element for this key
	key.audio = document.querySelector('audio');

  	// the loop button for this key
	key.looper = document.querySelector('button.looper');

	key.play = function(){

		//const audio = document.querySelector('audio');
		//const keyNotes = document.querySelector('.key');

	   key.element.classList.add('playing');
	   key.audio.currentTime = 0;
	   key.audio.play();
	}

   	key.loop = function() {

	    if( ! key.isLooping ) {
	      key.looper.classList.add('active');
	      key.audio.setAttribute('loop', 'loop');
	      key.isLooping = true;
	    }
	    else {
	      key.looper.classList.remove('active');
	      key.audio.removeAttribute('loop');
	      key.isLooping = false;
	    }
  	}

  //key.element.addEventListener( 'touchstart', key.play );
  key.element.addEventListener( 'click', key.play );

  key.looper.addEventListener( 'touchdown', key.loop );
  key.looper.addEventListener( 'click', key.loop );  
}

// call the binding method on all keys
//gz.keyz = Array.from(document.querySelectorAll('.key'));
//gz.keyz.forEach( key => gz.Key.call( key ) );

divsContents.forEach(key => divsContents.Key.call(key));