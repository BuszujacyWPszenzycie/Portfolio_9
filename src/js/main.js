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
