let plains_available = 0;
let woodlands_available = 0;
let wateringhole_available = 0;
let savanna_available = 0;


function selectButton(POI, availability) {

  let flyButton = document.getElementById('flybtn');
  let noneAvailable = document.getElementById('none-available');
  noneAvailable.style.display = "none";
  let available = document.getElementById('available');
  available.style.display = "none";

  switch (POI) {
    case "Plains":
      plains_available = availability;
      flyButton.innerHTML = "Fly TourDrone at Plains";
      if (plains_available != 0) { flyButton.style.display = "inline"; available.style.display = "block"; } else {
        flyButton.style.display = "none";
        noneAvailable.style.display = "block";
        available.style.display = "none";

      }
      break;
    case "Savanna":
      savanna_available = availability;
      flyButton.innerHTML = "Fly TourDrone at Savanna";
      if (savanna_available != 0) { flyButton.style.display = "inline"; available.style.display = "block"; } else {
        flyButton.style.display = "none";
        noneAvailable.style.display = "block";
        available.style.display = "none";
      }
      break;
    case "Watering Hole":
      wateringhole_available = availability;
      flyButton.innerHTML = "Fly TourDrone ar Watering Hole";
      if (wateringhole_available != 0) { flyButton.style.display = "inline"; available.style.display = "block"; } else {
        flyButton.style.display = "none";
        noneAvailable.style.display = "block";
        available.style.display = "none";
      }
      break;
    case "Woodlands":
      woodlands_available = availability;
      flyButton.innerHTML = "Fly TourDrone at Woodlands";
      if (woodlands_available != 0) { flyButton.style.display = "inline"; available.style.display = "block"; } else {
        flyButton.style.display = "none";
        noneAvailable.style.display = "block";
        available.style.display = "none";
      }
      break;
  }

  const selectElem = document.getElementById('selection-info');
  selectElem.innerText = 'Currently selected: ' + POI + ' - ' + availability + ' available';
}

function flyButtonClicked() {
  window.location.href = "./NewCam/3D Camera.html";
}

function redirectToAdminPage() {
  window.location.href = "../StaffAdmin/StaffAdmin.html";
}

function handleButtonClick() {
  redirectToAdminPage();
}