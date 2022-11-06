import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";

const CLIENT_ID =
  "BAnTfhKg_so6gxT-CMzz55k3Kvl5P3kCrr_fX5a0ZOqq_qHhUIgKvuHcIK-8jMQy8h1iY6e8Sa8hYyNQqF6j1z8";

const webAuth = async () => {
  const web3auth = new Web3Auth({
    clientId: CLIENT_ID,
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0x5",
      rpcTarget:
        "https://eth-goerli.g.alchemy.com/v2/5BuTLyFk-8Jyo57oeSkgVKcGwEuyEki4",
    },
  });
  await web3auth.initModal();
  return web3auth;
};

export default webAuth;
