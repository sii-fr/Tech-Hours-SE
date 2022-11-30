// Partie qui repère une class précise du CSS afin de la modifier

const first_btn = document.querySelector(".first_button");
const first_popup = document.querySelector(".first_popup");
const second_btn = document.querySelector(".second_button");
const second_popup = document.querySelector(".second_popup");
const third_btn = document.querySelector(".third_button");
const third_popup = document.querySelector(".third_popup");
const background = document.querySelector(".wrappert");
const exit_planning = document.querySelector(".exit-planning");
const open_horaire = document.querySelector(".open_horaire");
const planning_button = document.getElementById("planning_button");
const planning = document.getElementById("pl");

var open = 0;

const shortcut_1 = document.querySelector(".shortcut_1");
const shortcut_2 = document.querySelector(".shortcut_2");
const shortcut_3 = document.querySelector(".shortcut_3");
const shortcut_4 = document.querySelector(".shortcut_4");
const shortcut_5 = document.querySelector(".shortcut_5");
const shortcut_6 = document.querySelector(".shortcut_6");
const shortcut_7 = document.querySelector(".shortcut_7");
const shortcut_8 = document.querySelector(".shortcut_8");
const shortcut_9 = document.querySelector(".shortcut_9");
const first_mini_popup = document.querySelector(".first_mini_popup");
const second_mini_popup = document.querySelector(".second_mini_popup");
const third_mini_popup = document.querySelector(".third_mini_popup");
const fourth_mini_popup = document.querySelector(".fourth_mini_popup");

const actual_hour = document.querySelector(".hour_actual");

let isVisible1 = false;
let clicked1 = false;
let block1 = false;
let isVisible2 = false;
let clicked2 = false;
let block2 = false;
let isVisible3 = false;
let clicked3 = false;
let block3 = false;


// Permet d'avoir l'heure en tant réel
var now = new Date();

// fonction qui s'active lorsque l'action "clique" est effectué sur la class "background"
// Cette fonction à pour but de retirer le paramètre "opacity" au css des popup et donc de les faire disparaitres.
background.addEventListener("click", () => {
  if (!clicked1 && block1 == false) {
    first_popup.classList.remove("transition_opacity");
    isVisible1 = false;
  }
  if (!clicked2 && block2 == false) {
    second_popup.classList.remove("transition_opacity");
    isVisible2 = false;
  }
  if (!clicked3 && block3 == false) {
    third_popup.classList.remove("transition_opacity");
    isVisible3 = false;
  }

  clicked1 = false;
  block1 = false;
  clicked2 = false;
  block2 = false;
  clicked3 = false;
  block3 = false;
});

// permet d'ajouter le paramètre "opacity" au css de la première popup et donc de la faire apparaitre.
// Ou bien de le retirer si cette popup était déjà présente.
first_btn.addEventListener("click", () => {
  clicked1 = true;
  isVisible1 = !isVisible1;
  isVisible1
    ? first_popup.classList.add("transition_opacity")
    : first_popup.classList.remove("transition_opacity");
});

second_btn.addEventListener("click", () => {
  clicked2 = true;
  isVisible2 = !isVisible2;
  isVisible2
    ? second_popup.classList.add("transition_opacity")
    : second_popup.classList.remove("transition_opacity");
});

third_btn.addEventListener("click", () => {
  clicked3 = true;
  isVisible3 = !isVisible3;
  isVisible3
    ? third_popup.classList.add("transition_opacity")
    : third_popup.classList.remove("transition_opacity");
});


// Pour afficher/masque le planning avec le bouton en bas à droite.
planning_button.addEventListener("click", () => {
  if(getComputedStyle(pl).visibility != "hidden"){
    pl.style.visibility = "hidden";
  } else {
    pl.style.visibility = "visible";
  }
});

// lorsque une popup est présente et que l'on clique dessus, cela va aussi activer la fonction "background.addEventListener"
// ce qui fera disparaitre la popup.
// Pour remedier à ça on rajoute la variable block qui si = true n'activera la la disparition de popup.
first_popup.addEventListener("click", () => {
  block1 = true;
});

second_popup.addEventListener("click", () => {
  block2 = true;
});

third_popup.addEventListener("click", () => {
  block3 = true;
});

// permet de faire apparaitre les popups lorsque l'événement "mouseenter" est activé dans la bande de gauche.
// au contraire permet de la faire disparaitre lorsque l'événement "mouseout" est activé.
shortcut_1.addEventListener("mouseenter", () => {
  first_mini_popup.classList.add("transition_opacity");
});
shortcut_1.addEventListener("mouseout", () => {
  first_mini_popup.classList.remove("transition_opacity");
});

shortcut_2.addEventListener("mouseenter", () => {
  first_mini_popup.classList.add("transition_opacity");
});
shortcut_2.addEventListener("mouseout", () => {
  first_mini_popup.classList.remove("transition_opacity");
});

shortcut_3.addEventListener("mouseenter", () => {
  first_mini_popup.classList.add("transition_opacity");
});
shortcut_3.addEventListener("mouseout", () => {
  first_mini_popup.classList.remove("transition_opacity");
});

shortcut_4.addEventListener("mouseenter", () => {
  second_mini_popup.classList.add("transition_opacity");
});
shortcut_4.addEventListener("mouseout", () => {
  second_mini_popup.classList.remove("transition_opacity");
});

shortcut_5.addEventListener("mouseenter", () => {
  second_mini_popup.classList.add("transition_opacity");
});
shortcut_5.addEventListener("mouseout", () => {
  second_mini_popup.classList.remove("transition_opacity");
});

shortcut_6.addEventListener("mouseenter", () => {
  second_mini_popup.classList.add("transition_opacity");
});
shortcut_6.addEventListener("mouseout", () => {
  second_mini_popup.classList.remove("transition_opacity");
});

shortcut_7.addEventListener("mouseenter", () => {
  third_mini_popup.classList.add("transition_opacity");
});
shortcut_7.addEventListener("mouseout", () => {
  third_mini_popup.classList.remove("transition_opacity");
});

shortcut_8.addEventListener("mouseenter", () => {
  third_mini_popup.classList.add("transition_opacity");
});
shortcut_8.addEventListener("mouseout", () => {
  third_mini_popup.classList.remove("transition_opacity");
});

shortcut_9.addEventListener("mouseenter", () => {
  fourth_mini_popup.classList.add("transition_opacity");
});
shortcut_9.addEventListener("mouseout", () => {
  fourth_mini_popup.classList.remove("transition_opacity");
});

function add_display_none(myNodeList) {
  for (var i = 0; i < myNodeList.length; ++i) {
    var item = myNodeList[i]; // L'appel de myNodeList.item(i) n'est pas nécessaire en JavaScript
    item.style.display = "none";
  }
}

function add_display_inline(myNodeList) {
  for (var i = 0; i < myNodeList.length; ++i) {
    var item = myNodeList[i]; // L'appel de myNodeList.item(i) n'est pas nécessaire en JavaScript
    item.style.display = "inline";
  }
}

function ch_zoom() {
  document.body.style.zoom = "100%";
  setTimeout(ch_zoom, 100);
}