const gulp = require("gulp");

function funcaoPadrao(callback) {
  /* callback -> gulp injetará uma função */
  setTimeout(() => {
    console.log("Executando via Gulp");
    callback();
  }, 2500);
}

function cumprimento(callback) {
  setTimeout(() => {
    console.log("Olá, Gulp!");
    dizTchau();
    callback();
  }, 3500);
}

function dizTchau() {
  console.log("Tchau, Gulp!");
}

exports.default = gulp.parallel(funcaoPadrao, cumprimento);
exports.cumprimento = cumprimento;
