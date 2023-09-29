const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// pacote 'gulp-sass' é responsável por integrar o sass com o gulp
// o pacote 'sass' que fará toda a compilação

/* 
#funções
- 'src' -> recebe como parametro os arquivos e as pastas do codigo sass;
- 'pipe' -> tem as papel de encadear as funções;
- 'dest' -> para onde os arquivos seram destinados.

#parâmetros
- callback -> gulp injetará uma função
*/

function compliaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/styles"));
}

function funcaoPadrao(callback) {
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
exports.sass = compliaSass;
