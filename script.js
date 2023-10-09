let selections = {
  companions: "",
  place: "",
  item: "",
  action: "",
  food: "",
};

function selectChoice(field, value) {
  selections[field] = value;

  if (field === "item") {
    if (value === "book") {
      selections["action"] = "read";
    } else if (value === "ball") {
      selections["action"] = "play";
    } else if (value === "board games") {
      selections["action"] = "play board games";
    }

    document.getElementById("action").innerText = selections["action"];
  }

  document.getElementById(field).innerText = value;
}

function goToScreen(screenNumber) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  document.getElementById(`screen${screenNumber}`).style.display = "block";

  if (screenNumber === 7) {
    document.getElementById("final-companions").innerText =
      selections["companions"];
    document.getElementById("final-place").innerText = selections["place"];
    document.getElementById("final-item").innerText = selections["item"];
    document.getElementById("final-action").innerText = selections["action"];
    document.getElementById("final-food").innerText = selections["food"];
  }
}

function navigateToPeopleAroundMe() {
  window.location.href = "peopleAroundMe.html"; // Isso redirecionará o usuário para a página "peopleAroundMe.html".
}
function navigateToOrganization() {
  window.location.href = "Organization.html";
}
document.addEventListener("DOMContentLoaded", function () {
  goToScreen(1);
});
