 "use strict"
// console.log("start");
// for(let i=0;i<100;i++){
//     console.log(Math.random(i));
// }
// console.log('end');

const fs =require ('fs/promises');

fs.mkdir('./tmp')
.then((err) => {
    console.log('success dir');
});

fs.writeFile('./tmp/hello.txt','Hello From NodeJS')
.then((err) => {
    console.log('success file');
});

fs.readFile('./tmp/hello.txt', 'utf-8')
.then((file) => {
    console.log(file);
});