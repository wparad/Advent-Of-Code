const { DateTime } = require('luxon');
const path = require('path');

const directoryPath = path.join(__dirname, `${DateTime.utc().year}`, `day${DateTime.utc().day}.js`);
require(directoryPath);