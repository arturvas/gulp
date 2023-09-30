/* Comentários
// pacote 'gulp-uglify' responsavel por comprimir os arquivos
// pacote 'gulp-sass' é responsável por integrar o sass com o gulp
// o pacote 'sass' que fará toda a compilação
// pacote 'gulp-obfuscate' é para dar privacidade ao codigo, o torando ilegivel no deploy

#métodos
- 'src' -> recebe como parametro os arquivos e as pastas do codigo sass;
- 'pipe' -> tem as papel de encadear as funções;
- 'dest' -> para onde os arquivos seram destinados.

#Função
- callback -> gulp injetará uma função
- sourcemaps.init -> 
- soucemaps.write -> criar o arquivo de maepamento
*/

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");

function comprimeJavaScript() {
  return gulp
    .src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"));
}

function compliaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
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
exports.watch = function () {
  gulp.watch(
    "./source/styles/*.scss",
    { ignoreInitial: false },
    gulp.series(compliaSass)
  );
};
exports.javascript = comprimeJavaScript;
