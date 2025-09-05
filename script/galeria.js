const filters = document.querySelectorAll('.filter');

/* Consume imgs from github rep */

function loadImages() {
	fetch("https://api.github.com/repos/Gus1331/MarqsBuffet/contents/assets/galeria")
		.then(response => response.json())
		.then(data => {
			const galery = document.getElementById('galery');

			data.forEach(item => {
				if (item.type === 'file') {
					const fileExtension = item.name.split('.')[1];
					let element;
					if (fileExtension != "mp4") {
						element = document.createElement('img');
					}
					else {
						element = document.createElement('video');
						element.controls = false;
						element.muted = true;
						element.autoplay = true;
						element.loop = true;
					}
					element.src = item.download_url;
					element.alt = item.name;
					element.classList.add('image');
					const fileName = item.name.split('.')[0];
					const matches = fileName.match(/f\d+/g);
					if (matches) {
						matches.forEach(match => {
							element.classList.add(`${match}`);
						});
					}
					galery.appendChild(element);
					element.addEventListener('click', handleOpenElement);
				}
			});
			filter(0);
		})
}

/* Open Element */
function handleOpenElement(element){
	console.log(element.srcElement.alt);
	const screenBc = document.getElementsByClassName('screen_background')[0];
	const screenContent = document.getElementsByClassName('screen_content')[0];
	screenContent.innerHTML = '';
	screenBc.style.display = 'flex';

	let content;
	if(element.srcElement.alt.split('.')[1] != 'mp4'){
		content = document.createElement('img');
	}
	else {
		content = document.createElement('video');
		content.controls = true;
		content.muted = true;
		content.autoplay = true;
	}
	content.src = element.srcElement.src;
	content.alt = element.srcElement.alt;
	content.classList.add('full_img');
	screenContent.appendChild(content);
}

/* Close Element */
function closeElement(){
	const screenBc = document.getElementsByClassName('screen_background')[0];
	screenBc.style.display = 'none';
}

/* Filter */

function filter(id) {
	const images = document.querySelectorAll('.image');
	const f1 = document.querySelectorAll('.f1');
	const f2 = document.querySelectorAll('.f2');
	const f3 = document.querySelectorAll('.f3');
	const f4 = document.querySelectorAll('.f4');
	const f5 = document.querySelectorAll('.f5');
	filters.forEach((f) => {
		f.classList.remove('active');
	});
	filters[id].classList.add('active');
	images.forEach(hide)
	switch (id) {
		case 0:
			images.forEach(show);
			break;
		case 1:
			f1.forEach(show);
			break;
		case 2:
			f2.forEach(show);
			break;
		case 3:
			f3.forEach(show);
			break;
		case 4:
			f4.forEach(show);
			break;
		case 5:
			f5.forEach(show);
			break;
	}
}

function hide(content) {
	content.classList.add('hidden');
}

function show(content) {
	content.classList.remove('hidden');
}
