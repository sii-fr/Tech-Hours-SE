// Partie qui repère une class précise du CSS afin de la modifier

const first_btn = document.querySelector('.first_button');
const first_popup = document.querySelector('.first_popup');
const second_btn = document.querySelector('.second_button');
const second_popup = document.querySelector('.second_popup');
const third_btn = document.querySelector('.third_button');
const third_popup = document.querySelector('.third_popup');
const fourth_btn = document.querySelector('.fourth_button');
const fourth_popup = document.querySelector('.fourth_popup');
const fifth_btn = document.querySelector('.fifth_button');
const fifth_popup = document.querySelector('.fifth_popup');
const sixth_btn = document.querySelector('.sixth_button');
const sixth_popup = document.querySelector('.sixth_popup');
const seventh_btn = document.querySelector('.seventh_button');
const seventh_popup = document.querySelector('.seventh_popup');
const eighth_btn = document.querySelector('.eighth_button');
const eighth_popup = document.querySelector('.eighth_popup');
const ninth_btn = document.querySelector('.ninth_button');
const ninth_popup = document.querySelector('.ninth_popup');
const tenth_btn = document.querySelector('.tenth_button');
const tenth_popup = document.querySelector('.tenth_popup');
const background = document.querySelector('.wrappert');
const planning = document.querySelector('.image_horaires');
const exit_planning = document.querySelector('.exit-planning')
const open_horaire = document.querySelector('.open_horaire')

var open = 0

const shortcut_1 = document.querySelector('.shortcut_1')
const shortcut_2 = document.querySelector('.shortcut_2')
const shortcut_3 = document.querySelector('.shortcut_3')
const shortcut_4 = document.querySelector('.shortcut_4')
const shortcut_5 = document.querySelector('.shortcut_5')
const shortcut_6 = document.querySelector('.shortcut_6')
const shortcut_8 = document.querySelector('.shortcut_8')
const shortcut_9 = document.querySelector('.shortcut_9')
const shortcut_10 = document.querySelector('.shortcut_10')
const shortcut_11 = document.querySelector('.shortcut_11')
const shortcut_12 = document.querySelector('.shortcut_12')
const shortcut_13 = document.querySelector('.shortcut_13')
const shortcut_14 = document.querySelector('.shortcut_14')
const shortcut_15 = document.querySelector('.shortcut_15')
const shortcut_16 = document.querySelector('.shortcut_16')
const shortcut_18 = document.querySelector('.shortcut_18')
const shortcut_19 = document.querySelector('.shortcut_19')
const shortcut_20 = document.querySelector('.shortcut_20')
const shortcut_21 = document.querySelector('.shortcut_21')
const shortcut_22 = document.querySelector('.shortcut_22')
const shortcut_23 = document.querySelector('.shortcut_23')
const shortcut_24 = document.querySelector('.shortcut_24')
const shortcut_26 = document.querySelector('.shortcut_26')
const shortcut_27 = document.querySelector('.shortcut_27')
const shortcut_28 = document.querySelector('.shortcut_28')
const shortcut_29 = document.querySelector('.shortcut_29')
const first_mini_popup = document.querySelector('.first_mini_popup')
const second_mini_popup = document.querySelector('.second_mini_popup')
const third_mini_popup = document.querySelector('.third_mini_popup')
const fourth_mini_popup = document.querySelector('.fourth_mini_popup')
const fifth_mini_popup = document.querySelector('.fifth_mini_popup')
const sixth_mini_popup = document.querySelector('.sixth_mini_popup')
const seventh_mini_popup = document.querySelector('.seventh_mini_popup')
const eighth_mini_popup = document.querySelector('.eighth_mini_popup')
const ninth_mini_popup = document.querySelector('.ninth_mini_popup')
const tenth_mini_popup = document.querySelector('.tenth_mini_popup')

const actual_hour = document.querySelector('.hour_actual')

let isVisible1 = false; let clicked1 = false; let block1 = false;
let isVisible2 = false; let clicked2 = false; let block2 = false;
let isVisible3 = false; let clicked3 = false; let block3 = false;
let isVisible4 = false; let clicked4 = false; let block4 = false;
let isVisible5 = false; let clicked5 = false; let block5 = false;
let isVisible6 = false; let clicked6 = false; let block6 = false;
let isVisible7 = false; let clicked7 = false; let block7 = false;
let isVisible8 = false; let clicked8 = false; let block8 = false;
let isVisible9 = false; let clicked9 = false; let block9 = false;
let isVisible10 = false; let clicked10 = false; let block10 = false;

