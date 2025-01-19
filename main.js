const inputDate = document.getElementById('userdate');
const resultLine = document.querySelector(".resultLine");

function calculateDaysUntil() {
    const dateEntered = inputDate.value;

    if (!dateEntered) {
        resultLine.textContent = 'Пожалуйста, введите дату';
        resultLine.classList.add("error");
        return;
    }

    const dateEnteredTs = Date.parse(dateEntered);
    const currentTs = Date.now();
    const dateDifference = dateEnteredTs - currentTs;
    const daysUntil = Math.ceil(dateDifference / (1000 * 60 * 60 * 24));

    let daysForm = 'дней';
    let verbForm = 'осталось';

    if (daysUntil === 1) {
        verbForm = 'осталcя всего';
        daysForm = 'день';
    } else if (daysUntil % 100 >= 11 && daysUntil % 100 <= 14) {
        daysForm = 'дней';
    } else if (daysUntil % 10 === 1) {
        verbForm = 'осталcя';
        daysForm = 'день';
    } else if (daysUntil % 10 >= 2 && daysUntil % 10 <= 4) {
        verbForm = 'осталось всего';
        daysForm = 'дня';
    }

    resultLine.textContent = `До вашего дня рождения ${verbForm} ${daysUntil} ${daysForm}!`;
    resultLine.classList.remove("error");
}
