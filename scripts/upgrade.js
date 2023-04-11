const { ethers, upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0xEa0731d1dA09F85A035410D1C1F1846C30675F36";
  const MyContractV2 = await ethers.getContractFactory("MyContractV2");
  console.log("Upgrading proxy contract...");
  await upgrades.upgradeProxy(proxyAddress, MyContractV2);
  console.log("Proxy contract upgraded.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
