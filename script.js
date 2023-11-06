let clickedImg = document.getElementById('clickedImg');
let changeH1 = document.getElementById('changeH1');
let changeP = document.getElementById('changeP');
let headImg = document.getElementById('headImg'); ////////background img
let downImg = document.getElementById('downImg');
let boldText1 = document.getElementById('boldText1');
let boldText2 = document.getElementById('boldText2');
let boldText3 = document.getElementById('boldText3');
let smallP1 = document.getElementById('smallP1');
let smallP2 = document.getElementById('smallP2');
clickedImg.addEventListener('click', function changeToCat() {
	// headImg.style.backgroundImage =
	// 	"url ('https://media.cnn.com/api/v1/images/stellar/prod/221010113806-01-cat-love-affection-stock.jpg?c=16x9&q=h_720,w_1280,c_fill')";
	headImg.style.backgroundImage =
		'url(https://image.petmd.com/files/styles/978x550/public/2023-01/how-long-do-cats-live.jpg)';
	changeH1.innerHTML = "We're the cat People";
	changeP.innerHTML = 'Book trusted, local pet sitters and walkers who will care for your cat like you would.';
	downImg.src = 'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/01/cat-and-person-0111211.jpg';
	boldText1.innerHTML = 'Catty Day Care';
	boldText2.innerHTML = 'Cat walking';
	boldText3.innerHTML = 'Catty Day Care';
	smallP1.innerHTML = 'Whenever your cat needs a walk.';
	smallP2.innerHTML = 'Daytime pet care in your sitter’s cat-friendly home.';
});