// Permet d'avoir l'heure en tant réel
var now = new Date();

const first_column = document.querySelectorAll('.first_column')
const second_column = document.querySelectorAll('.second_column')
const third_column = document.querySelectorAll('.third_column')
const fourth_column = document.querySelectorAll('.fourth_column')
const fifth_column = document.querySelectorAll('.fifth_column')
const sixth_column = document.querySelectorAll('.sixth_column')


// fonction qui s'active lorsque l'action "clique" est effectué sur la class "background"
// Cette fonction à pour but de retirer le paramètre "opacity" au css des popup et donc de les faire disparaitres.
background.addEventListener('click',  () => {
    if (!clicked1 && block1 == false) { first_popup.classList.remove('transition_opacity'); isVisible1 = false; }
    if (!clicked2 && block2 == false) { second_popup.classList.remove('transition_opacity'); isVisible2 = false; }
    if (!clicked3 && block3 == false) { third_popup.classList.remove('transition_opacity'); isVisible3 = false; }
    if (!clicked4 && block4 == false) { fourth_popup.classList.remove('transition_opacity'); isVisible4 = false; }
    if (!clicked5 && block5 == false) { fifth_popup.classList.remove('transition_opacity'); isVisible5 = false; }
    if (!clicked6 && block6 == false) { sixth_popup.classList.remove('transition_opacity'); isVisible6 = false; }
    if (!clicked7 && block7 == false) { seventh_popup.classList.remove('transition_opacity'); isVisible7 = false; }
    if (!clicked8 && block8 == false) { eighth_popup.classList.remove('transition_opacity'); isVisible8 = false; }
    if (!clicked9 && block9 == false) { ninth_popup.classList.remove('transition_opacity'); isVisible9 = false; }
    if (!clicked10 && block10 == false) { tenth_popup.classList.remove('transition_opacity'); isVisible10 = false; }

    clicked1 = false; block1 = false;
    clicked2 = false; block2 = false;
    clicked3 = false; block3 = false;
    clicked4 = false; block4 = false;
    clicked5 = false; block5 = false;
    clicked6 = false; block6 = false;
    clicked7 = false; block7 = false;
    clicked8 = false; block8 = false;
    clicked9 = false; block9 = false;
    clicked10 = false; block10 = false;
    
});

// permet d'ajouter le paramètre "opacity" au css de la première popup et donc de la faire apparaitre. 
// Ou bien de le retirer si cette popup était déjà présente.
first_btn.addEventListener('click', () => {
    clicked1 = true;
    isVisible1 = !isVisible1;
    isVisible1 ? first_popup.classList.add('transition_opacity') : first_popup.classList.remove('transition_opacity');
});

second_btn.addEventListener('click', () => {
    clicked2 = true;
    isVisible2 = !isVisible2;
    isVisible2 ? second_popup.classList.add('transition_opacity') : second_popup.classList.remove('transition_opacity');
});

third_btn.addEventListener('click', () => {
    clicked3 = true;
    isVisible3 = !isVisible3;
    isVisible3 ? third_popup.classList.add('transition_opacity') : third_popup.classList.remove('transition_opacity');
});

fourth_btn.addEventListener('click', () => {
    clicked4 = true;
    isVisible4 = !isVisible4;
    isVisible4 ? fourth_popup.classList.add('transition_opacity') : fourth_popup.classList.remove('transition_opacity');
});

fifth_btn.addEventListener('click', () => {
    clicked5 = true;
    isVisible5 = !isVisible5;
    isVisible5 ? fifth_popup.classList.add('transition_opacity') : fifth_popup.classList.remove('transition_opacity');
});

sixth_btn.addEventListener('click', () => {
    clicked6 = true;
    isVisible6 = !isVisible6;
    isVisible6 ? sixth_popup.classList.add('transition_opacity') : sixth_popup.classList.remove('transition_opacity');
});

seventh_btn.addEventListener('click', () => {
    clicked7 = true;
    isVisible7 = !isVisible7;
    isVisible7 ? seventh_popup.classList.add('transition_opacity') : seventh_popup.classList.remove('transition_opacity');
});

