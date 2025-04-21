import { ethers } from "ethers";
import "dotenv/config";
const providerSepolia = ethers.getDefaultProvider(process.env.SEPOLIA_RPC_URL);

async function checkBalances() {
  try {
    const balanceSepolia = await providerSepolia.getBalance(
      `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`
    );
    console.log(
      `Sepolia ETH Balance of vitalik: ${ethers.formatEther(
        balanceSepolia
      )} ETH`
    );
    const network = await providerSepolia.getNetwork();
    console.log("network", network.toJSON());
    //查询当前区块高度
    const blockNumber = await providerSepolia.getBlockNumber();
    console.log("blockNumber", blockNumber);
    //getTransactionCount() 查询某个钱包的历史交易次数
    const txCount = await providerSepolia.getTransactionCount(`vitalik.eth`);
    console.log("txCount", txCount);
    //getFeeData() 查询当前建议的 gas 设置，返回的数据格式为 bigint
    const feeData = await providerSepolia.getFeeData();
    console.log("feeData", feeData);
    //  getBlock() 查询区块信息，参数为要查询的区块高度
    const block = await providerSepolia.getBlock(0);
    console.log("block", block);
    //getCode() 查询某个地址的合约 bytecode，参数为合约地址，
    const code = await providerSepolia.getCode(
      "0xF73719be03bFC20617c7f846FbE0E64c9D195F9A"
    );
    console.log("code", code);
  } catch (error) {
    console.log("err", error);
  }
}
checkBalances();
