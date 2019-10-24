const aux = 10;
let counter = 1;
let score = 0;
let saveSelection=1;
let timer;
let time = aux;
let randomQuestions = [];
const answers1 = [4,1,3,2,3,1];
const answers2 = [3,4,3,1,2,4];

const getReady=()=>{
  //Hacer el random para seleccionar las preguntas y mandar llamar la funcion de llenado doingMagic.
  let cycle;
  let position;
  let options = [1,2,3,4,5,6];
  for (cycle=0;cycle<3;cycle++){
    position=Math.floor(Math.random() * options.length);
    randomQuestions.push(options[position]);
    options.splice(position,1);
  }
  doingMagic();
}

const doingMagic=()=>{
  document.getElementById("bOption"+saveSelection).style.background="#0BACAC";
  document.getElementById("answer").style.visibility="hidden";
  document.getElementById("bNext").style.visibility="hidden";
  document.getElementById("bAnswer").style.visibility="hidden";
  document.getElementById("questionNum").innerHTML = counter + " de 3";
  if (sessionStorage.categoria == 1){
    switch (randomQuestions[counter-1]) {
    case 1:
      document.getElementById("question").innerHTML = "En Harry Potter, ¿cómo se denomina el hechizo asesino?";
      document.getElementById("bOption1").innerHTML ="Lumos";
      document.getElementById("bOption2").innerHTML ="Accio";
      document.getElementById("bOption3").innerHTML ="Cruciatus";
      document.getElementById("bOption4").innerHTML ="Avada Kedavra";
      break;
    case 2:
      document.getElementById("question").innerHTML = "¿Cual era el nombre de la pequeña protagonista en El Laberinto del Fauno?";
      document.getElementById("bOption1").innerHTML ="Ofelia";
      document.getElementById("bOption2").innerHTML ="Wendy";
      document.getElementById("bOption3").innerHTML ="Hermione";
      document.getElementById("bOption4").innerHTML ="Amelia";
      break;
    case 3:
      document.getElementById("question").innerHTML = "¿De qué año es la primera entrega de Matrix?";
      document.getElementById("bOption1").innerHTML ="2000";
      document.getElementById("bOption2").innerHTML ="2001";
      document.getElementById("bOption3").innerHTML ="1999";
      document.getElementById("bOption4").innerHTML ="1998";
      break;
    case 4:
      document.getElementById("question").innerHTML = "¿Como se llama el actor, compañero de John Travolta en Pulp Fiction?";
      document.getElementById("bOption1").innerHTML ="Denzel Washington";
      document.getElementById("bOption2").innerHTML ="Samuel L. Jackson";
      document.getElementById("bOption3").innerHTML ="Martin Lawrence";
      document.getElementById("bOption4").innerHTML ="Wesley Snipes";
      break;
    case 5:
      document.getElementById("question").innerHTML = "¿Cómo se llama la primera película del Señor de los Anillos?";
      document.getElementById("bOption1").innerHTML ="Las dos torres";
      document.getElementById("bOption2").innerHTML ="El retorno del Rey";
      document.getElementById("bOption3").innerHTML ="La comunidad del anillo";
      document.getElementById("bOption4").innerHTML ="Un viaje inesperado";
      break;
    case 6:
      document.getElementById("question").innerHTML = "¿A qué especie pertenece el Maestro Yoda?";
      document.getElementById("bOption1").innerHTML ="Desconocida";
      document.getElementById("bOption2").innerHTML ="Gungan";
      document.getElementById("bOption3").innerHTML ="Ewok";
      document.getElementById("bOption4").innerHTML ="Wookiee";
      break;
    default:
      alert("Fallo al cargar pregunta");
      break;
    }
  } 
  else {
    switch (randomQuestions[counter-1]) {
    case 1:
      document.getElementById("question").innerHTML = "¿Que tipo de carne lleva tradicionalmente la birria?";
      document.getElementById("bOption1").innerHTML ="Res";
      document.getElementById("bOption2").innerHTML ="Pollo";
      document.getElementById("bOption3").innerHTML ="Chivo";
      document.getElementById("bOption4").innerHTML ="Ternera";
      break;
    case 2:
      document.getElementById("question").innerHTML = "¿De donde son originarias las Tlayudas?";
      document.getElementById("bOption1").innerHTML ="CDMX";
      document.getElementById("bOption2").innerHTML ="Yucatán";
      document.getElementById("bOption3").innerHTML ="Jalisco";
      document.getElementById("bOption4").innerHTML ="Oaxaca";
      break;
    case 3:
      document.getElementById("question").innerHTML = "¿Que es el huitlacoche?";
      document.getElementById("bOption1").innerHTML ="Leguminosa";
      document.getElementById("bOption2").innerHTML ="Fruta";
      document.getElementById("bOption3").innerHTML ="Hongo";
      document.getElementById("bOption4").innerHTML ="Vegetal";
      break;
    case 4:
      document.getElementById("question").innerHTML = "¿En que mes es tradicional el pan de muerto?";
      document.getElementById("bOption1").innerHTML ="Noviembre";
      document.getElementById("bOption2").innerHTML ="Enero";
      document.getElementById("bOption3").innerHTML ="Diciembre";
      document.getElementById("bOption4").innerHTML ="Julio";
      break;
    case 5:
      document.getElementById("question").innerHTML = "¿Que es la 'Nogada'?";
      document.getElementById("bOption1").innerHTML ="Salsa";
      document.getElementById("bOption2").innerHTML ="Crema";
      document.getElementById("bOption3").innerHTML ="Aderezo";
      document.getElementById("bOption4").innerHTML ="Sopa";
      break;
    case 6:
      document.getElementById("question").innerHTML = "¿Cuantos tipos de panes mexicanos existen?";
      document.getElementById("bOption1").innerHTML ="110";
      document.getElementById("bOption2").innerHTML ="50";
      document.getElementById("bOption3").innerHTML ="5";
      document.getElementById("bOption4").innerHTML ="1000";
      break;
    default:
      alert("Fallo al cargar pregunta");
      break;
    }
  }
  setTimer();
}

