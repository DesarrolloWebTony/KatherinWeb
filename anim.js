// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Solo dime tú hasta cuando", time: 15 },
  { text: "Yo te espero lo que quieras", time: 16 },
  { text: "Te espero hasta el día en que las vacas vuelen", time: 24 },
  { text: "Y se alineen los planetas", time: 25},
  { text: "Solo dime que hay un chance", time: 32 },
  { text: "Por microscópico que sea", time: 36 },
  { text: "Te espero hasta el día en que llueva para arriba", time: 41 },
  { text: "Y las montañas se muevan", time: 46 },
  { text: "Solo dime tú hasta", time: 47 },
  { text: "Cuándo, cuándo, cuándo, cuándo, cuándo", time: 50 },
  { text: "Te esperaré sentado hasta que tú me digas", time: 56 },
  { text: "Cuándo, cuándo, cuándo, cuándo, cuándo", time:  59},
  { text: "Te quierooo, disfruta el resto de la canción...", time: 67 },
  // { text: "Where I'm now? I don't know why", time: 91 },
  // { text: "Nice butterflies in my hands", time: 97 },
  // { text: "Too much light for twilight", time: 104 },
  // { text: "In the mood for the flowers love", time: 108 },
  // { text: "At the time", time: 144 },
  // { text: "The whisper of birds", time: 148 },
  // { text: "Lonely before the sun cried", time: 153 },
  // { text: "Fell from the sky", time: 158 },
  // { text: "Like water drops", time: 164 },
  // { text: "Where I'm now? I don't know why", time: 169 },
  // { text: "Nice butterflies in my hands", time: 176 },
  // { text: "Too much light for twilight", time: 183 },
  // { text: "In the mood for the flowers", time: 188 },
  // { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);