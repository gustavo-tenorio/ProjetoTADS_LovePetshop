let i = 0;
const images = [
    "/img/pet.png",
    "/img/pet2.png",
	"/img/pet3.png"
];

function changeImg(){
	document.slide.src = images[i];

	// Verificar se o indice esta abaixo da quantidade de imagens
	if(i < images.length - 1){
	  //Passar para a proxima imagem
	  i++; 
	} else { 
		// Voltar para a primeira imagem
		i = 0;
	}

	// Função ira rodar a cada 2 segundos e emio
	setTimeout("changeImg()", 2500);
}

// Carregar função quando a página abrir
window.onload=changeImg;