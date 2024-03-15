const countElement = document.getElementById("count");

let count = 100;
function updateCountDown() {
    countElement.textContent = count;
    count--;
    if (count < 0) {
        clearInterval(interVaId);
    }
}
updateCountDown();
const interVaId = setInterval(updateCountDown, 1000);
