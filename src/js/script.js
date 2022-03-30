let buttonKnock = document.querySelector(".button-knock");
let buttonOpen = document.querySelector(".button-open");
let doorClose = document.querySelector(".door-close");
let doorOpen = document.querySelector(".door-open");
let doorCloseClick = document.querySelector(".door-close-click");
let main = document.querySelector(".main");


buttonOpen.addEventListener("click", function () {
	doorCloseClick.style.opacity = "0";
	setTimeout(returnOrigOpen, 1000);
	
})

buttonKnock.addEventListener("click", function () {
	setTimeout(returnOrigClose, 1000);
	doorClose.style.opacity = "1";
	doorOpen.style.opacity = "0";
	doorClose.style.width = "100%";
	doorClose.style.height = "55%";
	console.log("11111111");
})

function returnOrigClose () {
	doorCloseClick.style.opacity = "1";
	  }

	  function returnOrigOpen () {
		doorOpen.style.opacity = "1";
	doorClose.style.width = "0%";
	doorClose.style.height = "0%";
	doorOpen.style.width = "100%";
	doorOpen.style.height = "55%";
	console.log("11111111");
		  }
  
let password = window.prompt("Как Вас Зовут?");


	if (password === "Ричард") {
		main.style.opacity = "1";
	} else {
		alert(`Здравствуйте ${password}!`);
	}



