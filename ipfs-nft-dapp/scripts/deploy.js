const { ethers } = require('hardhat')
require('dotenv').config({ path: '.env' })
require('@nomiclabs/hardhat-etherscan')

async function main() {
  const metadataURL = 'ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/'

  const lw3PunksContract = await ethers.getContractFactory('LW3Punks')
  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL)
  await deployedLW3PunksContract.deployed()

  console.log('LW3Punks Contract Address:', deployedLW3PunksContract.address)

  // Verify contract
  console.log('Sleeping.....')
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(60000)

  await hre.run('verify:verify', {
    address: deployedLW3PunksContract.address,
    constructorArguments: [metadataURL],
  })
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
