# Gulp

> Módulo 16

## O que é o Gulp?

O **Gulp** é um automatizador de tarefas, ele serve para fazer a compilação de forma automática do **SASS** para o **CSS**, serve também para compressão de arquivos. Resumindo ele automatiza tarefas repetitivas que teremos no desenvolvimento Front-end

## Configurando o Gulp

- Para utilizarmos o Gulp primeiro devemos instalar de forma global na nossa máquina, então abrindo o **Terminal** escreveremos a seguinte linha de código:
  `npm install --global gulp-cli`

- Depois disso iremos para nosso diretório do projeto e iniciaremos o nosso projeto
  `npm init -y`

- Agora iremos instalar o gulp nas **dependências do desenvolvedor**
  `npm install --save-dev gulp`

Então iremos adicionar ele ao **script** no arquivo `package.json`
`"gulp": "gulp", `

Depois criamos o arquivo **gulpfile.js** (é aqui que escreveremos as automações) e ai assim rodamos ele
`npm run gulp`
