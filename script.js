//your JS code here. If required.
let x = window.innerWidth;
let y = window.innerHeight;

sizeInfo.innerText = `Width: ${x} and Height: ${y}`;
window.addEventListener('resize', () => {
	let x = window.innerWidth;
	let y = window.innerHeight;
	
	sizeInfo.innerText = `Width: ${x} and Height: ${y}`;
})

