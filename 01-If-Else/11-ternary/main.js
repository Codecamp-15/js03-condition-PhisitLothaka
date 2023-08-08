let login = prompt("enter username");
let message =  
login === 'Employee' 
    ? 'hello' : login === 'Director'
    ? 'greetings' : login === ""
    ? 'No login' : "" ; 
    console.log(message);