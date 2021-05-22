const { resolve } = require('path');


const alias = {
  '@core': resolve(__dirname, './src/core'),
};

module.exports = {
  alias,
};
