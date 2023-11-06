let number = 0;
let data = []; // Añadir variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById("btn");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // Describir el proceso de recuperación de datos de ajax.json
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() { 
    if (request.readyState == 4) { 
      if(request.status == 200) { 
        console.log(request.response); 
       data = request.response;
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function changeVideo() { 
  getData();
  // Describe el proceso cuando se hace clic en el botón.
  button.addEventListener("click", e => {
    titleArea.innerHTML = data[number].title; 
          contentArea.innerHTML = data[number].content; //--5
          videoArea.setAttribute("src", data[number].url); //--6
          number === 2 ? number = 0 : number++;
  });
}

  
  // Sólo llamar al proceso getData si no se recuperan datos de ajax.json
window.onload = changeVideo;