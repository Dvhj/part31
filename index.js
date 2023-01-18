let button = document.querySelector('.button_head')
let button1 = document.querySelector('.price_head_but1')
let button2 = document.querySelector('.price_head_but2')
let money1 = document.querySelector('.money_js')
let money2 = document.querySelector('.money_js2')
let card = document.querySelectorAll('.price_card')


button2.addEventListener('click', timeUseYear)
button1.addEventListener('click', timeUseMonth)


function timeUseYear(){
	money1.innerHTML = '$30<span class="min_size">/month'
	money2.innerHTML = '$120<span class="min_size">/month</span>'
	button2.classList.remove('but2_js')
	button2.classList.add('but1_js')
	button1.classList.remove('but1_js')
	button1.classList.add('but2_js')
}
function timeUseMonth(){
	money1.innerHTML = '$29<span class="min_size">/month</span>'
	money2.innerHTML = '$100<span class="min_size">/month</span>'
	button1.classList.remove('but2_js')
	button1.classList.add('but1_js')
	button2.classList.remove('but1_js')
	button2.classList.add('but2_js')
}

let price_card = Array.from(card)
console.log(price_card)
console.log(price_card[1])



function priceCardZero(){	
	price_card[0].classList.add('price_card');
	price_card[0].classList.remove('selected_card');}
function priceCardOne(){
	price_card[1].classList.add('price_card');
	price_card[1].classList.remove('selected_card');}
function priceCardTwo(){
	price_card[2].classList.add('price_card');
	price_card[2].classList.remove('selected_card')
}

price_card.forEach(elem => elem.addEventListener('click', function() {
	console.log(price_card.indexOf(elem))
	function priceCardElem(){
		elem.classList.remove('price_card');
		elem.classList.add('selected_card')
	}
	if(price_card.indexOf(elem) == 0){
		priceCardElem();
		priceCardOne();
		priceCardTwo()
	} else if(price_card.indexOf(elem) == 1){
		priceCardElem();
		priceCardZero();
		priceCardTwo()
	} else if(price_card.indexOf(elem) == 2){
		priceCardElem();
		priceCardOne();
		priceCardZero()
	}
}))

