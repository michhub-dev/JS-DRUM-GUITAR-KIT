'use strict';
(function(){
    var gz = {};

    gz.keysContainer = document.querySelector('#keyset');

    gz.keyTemplate = document.querySelector('#keytemplate');

    gz.keys = [
        {
            key: 'A',
            name: 'clap',
            code: 65,
        },
        {
            key: 'B',
            name: 'Blurp',
            code: 66,
        },
        {
            key: 'C',
            name: 'Reow',
            code: 67,
        },
        {
            key: 'D',
            name: 'kick',
            code: 68,
        },
        {
            key: 'E',
            name: 'pluck',
            code: 69,
        },
        {
            key: 'F',
            name: 'openHat',
            code: 70,
        },
        {
            key: 'G',
            name: 'boom',
            code: 71,
        },
        {
            key: 'H',
            name: 'ride',
            code: 72,
        },
        {
            key: 'I',
            name: 'klonk',
            code: 73,
        },
        {
            key: 'J',
            name: 'snare',
            code: 74,
        }
    ]


    gz.Key = function(){
        var key = this;

        key.container = document.createElement('div');
        key.container.classList.add('key-container');

        key.container.innerHTML = gz.keyTemplate.innerHTML.replace(/{{ key\.(key|name|code) }}/g,(fullMatch, match) => this[match]);

        key.element = key.container.querySelector('.key');

        gz.keysContainer.appendChild(key.container);

        key.audio = key.element.querySelector('audio');

        key.looper = key.container.querySelector('button.looper');

        key.play = function(){
            key.element.classList.add('playing');
            key.audio.currentTime = 0;
            key.audio.play();
        }

       // key.loop = function(){

        //}

        key.removeTransition = function(e){
            if( 'transform' !== e.propertyName ){
                return;
            }
            key.element.classList.remove('playing');
        }

        key.element.addEventListener('transitioned', key.removeTransition);
        key.element.addEventListener('touchstart', key.play);
        key.element.addEventListener('click', key.play);
    }

    gz.keys.forEach( key => gz.Key.call( key ) );

    gz.getKey = function(code){
        code = parseInt(code);
        var returnKey = null;

        this.keys.forEach(key => {
            if (key.code === code){
                returnKey = key;
            }
        });

        return returnKey;
    }

    gz.keyDown = e => {
        const key = gz.getKey(parseInt(e.keyCode));
        if(!key){
            return;
        }
        key.play();
    }
    window.addEventListener('keydown', gz.keyDown);

})();