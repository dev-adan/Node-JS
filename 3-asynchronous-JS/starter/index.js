const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file');
      resolve(data);
    });
  });
};

    
const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, data, (err) => {
        if (err) reject('Could not write a file');
        resolve('success');
      });
    });
  };
  

  
readFilePro(`${__dirname}/dog.txt`).then((data) => {
    return superagent
      .get(`https://dog.ceo/api/breed/${data}/images/random`)
      .then((res) => {
        return writeFilePro('dog-img.txt', res.body.message);
      })
      .then(() => {
        console.log('image saved to the file');
      });
  });
  

