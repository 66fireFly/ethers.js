import { ethers } from "ethers";
import "dotenv/config";
const oneGwei = ethers.getBigInt("1000000000"); // 从十进制字符串生成
console.log(oneGwei);
console.log(ethers.getBigInt("0x3b9aca00")); // 从hex字符串生成
console.log(ethers.getBigInt(1000000000)); // 从数字生成
// 不能从js最大的安全整数之外的数字生成BigNumber，下面代码会报错
// ethers.getBigInt(Number.MAX_SAFE_INTEGER);

const str = "hello";
const suoyin = str.indexOf("e");
console.log("suoyin", suoyin);
