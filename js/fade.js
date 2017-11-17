var counter = 0;
var listCount = 0;
var backArg;
var images = document.getElementById('images').getElementsByTagName('img');
images[counter].style.opacity = '1';

// var int = setInterval(fade, 4000);

function fade (direction) {
	clear();

if(direction === undefined){
	next();
}

else if(direction.id == 'next'){
	clearInterval(int);
	next();
	int = setInterval(fade, 4000);
}

else if(direction.id == 'back'){
	clearInterval(int);
	back();
	int = setInterval(fade, 4000);
}
}

function clear() {
	for(i = 0; i < images.length; i++) {
		images[i].style.opacity = '0';
	}
}

function next() {
	if(counter == images.length-1){
		counter = 0;
	}
	else {
		counter++;
	}

	images[counter].style.opacity = '1';
}

function back() {
	if (counter == 0){
		counter = images.length-1;
	}
	else {
		counter--;
	}
	images[counter].style.opacity = '1';
}

function list(arg) {
	if (listCount > 0) {
		closeList = backArg.getElementsByTagName('ul');
		closeList[0].style.display = "none";
	}
	var openList = arg.getElementsByTagName('ul');
	openList[0].style.display = "block";
	listCount++;
	backArg = arg;
}