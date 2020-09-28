const um = document.getElementById("um");
const dois = document.getElementById("dois");
const tres = document.getElementById("tres");
const quatro = document.getElementById("quatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const sete = document.getElementById("sete");
const oito = document.getElementById("oito");
const nove = document.getElementById("nove");
const array = "Programming Languagens & Technologies:".split(""); // 38
const array1 = "> Javascript".split("");
const array2 = "> ReactJS".split(""); //9
const array3 = "> ReactNative".split(""); //8   '> Python'.split('')//8
const array4 = "> Python".split(""); //8

const array7 = "Natural Language:".split(""); //17
const array8 = "> English (High intermediate)".split(""); //29

function TypeWrite1() {
  //titulo principal
  array.forEach((letra, i) => {
    setTimeout(function () {
      um.innerHTML += letra;
    }, 75 * i);
  });
  //Javascript
  setTimeout(function () {
    array1.forEach((letra, i) => {
      setTimeout(function () {
        dois.innerHTML += letra;
      }, 75 * i);
    });
  }, 2973);
  //reactjs
  setTimeout(function () {
    array2.forEach((letra, i) => {
      setTimeout(function () {
        tres.innerHTML += letra;
      }, 75 * i);
    });
  }, 3667);
  //nodejs
  setTimeout(function () {
    array3.forEach((letra, i) => {
      setTimeout(function () {
        quatro.innerHTML += letra;
      }, 75 * i);
    });
  }, 4293);
  //python
  setTimeout(function () {
    array4.forEach((letra, i) => {
      setTimeout(function () {
        cinco.innerHTML += letra;
      }, 75 * i);
    });
  }, 4919);
  //mysql
  setTimeout(function () {
    array5.forEach((letra, i) => {
      setTimeout(function () {
        seis.innerHTML += letra;
      }, 75 * i);
    });
  }, 5466);
  //php
  setTimeout(function () {
    array6.forEach((letra, i) => {
      setTimeout(function () {
        sete.innerHTML += letra;
      }, 75 * i);
    });
  }, 5857);
  //english title
  setTimeout(function () {
    array7.forEach((letra, i) => {
      setTimeout(function () {
        oito.innerHTML += letra;
      }, 75 * i);
    });
  }, 7187);
  //english
  setTimeout(function () {
    array8.forEach((letra, i) => {
      setTimeout(function () {
        nove.innerHTML += letra;
      }, 75 * i);
    });
  }, 9456);
}

function skills() {
  document.getElementById("skills-div").style.display = "block";
  document.getElementById("div").style.display = "none";
  document.getElementById("about-div").style.display = "none";
}

function typeWrite2() {
  const titulo = document.getElementById("titulo-principal");
  const textoArray = "Saudações, me chamo Henrique Moro atualmente estou cursando Ciencia da Computação na Universidade Vila Velha (UVV). Sou bastante curioso e sempre busco aprender coisas novas.".split(
    ""
  );

  textoArray.forEach((letra, i) => {
    setTimeout(function () {
      titulo.innerHTML += letra;
    }, 75 * i);
  });
}
function about() {
  document.getElementById("skills-div").style.display = "none";
  document.getElementById("div").style.display = "none";
  document.getElementById("about-div").style.display = "block";
}
const skill = document.getElementById("skills");
skill.addEventListener("click", function click(e) {
  TypeWrite1();
  skill.removeEventListener("click", click);
});
const abouts = document.getElementById("about");
abouts.addEventListener("click", function click2(e) {
  typeWrite2();
  abouts.removeEventListener("click", click2);
});

function getDate() {
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth() + 1;
  var ano = data.getFullYear();

  var ampm = "";
  var hora = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();

  if (hora < 12) {
    ampm = "AM";
  } else {
    ampm = "PM";
  }

  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }

  var dataFormatada =
    dia +
    "/" +
    mes +
    "/" +
    ano +
    "," +
    " " +
    hora +
    ":" +
    minutos +
    ":" +
    segundos +
    " " +
    ampm;

  const titulo2 = document.querySelector(".titulo2");
  const textoArray2 = dataFormatada.split("");
  setTimeout(function () {
    textoArray2.forEach((letra, i) => {
      setTimeout(function () {
        titulo2.innerHTML += letra;
      }, 75 * i);
    });
  }, 3600);
}

setTimeout(function () {
  setInterval(function () {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    var ampm = "";
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    if (hora < 12) {
      ampm = "AM";
    } else {
      ampm = "PM";
    }

    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (hora < 10) {
      hora = "0" + hora;
    }
    if (dia < 10) {
      dia = "0" + dia;
    }
    if (mes < 10) {
      mes = "0" + mes;
    }

    var dataFormatada =
      dia +
      "/" +
      mes +
      "/" +
      ano +
      "," +
      " " +
      hora +
      ":" +
      minutos +
      ":" +
      segundos +
      " " +
      ampm;

    const titulo2 = document.querySelector(".titulo2");
    const teste = document.getElementById("teste");
    titulo2.innerText = dataFormatada;
  }, 1000);
}, 5243);
getDate();