const setTimer=()=>{
  timer = setInterval(timeUP,1000);
}

const timeUP=()=>{
  time--;
  document.getElementById("showTimer").innerHTML="Tiempo restante: " + time + " segundos.";

  if (time==-1){
    document.getElementById("showTimer").innerHTML="Tiempo restante: 0 segundos.";
    document.getElementById("bOption1").disabled = true;
    document.getElementById("bOption2").disabled = true;
    document.getElementById("bOption3").disabled = true;
    document.getElementById("bOption4").disabled = true;
    document.getElementById("bNext").style.visibility="visible";
    document.getElementById("bAnswer").style.visibility="visible";
    clearInterval(timer);
    alert("Se termino el tiempo, intenta con la siguiente pregunta");
  }
}

const setScore=(selection)=>{
  let position = randomQuestions[counter-1] - 1;
  clearInterval(timer);
  if (sessionStorage.categoria == 1){
    if (selection == answers1[position]){
      score++;
      document.getElementById("bOption"+selection).style.background="#4CAF50";
    } else{
      document.getElementById("bAnswer").style.visibility="visible";
      document.getElementById("bOption"+selection).style.background="#F3260B";
    }
  } else{
    if (selection == answers2[position]){
      score++;
      document.getElementById("bOption"+selection).style.background="#4CAF50";
    } else{
      document.getElementById("bAnswer").style.visibility="visible";
      document.getElementById("bOption"+selection).style.background="#F3260B";
    }
  }
  document.getElementById("bOption1").disabled = true;
  document.getElementById("bOption2").disabled = true;
  document.getElementById("bOption3").disabled = true;
  document.getElementById("bOption4").disabled = true;
  document.getElementById("bNext").style.visibility="visible";
  saveSelection = selection;
}

const showAnswer=()=>{
  let position = randomQuestions[counter-1] - 1;
  if(sessionStorage.categoria == 1){
    switch(answers1[position]){
      case 1:
        document.getElementById("answer").innerHTML= document.getElementById("bOption1").innerHTML;
      break;
      case 2:
        document.getElementById("answer").innerHTML= document.getElementById("bOption2").innerHTML;
      break;
      case 3:
        document.getElementById("answer").innerHTML= document.getElementById("bOption3").innerHTML;
      break;
      case 4:
        document.getElementById("answer").innerHTML= document.getElementById("bOption4").innerHTML;
      break;
    }
  } 
  else {
    switch(answers2[position]){
      case 1:
        document.getElementById("answer").innerHTML= document.getElementById("bOption1").innerHTML;
      break;
      case 2:
        document.getElementById("answer").innerHTML= document.getElementById("bOption2").innerHTML;
      break;
      case 3:
        document.getElementById("answer").innerHTML= document.getElementById("bOption3").innerHTML;
      break;
      case 4:
        document.getElementById("answer").innerHTML= document.getElementById("bOption4").innerHTML;
      break;
    }
  }
  document.getElementById("answer").style.visibility="visible"; 
}

const goToResults=()=>{
  if (counter < 3){
    counter++;
    doingMagic();
  } else{
    sessionStorage.setItem("correctAnswers", score);
    window.location.href = "results.html";
  }
  time = aux;
  document.getElementById("showTimer").innerHTML="Tiempo restante: "+aux+" segundos.";
  document.getElementById("bOption1").disabled = false;
  document.getElementById("bOption2").disabled = false;
  document.getElementById("bOption3").disabled = false;
  document.getElementById("bOption4").disabled = false;
}