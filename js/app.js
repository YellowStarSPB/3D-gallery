let zSpacing = -1000,
	lastPos = zSpacing / 5,
	$frames = document.getElementsByClassName('frame'),
	frames = Array.from($frames),
	zVals = []

window.onscroll = function() {
	
	let top = document.documentElement.scrollTop,
		delta = lastPos - top

	lastPos = top

	frames.forEach(function(element, index) {
		zVals.push((index * zSpacing) + zSpacing)
		zVals[index] += delta * -5.5

		let frame = frames[index],
			transform = `translateZ(${zVals[index]}px)`
			opacity = zVals[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0

		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})
}

window.scrollTo(0, 1)