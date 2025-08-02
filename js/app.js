const title = document.querySelector('.hello button');

function handleTitleClick() {
    if (title.style.backgroundColor == 'blue') {
        title.style.backgroundColor = 'white';
    } else {
        title.style.backgroundColor = 'blue';
    }
}

function handleWindowResize() {
    document.body.style.backgroundColor = "lightblue";
}

function handleWindowCopy(){
    alert('Copied!');
}

title.addEventListener('click', handleTitleClick);

window.addEventListener('resize', handleWindowResize);

window.addEventListener('copy', handleWindowCopy);