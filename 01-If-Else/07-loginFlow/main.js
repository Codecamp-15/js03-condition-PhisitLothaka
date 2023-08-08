let userName = prompt("Username : ");

if (userName === null || userName.trim() === "") {
    alert("Username is required");
}
let passWord = prompt("Password : ");
if (passWord === null || passWord.trim() === "") {
    alert("Password is required");
}

if (userName == "admin" && passWord == "1234" || userName == "john" && passWord == "qwerty") {
    alert(`Hello ${userName}`);
}else{ 
    alert("invalid username or password");
}