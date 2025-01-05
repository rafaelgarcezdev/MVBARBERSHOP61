// Importando as dependências
const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css"); // Para minificar o CSS

// Tarefa para minificar o CSS
gulp.task("minify-css", function () {
  return gulp
    .src("style.css") // Caminho para o seu arquivo CSS compilado
    .pipe(cleanCSS({ compatibility: "ie8" })) // Minifica o CSS
    .pipe(gulp.dest("./")); // Salva o arquivo minificado no mesmo diretório
});

// Tarefa padrão
gulp.task("default", gulp.series("minify-css"));
