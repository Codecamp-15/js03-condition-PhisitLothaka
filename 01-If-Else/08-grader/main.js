let point = prompt('point : ');
if(point === null || point.trim()===""  || isNaN(point) ){
    alert("ข้อมูลไม่ถุกต้อง");
}else if(point > 80 ){
    alert("A");
}else if(point > 70){
    alert("B");
}else if(point > 60){
    alert("C");
}else if(point > 50){
    alert("D");
}else{
    alert("F");
}

