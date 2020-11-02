// # esercizio del giorno

// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio dallo ZIP che vi passo:
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS

// var selectMenu = $('i.fa-bars');
// var selectClasse = $('div.hamburger-menu');
// var selectX = $('i.fa-times');

// selectMenu.click(function() {
//     selectClasse.show();
// });

// selectX.click(function() {
//     selectClasse.hide();
// });

// prova con add classe active
var selectMenu = $('i.fa-bars');
var selectClasse = $('div.hamburger-menu');
var selectX = $('i.fa-times');

// aggiunta classe per apertura menu
selectMenu.click(function() {
    selectClasse.addClass('active');
});

// aggiunta classe per chiusura menu
selectX.click(function() {
    selectClasse.removeClass('active');
});