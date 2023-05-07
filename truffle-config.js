const path=require('path');
module.exports = {
  networks: {},
  mocha: {},
contracts_build_directory:path.join(__dirname,"./client/src/contracts"),
  compilers: {
    solc: {}
  }
};
