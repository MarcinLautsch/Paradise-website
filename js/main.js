const nav = document.querySelector('.nav')
const btnBurger = document.querySelector('.burger-btn')
const allNaviItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')
// =========

const handleNav = () => {
	nav.classList.toggle('nav--active')
	navBtnBars.classList.remove('black-bars-color')

	allNaviItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handlenaviItemAnimation()
}

const handlenaviItemAnimation = () => {
	let delayTime = 0

	allNaviItems.forEach(item => {
		item.classList.toggle('nav-item-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

//zmieia date w footerze funkcja
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

//funkcja obesrwowanie sekcji zeby zmienic kolor burger menu
const handleObserver = () => {
	const currentsection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentsection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentsection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

// wywołanie funkcji (właczenie).
btnBurger.addEventListener('click', handleNav)
handleCurrentYear()
window.addEventListener('scroll', handleObserver)
