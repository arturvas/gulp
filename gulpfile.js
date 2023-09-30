/* Comentários
// pacote 'gulp-uglify' responsavel por comprimir os arquivos
// pacote 'gulp-sass' é responsável por integrar o sass com o gulp
// o pacote 'sass' que fará toda a compilação
// pacote 'gulp-obfuscate' é para dar privacidade ao codigo, o torando ilegivel no deploy
// pacote 'gulp-imagemin' para comprimir imagens 

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
const imagemin = require("gulp-imagemin");

function comprimeImagens() {
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

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

exports.default = function () {
  gulp.watch(
    "./source/styles/*.scss",
    { ignoreInitial: false },
    gulp.series(compliaSass)
  );
  gulp.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(comprimeJavaScript)
  );
  gulp.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulp.series(comprimeImagens)
  );
};
