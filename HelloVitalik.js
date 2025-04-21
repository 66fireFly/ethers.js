import { ethers } from "ethers";
//require("dotenv").config();
import "dotenv/config";
//查询 Vitalik 钱包的 ETH 余额
//const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const provider = ethers.getDefaultProvider(process.env.SEPOLIA_RPC_URL);
const main = async () => {
  const balance = await provider.getBalance(`vitalik.eth`);
  console.log(` Balance of my: ${ethers.formatEther(balance)} ETH`);
};
main();
