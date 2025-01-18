const inputDate = document.getElementById('userdate');
const result = document.getElementById('result');
const resultLine = document.querySelector(".resultLine");

function calculateDaysUntil() {
    const dateEntered = inputDate.value;
    const dateEnteredTs = Date.parse(dateEntered);
    const currentTs = Date.now();
    const dateDifference = dateEnteredTs - currentTs;
    const daysUntil = Math.ceil(dateDifference / (1000 * 60 * 60 * 24));

    if (daysUntil === 1) {
        result.textContent = `остался всего ${daysUntil} день!`
    }
    else if (daysUntil === 2 || daysUntil === 3 || daysUntil === 4){
        result.textContent = `осталось всего ${daysUntil} дня!`
    } 

    //чтобы не возникало иллюзий, что я такая умная, full disclosure: два else-if блока ниже сделаны по нагугленному образцу
    else if (daysUntil % 10 === 1) {
        result.textContent = `остался ${daysUntil} день!`
        }

    else if (daysUntil % 10 === 2 || daysUntil % 10 === 3 || daysUntil % 10 === 4) {
        if (!(daysUntil >= 11 && daysUntil <= 14)) {
            result.textContent = `осталось ${daysUntil} дня!`;
            return;
        }
    } 

    else {
        result.textContent = `осталось ${daysUntil} дней!`
    }
}
