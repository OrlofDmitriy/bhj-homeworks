const inputText = document.getElementById('editor');

document.addEventListener('keyup', () => {
    localStorage.setItem('text', inputText.value);
})

window.addEventListener('load', () => {
    inputText.value = localStorage.getItem('text');
})