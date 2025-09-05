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
				}
			});
			filter(0)
		})
}

/* Filter */

function filter(id) {
	const images = document.querySelectorAll('.image');
	const f1 = document.querySelectorAll('.f1');
	const f2 = document.querySelectorAll('.f2');
	const f3 = document.querySelectorAll('.f3');
	const f4 = document.querySelectorAll('.f4');
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
	}
}

function hide(content) {
	content.classList.add('hidden');
}

function show(content) {
	content.classList.remove('hidden');
}
