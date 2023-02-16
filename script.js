var navCity = document.querySelectorAll(".city-name")

for (var i=0; i<navCity.length; i++){
    navCity[i].onclick = function() {
        alert("Loading weather report...")
    }
}