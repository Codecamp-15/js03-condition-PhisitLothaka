let a = +prompt("number : ");
let b = +prompt("number : ");

if(isNaN(a) || isNaN(b)) {
    alert('Invalid Number');
}else{
    alert(a + b);
}