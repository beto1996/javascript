const timer = (ms) => new Promise((res) => setTimeout(res, ms));
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function render() {
	images = [ '1.png', '2.png', '3.png', '4.png' ];
	const container = document.getElementById('container');
	container.innerHTML = '';
	for (let i = 0; i < 2; i++) {
		const divRow = document.createElement('div');
		divRow.style.cssText = 'display: flex; flex-direction: row;';
		for (let j = 0; j < 2; j++) {
			const div = document.createElement('div');
			const img = document.createElement('img');
			div.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden
                width:100px;
                height:100px;
                background-color:red;
                margin: 10px;
            `;
			img.style.cssText = `
                height:100%;
                width: 100%;
                object-fit: cover;
            `;
			img.src = 'img/' + images[getRandomInt(0, 3)];
			div.appendChild(img);
			divRow.appendChild(div);
		}

		container.appendChild(divRow);
	}
}
var stop = true;

function stopLoop() {
	stop = true;
}
function startLoop() {
	if (stop === false) return;
    stop = false;
    generate();
}

async function generate() {
	render();
	await timer(2000);
	if (stop) {
		return;
	}
	generate();
}

