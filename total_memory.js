const os=require("os");
const totalMemory=os.totalmem();
console.log(`${totalMemory /1024/1024/1024}`);