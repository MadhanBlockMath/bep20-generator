const { ethers,network } = require("hardhat");


async function main() {
  const [owner] = await ethers.getSigners();
  console.log("Deploying to network:", network.name);
  console.log("Deploying from account:", owner.address);

  
  const HelloBEP20= await ethers.getContractFactory("MyToken");
  let bep20 = await HelloBEP20.connect(owner).deploy();
  await bep20.deployed();

  console.log("Bep20 contract address deployed to:", bep20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