eighth_btn.addEventListener('click', () => {
    clicked8 = true;
    isVisible8 = !isVisible8;
    isVisible8 ? eighth_popup.classList.add('transition_opacity') : eighth_popup.classList.remove('transition_opacity');
});

ninth_btn.addEventListener('click', () => {
    clicked9 = true;
    isVisible9 = !isVisible9;
    isVisible9 ? ninth_popup.classList.add('transition_opacity') : ninth_popup.classList.remove('transition_opacity');
});

tenth_btn.addEventListener('click', () => {
    clicked10 = true;
    isVisible10 = !isVisible10;
    isVisible10 ? tenth_popup.classList.add('transition_opacity') : tenth_popup.classList.remove('transition_opacity');
});


// lorsque une popup est présente et que l'on clique dessus, cela va aussi activer la fonction "background.addEventListener"
// ce qui fera disparaitre la popup.
// Pour remedier à ça on rajoute la variable block qui si = true n'activera la la disparition de popup.
first_popup.addEventListener('click', () => {
    block1 = true;
});

second_popup.addEventListener('click', () => {
    block2 = true;
});

third_popup.addEventListener('click', () => {
    block3 = true;
});

fourth_popup.addEventListener('click', () => {
    block4 = true;
});

fifth_popup.addEventListener('click', () => {
    block5 = true;
});

sixth_popup.addEventListener('click', () => {
    block6 = true;
});

seventh_popup.addEventListener('click', () => {
    block7 = true;
});

eighth_popup.addEventListener('click', () => {
    block8 = true;
});

ninth_popup.addEventListener('click', () => {
    block9 = true;
});

tenth_popup.addEventListener('click', () => {
    block10 = true;
});


// permet de faire apparaitre les popups lorsque l'événement "mouseenter" est activé dans la bande de gauche.
// au contraire permet de la faire disparaitre lorsque l'événement "mouseout" est activé.
shortcut_1.addEventListener("mouseenter", () => {
    first_mini_popup.classList.add('transition_opacity')
});
shortcut_1.addEventListener("mouseout", () => {
    first_mini_popup.classList.remove('transition_opacity')
});

shortcut_2.addEventListener("mouseenter", () => {
    first_mini_popup.classList.add('transition_opacity')
});
shortcut_2.addEventListener("mouseout", () => {
    first_mini_popup.classList.remove('transition_opacity')
});

shortcut_3.addEventListener("mouseenter", () => {
    first_mini_popup.classList.add('transition_opacity')
});
shortcut_3.addEventListener("mouseout", () => {
    first_mini_popup.classList.remove('transition_opacity')
});

shortcut_4.addEventListener("mouseenter", () => {
    second_mini_popup.classList.add('transition_opacity')
});
shortcut_4.addEventListener("mouseout", () => {
    second_mini_popup.classList.remove('transition_opacity')
});

shortcut_5.addEventListener("mouseenter", () => {
    second_mini_popup.classList.add('transition_opacity')
});
shortcut_5.addEventListener("mouseout", () => {
    second_mini_popup.classList.remove('transition_opacity')
});

shortcut_6.addEventListener("mouseenter", () => {
    second_mini_popup.classList.add('transition_opacity')
});
shortcut_6.addEventListener("mouseout", () => {
    second_mini_popup.classList.remove('transition_opacity')
});

shortcut_8.addEventListener("mouseenter", () => {
    third_mini_popup.classList.add('transition_opacity')
});
shortcut_8.addEventListener("mouseout", () => {
    third_mini_popup.classList.remove('transition_opacity')
});

shortcut_9.addEventListener("mouseenter", () => {
    third_mini_popup.classList.add('transition_opacity')
});
shortcut_9.addEventListener("mouseout", () => {
    third_mini_popup.classList.remove('transition_opacity')
});

shortcut_10.addEventListener("mouseenter", () => {
    fourth_mini_popup.classList.add('transition_opacity')
});
shortcut_10.addEventListener("mouseout", () => {
    fourth_mini_popup.classList.remove('transition_opacity')
});

shortcut_11.addEventListener("mouseenter", () => {
    fourth_mini_popup.classList.add('transition_opacity')
});
shortcut_11.addEventListener("mouseout", () => {
    fourth_mini_popup.classList.remove('transition_opacity')
});

