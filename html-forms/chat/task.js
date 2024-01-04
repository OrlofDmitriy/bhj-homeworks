const chatWidget = document.querySelector('.chat-widget');
const botAnswers = [
    'Добрый день! До свидания!',
    'Где ваша совесть?',
    'К сожалению все операторы сейчас заняты. Не пишите нам больше.',
    'Кто тут?',
    'Мы ничего не будем вам продавать.',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
]

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    inputMessage();
});

function inputMessage() {
    let messages = document.querySelector( '.chat-widget__messages' );
    document.addEventListener('keydown', button => {
        const inputMessage = document.querySelector('.chat-widget__input');
        inputMessage.value = inputMessage.value.trim();
        if (button.key.charCodeAt() === 69 && inputMessage.value) {
            messages.innerHTML += `<div class="message message_client">
                <div class = "message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
                <div class="message__text">${inputMessage.value}</div>
            </div>
            <div class="message">
                <div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
                <div class="message__text">${botAnswers[Math.floor(Math.random() * botAnswers.length)]}</div>
            </div>`;
            inputMessage.value = '';
        }
    })
}