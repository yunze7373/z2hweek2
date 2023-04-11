const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");
  console.log("Deploying proxy contract...");
  const proxy = await upgrades.deployProxy(MyContract, [100], { initializer: "initialize" });
  console.log("Proxy contract deployed to:", proxy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
