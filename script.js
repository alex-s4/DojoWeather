var navCity = document.querySelectorAll(".city-name")
var cookieDialog = document.getElementById("cookie-dialog")
var cookieAcceptBtn = document.getElementById("confirm-cookie-btn")

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
