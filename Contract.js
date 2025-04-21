import { ethers } from "ethers";
import "dotenv/config";

// 连接以太坊主网
const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);

// 人类可读abi，以ERC20合约为例
const abiERC20 = [" function retrieve() public view returns (uint256)"];

const addressDAI = "0xbE02978553c465D1E64AD6437916Eb3CC2d826b9"; // DAI Contract
const contractDAI = new ethers.Contract(addressDAI, abiERC20, provider);
const main = async () => {
  // 2. 读取DAI合约的链上信息（IERC20接口合约）
  const nameDAI = await contractDAI.retrieve();

  console.log("\n2. 读取DAI合约信息");
  console.log(`合约地址: ${addressDAI}`);
  console.log(`名称: ${nameDAI}`);
};

main();
