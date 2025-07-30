const hre = require("hardhat");
const { parseEther } = require("ethers");

async function main() {
  const initialSupply = parseEther("1000");

  const TokenA = await hre.ethers.getContractFactory("TokenA");
  const tokenA = await TokenA.deploy(initialSupply);
  await tokenA.waitForDeployment();
  console.log("TokenA deployed to:", tokenA.target);

  const TokenB = await hre.ethers.getContractFactory("TokenB");
  const tokenB = await TokenB.deploy(initialSupply);
  await tokenB.waitForDeployment();
  console.log("TokenB deployed to:", tokenB.target);

  const TokenSwap = await hre.ethers.getContractFactory("TokenSwap");
  const tokenSwap = await TokenSwap.deploy(tokenA.target, tokenB.target);
  await tokenSwap.waitForDeployment();
  console.log("TokenSwap deployed to:", tokenSwap.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
