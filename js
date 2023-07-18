canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
patoWidth = 100;
patoHeight = 100;
backgroundImage = "fundoo.png";
patoImage = "frentee.png";
patoX = 100;
patoY = 150;
function carregar() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	patoImgTag = new Image(); //definindo uma variável com uma nova imagem
	patoImgTag.onload = uploadpato; // ajustando uma função, ao carregar essa variável
	patoImgTag.src = patoImage;   // carregar a imagem
}
function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadpato() {
	ctx.drawImage(patoImgTag,patoX, patoY, patoWidth, patoHeight);
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			patoImgTag.src = "costas.png"
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			patoImgTag.src = "frentee.png"
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			patoImgTag.src = "direita.png"
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			patoImgTag.src = "esquerda.png"
			right();
			console.log("direita");
		}
}
function up()
{
	if(patoY >=0)
	{
		patoY = patoY - 10;
		console.log("Quando direcional cima for pressionada,  x = " +patoX + " | y = " +patoY);
		 uploadBackground();
		 uploadpato();
	}
}
function down()
{
	if(patoY <=400)
	{
		patoY =patoY+ 10;
		console.log("Quando direcional baixo for pressionada,  x = " + patoX + " | y = " +patoY);
		uploadBackground();
		 uploadpato();
	}
}
function left()
{
	if(patoX >= 0)
	{
		patoX =patoX - 10;
		console.log("Quando direcional esquerda for pressionada,  x = " + patoX + " | y = " +patoY);
		uploadBackground();
		 uploadpato();
	}
}
function right()
{
	if(patoX <= 900)
	{
		patoX =patoX + 10;
		console.log("Quando direcional direita for pressionada,  x = " + patoX + " | y = " +patoY);
		uploadBackground();
		uploadpato();
   }
}
