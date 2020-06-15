const pic = document.querySelector('input[name = "pic-link"]');
const topWords = document.querySelector("input[name = 'top-words']");
const bottomWords = document.querySelector("input[name = 'bottom-words']");
const submitMeme = document.querySelector("input[name = 'submit-btn']");
const divvy = document.getElementById('bottom-body');

submitMeme.addEventListener('click', function(e) {
	e.preventDefault();
	let newDiv = document.createElement('div');
	let topDiv = document.createElement('div');
	let btmDiv = document.createElement('div');
	let remove = document.createElement('button');
	remove.id = 'removebtn';
	remove.innerText = 'X';
	remove.addEventListener('click', function(event) {
		event.target.parentElement.remove();
	});
	divvy.append(newDiv);
	newDiv.style.backgroundImage = 'url(' + pic.value + ')';
	newDiv.id = 'meme';
	newDiv.append(topDiv);
	newDiv.append(btmDiv);
	newDiv.append(remove);
	topDiv.id = 'topdiv';
	btmDiv.id = 'btmdiv';
	topDiv.innerHTML = topWords.value;
	btmDiv.innerHTML = bottomWords.value;
	pic.value = '';
	topWords.value = '';
	bottomWords.value = '';
	console.log('you submitted the form!');
});
