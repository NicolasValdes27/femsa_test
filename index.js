/* Función para evaluar si el string es valido según los parametros entregados */
const codelandUsernameValidation = (str) => {
    const regexConditions = /^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$/;
    regexConditions.test(str) ? console.log('verdadero') : console.log('falso')
}

/* Lo siguiente se utiliza para poder leer el 'username' del usuario desde la consola y evaluarlo */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Enter your username: ', name => {
    codelandUsernameValidation(name);
    readline.close();
});