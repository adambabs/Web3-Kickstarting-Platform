import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xc86041aEa8Db625ADB85C2253CA93c94B4374deF"
);

export default instance;
