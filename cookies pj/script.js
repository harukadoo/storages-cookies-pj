const dateInput = document.getElementById('date-input');

function addToCookies() {
    const dateInputValue = dateInput.value;

    if (dateInputValue !== '') {
        document.cookie = `birthday=${dateInputValue}`;

        birthdayForm.style.display = 'none';
        birthdayOutput.style.display = 'block';

        getAge(new Date(dateInputValue));
    } else {
        alert('enter you date of birth!')
    }
}

function getCookie(name) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }

    return null;
}

const birthdayForm = document.querySelector('.birthday-form');
const birthdayOutput = document.querySelector('.birth-date__output');

function setBirthdayFormVisibility() {
    const birthdayCookie = getCookie('birthday');

    if (birthdayCookie !== null) {
        birthdayForm.style.display = 'none';
        birthdayOutput.style.display = 'block';

    } else {
        birthdayForm.style.display = 'block';
        birthdayOutput.style.display = 'none';
    }
}

setBirthdayFormVisibility()

function getAge(birthDate){
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    
    birthdayOutput.textContent = `Your age is ${age} years old.`;
}


const confirmBtn = document.getElementById('confirm-btn');
confirmBtn.addEventListener('click', addToCookies);

