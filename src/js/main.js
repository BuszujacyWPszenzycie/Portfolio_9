// Function for picture in About section

window.addEventListener('scroll', function () {
	let scrollValue = window.scrollY
	const aboutImg = document.querySelector('.about__img')
	let scaleValue = 0.9 + scrollValue / 3000
	if (parseFloat(scaleValue) > 1.1) {
		aboutImg.style.transform = 'scale(1.1)'
	} else {
		aboutImg.style.transform = 'scale(' + scaleValue + ')'
	}
})

// Function for items in Portfolio

window.addEventListener('scroll', function () {
	const allPortfolioItems = document.querySelectorAll('.portfolio__item')
	let scrollValue = window.scrollY
	let scaleValue = 0.5 + scrollValue / 5000
	let opacityValue = 0.55 + scrollValue / 7000
	allPortfolioItems.forEach(item => {
		if (parseFloat(scaleValue) > 1.1) {
			item.style.transform = 'scale(1.1)'
		} else {
			item.style.transform = 'scale(' + scaleValue + ')'
		}
		item.style.opacity = opacityValue
	})
})
