let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

/*Dark/Light Mode - local storage*/
const body = document.querySelector("body"),
  toggle = document.querySelector(".toggle");
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.add("dark");
  toggle.classList.add("active");
}
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (!body.classList.contains("dark")) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});
toggle.addEventListener("click", () => toggle.classList.toggle("active"));


/*form location*/
document.getElementById('get-location').addEventListener('click', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var locationString = "Latitude: " + latitude + ", Longitude: " + longitude;
      document.getElementById('current-location').textContent = locationString;
    }, function(error) {
      alert('Failed to get current location: ' + error.message);
    });
  } else {
    alert('Geolocation is not supported in this browser.');
  }
});