import { ethers } from "ethers";
import "dotenv/config";
//正常运行⭐
// const provider = new ethers.JsonRpcProvider(
//   "https://sepolia.infura.io/v3/72bb160de1a9466eb20f836f93bcf3ce"
// );
//其他网络都报错
const provider = new ethers.JsonRpcProvider(
  //   "https://mainnet.infura.io/v3/72bb160de1a9466eb20f836f93bcf3ce"
  "https://linea-sepolia.infura.io/v3/72bb160de1a9466eb20f836f93bcf3ce"
);
const main = async () => {
  const balance = await provider.getBalance(`vitalik.eth`);
  console.log(` Balance of my: ${ethers.formatEther(balance)} ETH`);
};
main();
