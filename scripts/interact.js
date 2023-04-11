const { ethers, upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0xEa0731d1dA09F85A035410D1C1F1846C30675F36";
  const MyContract = await ethers.getContractFactory("MyContract");
  const proxy = await MyContract.attach(proxyAddress);

  // 读取状态变量的值
  const stateVariableValue = await proxy.getStateVariable();
  console.log("State variable value:", stateVariableValue.toString());

  // 更新状态变量的值
  await proxy.setStateVariable(100);
  console.log("State variable updated to 200.");

  // 再次读取状态变量的值
  const newStateVariableValue = await proxy.getStateVariable();
  console.log("New state variable value:", newStateVariableValue.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
