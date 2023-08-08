let user = (prompt("what your name : "));
 let password ;
if(user === null || user.trim() === "" || user !== "codecamp"){
    user = "guest";
    alert(`Welcome ${user}`);
} else if(user === "codecamp"){
    password = prompt("password : ")
    if (password === '123456'){
        user ="codecamp";
        alert(`Welcome ${user}`);
    }else {
    alert("Wrong password");
    }

}

