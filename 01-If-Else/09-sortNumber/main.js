let a = +prompt("number 1 : ");
let b = +prompt("number 2 : ");
let c = +prompt("number 3 : ");

let max ;
let mid ;
let min ;
// version ทำในห้องเรียน
if(a > b && a > c){
    max = a ;
    if(b > c){
        mid = b;
        min = c;
    }else {
        mid = c;
        min = d;
    }
}else if(b > a && b > c){
    max = b;
    if(a > c){
        mid = a;
        min = c;
    }else{
        mid = c;
        min = a;
    }
}else if(c > a && c > b){
    max = c
    if(a > b){
        mid = a;
        min = b;
    }else {
        mid = b;
        min = a;
    }
}
console.log(max,mid,min);

// version ทำเอง
// if((a > b) > c  ){
//      d = a ;
//     if(b > c){
//          e = b;
//          f = c;
//         console.log(d,e,f);
//     }else{
//         e=b;
//         f=c;
//         console.log(d,f,e);
//     }
// }else if((b > a) > c){
//      d = b;
//     if(a > c){
//         e=a;
//         f=c;
//         console.log(d,e,f);
//     }else {
//         e=a;
//         f=c;
//         console.log(d,f,e);
//     }
// }else if((c > a) > b){
//     c = b;
//    if(a > b){
//        e=a;
//        f=b;
//        console.log(d,e,f);
//    }else {
//        e=a;
//        f=b;
//        console.log(d,f,e);
//    }
// }

// อาจารย์
// v.0 แสดงตัวที่มากสุด
// v.1 
// มี case อะไรบ้าง
// case 1 ; x มากสุด
// case 2 ; y มากสุด
// case 3 ; z มากสุด