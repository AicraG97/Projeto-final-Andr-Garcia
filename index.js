const buttonSounds = {
    'a': new Audio('../assets/sounds/leftCrash.mp3'),
    's': new Audio('../assets/sounds/snare.mp3'),
    'd': new Audio('../assets/sounds/tom1.mp3'),
    'j': new Audio('../assets/sounds/kickbass.mp3'),
    'k': new Audio('../assets/sounds/tom2.mp3'),
    'l': new Audio('../assets/sounds/tom3.mp3')
};

function playSound(event) {
    let buttonKey;
    if (event.type === 'keydown') {
        buttonKey = event.key.toLowerCase();
    } else if (event.type === 'click') {
        buttonKey = event.target.innerText.toLowerCase();
    }
    const sound = buttonSounds[buttonKey];
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
}

function botaoAnimação(event) {
    let button;
    if (event.type === 'click') {
        button = event.target;
    } else if (event.type === 'keydown') {
        const buttonKey = event.key.toLowerCase();
        button = document.querySelector(`.drum[data-key="${buttonKey}"]`);
    }

    if (button) {
        button.classList.add('pressed');
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100);
    }
}

function fazerSom(event) {
    botaoAnimação(event);
    let key;
    if (event.type === 'keydown') {
        key = event.key;
    } else if (event.type === 'click') {
        key = event.target.innerText;
    }

    if (key === key.toLowerCase()) {
        playSound(event);
    } else {
        const lowerCaseKey = key.toLowerCase();
        const sound = buttonSounds[lowerCaseKey];
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }
    }
}

const buttons = document.querySelectorAll('.drum');
buttons.forEach(button => {
    button.addEventListener('click', fazerSom);
});

document.addEventListener('keydown', fazerSom);
