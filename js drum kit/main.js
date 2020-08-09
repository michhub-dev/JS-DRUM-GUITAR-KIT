//window.addEventListener('keydown'), function(e){
	
	function playDown(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const keyNotes = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) 
		return; 
		audio.currentTime = 0;
		audio.play();
		
		keyNotes.classList.add("playing");

	
}; key.play = function() {

    key.element.classList.add('playing');
    key.audio.currentTime = 0;
    key.audio.play();
  }

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
    }*/

function removeTransition(e){
if(e.propertyName !== "transform") return;
 
e.target.classList.remove("playing");
}
const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

  	// key.looper.addEventListener( 'touchdown', key.loop );
  //key.looper.addEventListener( 'click', key.loop ); 

window.addEventListener('keydown', playDown);

function test(){
  window.addEventListener('keydown', playDown);
}
