var keyCount = document.querySelectorAll(".piano").length;

for(var i = 0; i<keyCount; i++)
{
    document.querySelectorAll(".piano")[i].addEventListener('click', handleClick)
}

function handleClick()
{

    // const key = {
    //     DO                  : 'a',
    //     DO_Octave           : 's',
    //     DO_Streched         : 'd',
    //     DO_Streched_Octave  : 'f',
    //     FA                  : 'g',
    //     FA_Streched         : 'h',
    //     LA                  : 'j',
    //     LA_Streched         : 'k',
    //     MI                  : 'l',
    //     MI_Streched         : 'm',
    //     RE                  : 'n',
    //     RE_Streched         : 'b',
    //     SI                  : 'v',
    //     SI_Streched         : 'c',
    //     SOL                 : 'x',
    //     SOL_Streched        : 'z'
    // }

    var btn = this.textContent;

    // var keypress = key.btn;
    // alert(btn);
    var audio;

    // alert(keypress);

    switch(btn)
    {
        case "DO": audio = new Audio('Sounds/DO.mp3');
            audio.play();
            break;

        case 'DO_Octave': audio = new Audio('Sounds/DO(octave).mp3');
            audio.play();
            break;

        case 'DO_Streched': audio = new Audio('Sounds/DO Streched.mp3');
            audio.play();
            break;

        case 'DO_Streched_Octave': audio = new Audio('Sounds/DO Streched(octave).mp3');
            audio.play();
            break;

        case 'FA': audio = new Audio('Sounds/FA.mp3');
            audio.play();
            break;

        case 'FA_Streched': audio = new Audio('Sounds/FA Streched.mp3');
            audio.play();
            break;

        case 'LA': audio = new Audio('Sounds/LA.mp3');
            audio.play();
            break;

        case 'LA_Streched': audio = new Audio('Sounds/LA Streched.mp3');
            audio.play();
            break;

        case 'MI': audio = new Audio('Sounds/MI.mp3');
            audio.play();
            break;


        case 'MI_Streched': audio = new Audio('Sounds/MI Streched.mp3');
            audio.play();
            break;

        case 'RE': audio = new Audio('Sounds/RE.mp3');
            audio.play();
            break;

        case 'RE_Streched': audio = new Audio('Sounds/RE Streched.mp3');
            audio.play();
            break;

        case 'SI': audio = new Audio('Sounds/SI.mp3');
            audio.play();
            break;

        case 'SI_Streched': audio = new Audio('Sounds/SI Streched.mp3');
            audio.play();
            break;

        case 'SOL': audio = new Audio('Sounds/SOL.mp3');
            audio.play();
            break;

        case 'SOL_Streched': audio = new Audio('Sounds/SOL Streched.mp3');
            audio.play();
            break;
    }

}


document.addEventListener('keypress', function(event){
    handleKeyPress(event.key);
});

function handleKeyPress(event) 
{

    // const key = {
    //     DO: 'a',
    //     DO_Octave: 's',
    //     DO_Streched: 'd',
    //     DO_Streched_Octave: 'f',
    //     FA: 'g',
    //     FA_Streched: 'h',
    //     LA: 'j',
    //     LA_Streched: 'k',
    //     MI: 'l',
    //     MI_Streched: 'm',
    //     RE: 'n',
    //     RE_Streched: 'b',
    //     SI: 'v',
    //     SI_Streched: 'c',
    //     SOL: 'x',
    //     SOL_Streched: 'z'
    // }

    // var btn = this.textContent;

    // var keypress = key.btn;
    // alert(keypress);
    var audio;

    // alert(keypress);

    switch (event) {
        case 'a': audio = new Audio('Sounds/DO.mp3');
            audio.play();
            break;

        case 's': audio = new Audio('Sounds/DO(octave).mp3');
            audio.play();
            break;

        case 'd': audio = new Audio('Sounds/DO Streched.mp3');
            audio.play();
            break;

        case 'f': audio = new Audio('Sounds/DO Streched(octave).mp3');
            audio.play();
            break;

        case 'g': audio = new Audio('Sounds/FA.mp3');
            audio.play();
            break;

        case 'h': audio = new Audio('Sounds/FA Streched.mp3');
            audio.play();
            break;

        case 'j': audio = new Audio('Sounds/LA.mp3');
            audio.play();
            break;

        case 'k': audio = new Audio('Sounds/LA Streched.mp3');
            audio.play();
            break;

        case 'l': audio = new Audio('Sounds/MI.mp3');
            audio.play();
            break;


        case 'm': audio = new Audio('Sounds/MI Streched.mp3');
            audio.play();
            break;

        case 'n': audio = new Audio('Sounds/RE.mp3');
            audio.play();
            break;

        case 'b': audio = new Audio('Sounds/RE Streched.mp3');
            audio.play();
            break;

        case 'v': audio = new Audio('Sounds/SI.mp3');
            audio.play();
            break;

        case 'c': audio = new Audio('Sounds/SI Streched.mp3');
            audio.play();
            break;

        case 'x': audio = new Audio('Sounds/SOL.mp3');
            audio.play();
            break;

        case 'z': audio = new Audio('Sounds/SOL Streched.mp3');
            audio.play();
            break;
    }

}
