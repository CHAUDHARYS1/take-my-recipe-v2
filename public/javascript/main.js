// main.js

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('loggedOut')) {
        alert('You have been logged out due to inactivity.');
    }
}