import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: "5BuTLyFk-8Jyo57oeSkgVKcGwEuyEki4",
  network: Network.ETH_GOERLI,
};

export default new Alchemy(settings);
