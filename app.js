const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
  ]

const $div = $("<div>") //creating a div
$div.addClass("addACard"); //adding our custom css class
$div.html("Add a Card")

const $cardholder = $(".cardholder") //get element by class name
$cardholder.append($div)

const randomImage = () => {
const $img = $("<img>")
$img.attr("src", cards[Math.floor(Math.random() * cards.length)])
$cardholder.append($img)
}

function scrollToggle(x) {
    if (x === 0) {
    window.scrollTo(0,document.body.scrollHeight);
    } else {
        null
    }
}

$div.click(randomImage)

//This is for the auto scroll function, we check whether or not the radio button with the ID 'on' is checked or not, if it is checked, then the page will automatically scroll down!
$div.click (function() {
    //jQuery code for: if(document.getElementById("on").checked == true)
    if ($("#on").is(":checked")) {
    window.scrollTo(0,document.body.scrollHeight);
    } else {
        null; //do nothing
    }
})

