const popups = document.querySelectorAll('.modal');
const buttonSuccess = document.querySelector('.show-success');
const popupSuccess = document.querySelector('.btn_success');

(function() {
    popups.forEach(popup => {
        if (!popup.querySelector('.btn_success')) {
            popup.className = 'modal modal_active';
        }
        popup.querySelector('.modal__close').onclick = closePopup;
        popup.querySelector('.show-success').onclick = showSuccess;
    })
}());

function closePopup() {
    this.closest('.modal').className = 'modal';
}

function showSuccess() {
    buttonSuccess.closest('.modal').className = 'modal';
    popupSuccess.closest('.modal').className = 'modal modal_active';
}