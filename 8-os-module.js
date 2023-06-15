//OS module

const os = require("os");
const user = os.userInfo();
console.log("current userInfo", user);
//method returns system uptime secs

console.log(`system is up from ${os.uptime()}`);

const systemSpecification = {
  osType: os.type(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log("about system", systemSpecification);
