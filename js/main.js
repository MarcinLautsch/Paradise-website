const nav = document.querySelector('.nav')
const btnBurger = document.querySelector('.burger-btn')
const allNaviItems = document.querySelectorAll('.nav__item')

// =========

const handleNav = () => {
	nav.classList.toggle('nav--active')

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

btnBurger.addEventListener('click', handleNav)
