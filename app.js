function setTime() {
    var time_label = document.getElementById("clock_label");
    time_label.innerHTML = new Date().toLocaleTimeString();
}

setInterval(setTime, 1000);

//thanks for watching!