shortcut_12.addEventListener("mouseenter", () => {
    fourth_mini_popup.classList.add('transition_opacity')
});
shortcut_12.addEventListener("mouseout", () => {
    fourth_mini_popup.classList.remove('transition_opacity')
});

shortcut_13.addEventListener("mouseenter", () => {
    fifth_mini_popup.classList.add('transition_opacity')
});
shortcut_13.addEventListener("mouseout", () => {
    fifth_mini_popup.classList.remove('transition_opacity')
});

shortcut_14.addEventListener("mouseenter", () => {
    fifth_mini_popup.classList.add('transition_opacity')
});
shortcut_14.addEventListener("mouseout", () => {
    fifth_mini_popup.classList.remove('transition_opacity')
});

shortcut_15.addEventListener("mouseenter", () => {
    fifth_mini_popup.classList.add('transition_opacity')
});
shortcut_15.addEventListener("mouseout", () => {
    fifth_mini_popup.classList.remove('transition_opacity')
});

shortcut_16.addEventListener("mouseenter", () => {
    sixth_mini_popup.classList.add('transition_opacity')
});
shortcut_16.addEventListener("mouseout", () => {
    sixth_mini_popup.classList.remove('transition_opacity')
});

shortcut_18.addEventListener("mouseenter", () => {
    sixth_mini_popup.classList.add('transition_opacity')
});
shortcut_18.addEventListener("mouseout", () => {
    sixth_mini_popup.classList.remove('transition_opacity')
});

shortcut_19.addEventListener("mouseenter", () => {
    seventh_mini_popup.classList.add('transition_opacity')
});
shortcut_19.addEventListener("mouseout", () => {
    seventh_mini_popup.classList.remove('transition_opacity')
});

shortcut_20.addEventListener("mouseenter", () => {
    seventh_mini_popup.classList.add('transition_opacity')
});
shortcut_20.addEventListener("mouseout", () => {
    seventh_mini_popup.classList.remove('transition_opacity')
});

shortcut_21.addEventListener("mouseenter", () => {
    seventh_mini_popup.classList.add('transition_opacity')
});
shortcut_21.addEventListener("mouseout", () => {
    seventh_mini_popup.classList.remove('transition_opacity')
});

shortcut_22.addEventListener("mouseenter", () => {
    eighth_mini_popup.classList.add('transition_opacity')
});
shortcut_22.addEventListener("mouseout", () => {
    eighth_mini_popup.classList.remove('transition_opacity')
});

shortcut_23.addEventListener("mouseenter", () => {
    eighth_mini_popup.classList.add('transition_opacity')
});
shortcut_23.addEventListener("mouseout", () => {
    eighth_mini_popup.classList.remove('transition_opacity')
});

shortcut_24.addEventListener("mouseenter", () => {
    eighth_mini_popup.classList.add('transition_opacity')
});
shortcut_24.addEventListener("mouseout", () => {
    eighth_mini_popup.classList.remove('transition_opacity')
});

shortcut_26.addEventListener("mouseenter", () => {
    ninth_mini_popup.classList.add('transition_opacity')
});
shortcut_26.addEventListener("mouseout", () => {
    ninth_mini_popup.classList.remove('transition_opacity')
});

shortcut_27.addEventListener("mouseenter", () => {
    tenth_mini_popup.classList.add('transition_opacity')
});
shortcut_27.addEventListener("mouseout", () => {
    tenth_mini_popup.classList.remove('transition_opacity')
});

shortcut_28.addEventListener("mouseenter", () => {
    tenth_mini_popup.classList.add('transition_opacity')
});
shortcut_28.addEventListener("mouseout", () => {
    tenth_mini_popup.classList.remove('transition_opacity')
});

shortcut_29.addEventListener("mouseenter", () => {
    tenth_mini_popup.classList.add('transition_opacity')
});
shortcut_29.addEventListener("mouseout", () => {
    tenth_mini_popup.classList.remove('transition_opacity')
});


