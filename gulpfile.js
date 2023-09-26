function funcaoPadrao(callback) {
  /* callback -> gulp injetará uma função */
  console.log("Executando via Gulp");
  callback();
}

function cumprimento(callback) {
  console.log("Olá, Gulp!");
  dizTchau();
  callback();
}

function dizTchau() {
  console.log("Tchau, Gulp!");
}

exports.default = funcaoPadrao;
exports.cumprimento = cumprimento;
