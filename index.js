/* Function to evaluate if the string is valid according to the given parameters */
const codelandUsernameValidation = (str) => {
    const regexConditions = /^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$/;
    regexConditions.test(str) ? console.log('verdadero') : console.log('falso')
}

/* The following is used to read the username from the console and evaluate it */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Enter your username: ', name => {
    codelandUsernameValidation(name);
    readline.close();
});