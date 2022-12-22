const { DateTime } = require('luxon');
const path = require('path');
const { readdir } = require('fs/promises');

async function getFiles(source) {
  return (await readdir(source, { withFileTypes: true }))
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name);
}

getFiles(path.join(__dirname, `${DateTime.utc().year}`)).then(days => {
  const day = Math.max(...days.map(d => Number(d.split('day')[1].split('.')[0])));

  const directoryPath = path.join(__dirname, `${DateTime.utc().year}`, `day${day}.js`);
  require(directoryPath);
});


