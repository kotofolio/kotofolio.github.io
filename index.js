const buttons = document.querySelectorAll('.button');
const result = document.querySelector('.display');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const val = button.value;
        if(val === 'del') {
            result.value = result.value.slice(0, -1);
        } else {
            result.value += val;
        };
    })
});

const clear = document.querySelector('.buttonreset');

clear.addEventListener('click', function() {
    result.value = '';
});

const equal = document.querySelector('.buttonresult');

equal.addEventListener('click', calculate);

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
};

const body = document.querySelector('.body')
const boxone = document.getElementById('boxone');
const boxtwo = document.getElementById('boxtwo');
const boxthree = document.getElementById('boxthree');
const themes = document.querySelectorAll('.number');

themes.forEach(function(theme) {
    theme.addEventListener('click', function() {
        
        themes.forEach(function(el) {
            el.classList.remove('removeclick');
        })  

        theme.classList.add('removeclick');

        if(theme === boxone) {
            body.classList.toggle('dark');
            body.classList.remove('light');
            body.classList.remove('neon');
        } else if(theme === boxtwo) {
            body.classList.toggle('light');
            body.classList.remove('dark');
            body.classList.remove('neon');
        } else {
            body.classList.toggle('neon');
            body.classList.remove('dark');
            body.classList.remove('light');
        }


    });
});





