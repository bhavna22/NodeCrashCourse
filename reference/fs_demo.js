const fs = require('fs');
const path = require('path');

// Create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, err => {
   // if (err) throw err;
   // console.log('Folder created...')
//});

//Create and write to file
/* fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), 'Hello world!', err => {
    if (err) throw err;
    console.log('Folder written to...')
}); */

/* fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), ' I love you!', err => {
    if (err) throw err;
    console.log('Folder written to...')
}); */

//writeFile overrides in the file, if you want to append it you need to use appendFile

/* fs.appendFile(path.join(__dirname,'/test', 'hello.txt'), ' Node JS Going on', err => {
    if (err) throw err;
    console.log('Folder written to...')
}); */


//Read file, if you do not put the encoding utf8, you will get the raw buffer not the actual data
/* fs.readFile(path.join(__dirname,'/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Read file', data);
}); */

//Rename a file
fs.rename(path.join(__dirname,'/test', 'hellow.txt'), path.join(__dirname, '/test', 'hello.txt'), err => {
    if (err) throw err;
    console.log('Renamed...');
});


