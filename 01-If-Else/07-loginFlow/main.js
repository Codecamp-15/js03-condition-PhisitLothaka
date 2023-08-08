let userName = prompt("Username : ");
let passWord = prompt("Password : ");

if(userName === null || userName.trim()=== ""){
    alert("Username is required");
}else 
if(passWord === null || passWord.trim() === ""){
    alert("Password is required");
}