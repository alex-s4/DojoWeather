var navCity = document.querySelectorAll(".city-name");
var cookieDialog = document.getElementById("cookie-dialog");
var cookieAcceptBtn = document.getElementById("confirm-cookie-btn");
var weatherUnitSelector = document.getElementById("weather-unit");
var tempValues = document.querySelectorAll(".temp-val")

// When a user clicks on a city, alert the message "Loading weather report..."
for (var i=0; i<navCity.length; i++){
    navCity[i].onclick = function() {
        alert("Loading weather report...")
    }
}

// When the user accepts the cookie policy, hide the fixed message
cookieAcceptBtn.onclick = function() {
    cookieDialog.style.visibility = "hidden"
}

// When the user changes the <select> convert the temperatures from Celsius to farenheit and vice versa
weatherUnitSelector.oninput = function() {
    for (var j=0; j<tempValues.length; j++){
        if (this.value == "farenheit"){
            var celToFar = (Number(tempValues[j].innerText)* 9/5) + 32
            tempValues[j].innerText = Math.round(celToFar)
        }
        if (this.value == "celsius"){
            var farToCel = (Number(tempValues[j].innerText) - 32) * 5/9
            tempValues[j].innerText = Math.round(farToCel)
        }
    }    
}