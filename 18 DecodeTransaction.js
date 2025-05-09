import { ethers } from "ethers";
import "dotenv/config";
//1 监听交易时候推荐用 wss 连接而不是 http
const provider = new ethers.WebSocketProvider(process.env.SEPOLIA_RPC_WSSURL);
let network = provider.getNetwork();
network.then((res) =>
  console.log(
    `[${new Date().toLocaleTimeString()}] 连接到 chain ID ${res.chainId}`
  )
);
//2创建 Interface 对象，用于解码交易详情⭐
const iface = new ethers.Interface([
  "function transfer(address, uint) public returns (bool)",
]);
//3 获取函数选择器⭐
const selector = iface.getFunction("transfer").selector;
console.log(`函数选择器是${selector}`);
//4 监听 pending 的 ERC20 转账交易，获取交易详情并解码：

function handleBigInt(key, value) {
  if (typeof value === "bigint") {
    return value.toString() + "n";
  }
}

provider.on("pending", async (txHash) => {
  let j = 0;
  if (txHash) {
    const tx = await provider.getTransaction(txHash);

    j++;

    if (tx !== null && tx.data.indexOf(selector) !== -1) {
      console.log(
        `[${new Date().toLocaleTimeString()}]监听到第${
          j + 1
        }个pending交易:${txHash}`
      );
      console.log(
        `打印解码交易详情:${JSON.stringify(
          iface.parseTransaction(tx),
          handleBigInt,
          2
        )}`
      );
      console.log(`转账目标地址:${iface.parseTransaction(tx).args[0]}`);
      console.log(
        `转账金额:${ethers.formatEther(iface.parseTransaction(tx).args[1])}`
      );
      provider.removeListener("pending", this);
    }
  }
});
