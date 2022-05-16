const { ethers } = require('hardhat')
require('@nomiclabs/hardhat-etherscan')

async function main() {
  const metadataURL = 'ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/'

  await hre.run('verify:verify', {
    address: '0x9d8A4821E05423876505A5682F5E6a0fcA9c99AB',
    constructorArguments: [metadataURL],
  })
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