// fonction permettant d'activer ou non les zones cliquables dans la bande de droite et de faire déplacer la barre en fonction du temps.
open_horaire.addEventListener("click", () => {
    if (open == 0) {
        planning.classList.add('moved')

        var hour = Number(('0'+now.getHours()).slice(-2));
        minutes_test  = Number(('0'+now.getMinutes()).slice(-2));

        if (hour < 11) actual_hour.style.left = '-41%'
        else if (hour >= 14) actual_hour.style.left = '44.70%'
        else {
            now = new Date()
            minutes_test  = Number(('0'+now.getMinutes()).slice(-2));
            var minutes_pourcentage = ((hour - 11) * 60 + minutes_test) / 180 ; // le "180" à la fin représente les 3h que dure l'évènement
            var add_pourcentage = -41 + (minutes_pourcentage * 85.70); // le 85.70 représente la différence entre le début et la fin de la bande horaire (44.70 - (-41))
            nb_pixel = add_pourcentage.toString() + '%'
            actual_hour.style.left = nb_pixel
            console.log(actual_hour.style.left)
        }
    
        add_display_none(first_column)
        add_display_none(second_column)
        add_display_none(third_column)
        add_display_none(fourth_column)
        add_display_none(fifth_column)
        add_display_none(sixth_column)
    
        if (hour < 11) add_display_inline(first_column)
        if (hour >= 11 && hour < 12) {
            if (minutes_test <= 35) add_display_inline(first_column)
            if (minutes_test >= 25) add_display_inline(second_column)
            if (minutes_test >= 55) add_display_inline(third_column)
        }
        else if (hour < 13) {
            if (minutes_test <= 5) add_display_inline(second_column)
            if (minutes_test <= 35) add_display_inline(third_column)
            if (minutes_test >= 25) add_display_inline(fourth_column)
            if (minutes_test >= 55) add_display_inline(fifth_column)
        }
        else if (hour < 14) {
            if (minutes_test <= 5) add_display_inline(fourth_column)
            if (minutes_test <= 35) add_display_inline(fifth_column)
            if (minutes_test >= 25) add_display_inline(sixth_column)
        }
        else if (hour >= 14) add_display_inline(sixth_column)
        open = 1;
    }
    else {
        planning.classList.remove('moved')
        open = 0 
    }
});

exit_planning.addEventListener("click", () => {
    planning.classList.remove('moved')
    var hour = Number(('0'+now.getHours()).slice(-2));
    minutes_test  = Number(('0'+now.getMinutes()).slice(-2));

    if (hour < 11) actual_hour.style.left = '-41%'
    else if (hour >= 14) actual_hour.style.left = '44.70%'
    else {
        now = new Date()
        minutes_test  = Number(('0'+now.getMinutes()).slice(-2));
        var minutes_pourcentage = ((hour - 11) * 60 + minutes_test) / 180 ;
        var add_pourcentage = -41 + (minutes_pourcentage * 85.70);
        nb_pixel = add_pourcentage.toString() + '%'
        actual_hour.style.left = nb_pixel
        console.log(actual_hour.style.left)
    }

    add_display_none(first_column)
    add_display_none(second_column)
    add_display_none(third_column)
    add_display_none(fourth_column)
    add_display_none(fifth_column)
    add_display_none(sixth_column)

    if (hour < 11) add_display_inline(first_column)
        if (hour >= 11 && hour < 12) {
            if (minutes_test <= 35) add_display_inline(first_column)
            if (minutes_test >= 25) add_display_inline(second_column)
            if (minutes_test >= 55) add_display_inline(third_column)
        }
        else if (hour < 13) {
            if (minutes_test <= 5) add_display_inline(second_column)
            if (minutes_test <= 35) add_display_inline(third_column)
            if (minutes_test >= 25) add_display_inline(fourth_column)
            if (minutes_test >= 55) add_display_inline(fifth_column)
        }
        else if (hour < 14) {
            if (minutes_test <= 5) add_display_inline(fourth_column)
            if (minutes_test <= 35) add_display_inline(fifth_column)
            if (minutes_test >= 25) add_display_inline(sixth_column)
        }
        else if (hour >= 14) add_display_inline(sixth_column)

    open = 0
});

function add_display_none(myNodeList) {
    for (var i = 0; i < myNodeList.length; ++i) {
        var item = myNodeList[i];  // L'appel de myNodeList.item(i) n'est pas nécessaire en JavaScript
        item.style.display = 'none'
      }
};

function add_display_inline(myNodeList) {
    for (var i = 0; i < myNodeList.length; ++i) {
        var item = myNodeList[i];  // L'appel de myNodeList.item(i) n'est pas nécessaire en JavaScript
        item.style.display = 'inline'
      }
};

function ch_zoom() {
      document.body.style.zoom = "100%";
      setTimeout(ch_zoom, 100);
}
