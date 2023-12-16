const localStorageBtn = document.querySelector('#localStorageBtn');
const sessionStorageBtn = document.querySelector('#sessionStorageBtn');
const clearBtn = document.querySelector('#clearBtn');
const clearBtnPrompt = document.querySelector('.clear-btn__caption');

// set to the local storage
let localClicks = 0;

function setLocalClicks (){
    localStorage.setItem("clicks", ++localClicks);
}

localStorageBtn.addEventListener('click', () => {
    setLocalClicks()
    localStorageBtn.textContent = `pressed ${localClicks} times `
});

// set to the session storage
let sessionClicks = 0;

function setSessionClicks (){
    sessionStorage.setItem("clicks", ++sessionClicks);
}

sessionStorageBtn.addEventListener('click', () => {
    setSessionClicks()
    sessionStorageBtn.textContent = `pressed ${sessionClicks} times `
});


// clearing storages
function clearStorages(){
    localStorage.clear();
    sessionStorage.clear();
    localClicks = 0;
    sessionClicks = 0;
    localStorageBtn.textContent = `pressed ${localClicks} times `;
    sessionStorageBtn.textContent = `pressed ${sessionClicks} times `;

    setPromptVisibility()
}

function setPromptVisibility(){
    clearBtnPrompt.style.visibility = 'visible';
    
    setTimeout(() => {
        clearBtnPrompt.style.visibility = 'hidden';
    }, 1500)
}

clearBtn.addEventListener('click', clearStorages)


