let idleTime = 0;
const idleInterval = setInterval(timerIncrement, 1000); // 1 second

window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 10) { // 10 seconds
        fetch('/api/users/logout', { method: 'POST' }) // replace '/api/users' with your actual prefix
            .then(() => window.location.href = '/?loggedOut=true')
            .catch(console.error);
        clearInterval(idleInterval); // stop the interval
    }
}

function resetTimer() {
    idleTime = 0;
}