const { ethers,network } = require("hardhat");


async function main() {
  const [owner] = await ethers.getSigners();
  console.log("Deploying to network:", network.name);
  console.log("Deploying from account:", owner.address);

  
  const Erc721Contract= await ethers.getContractFactory("TestERC721");
  let erc721 = await Erc721Contract.connect(owner).deploy();
  await erc721.deployed();

  console.log("Bep20 contract address deployed to:", erc721.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
