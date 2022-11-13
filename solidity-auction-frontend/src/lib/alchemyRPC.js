import { alchemy } from "../services";

export default class EthereumRPC {
  constructor() {}

  async #provider() {
    return await alchemy.config.getProvider();
  }

  async getChainId() {
    try {
      const networkDetails = await alchemy.core.getNetwork();
      return networkDetails.chainId;
    } catch (err) {
      return err;
    }
  }

  async getAccounts() {
    try {
      const provider = await this.#provider();
      const signer = provider.getSigner();

      return await signer.getAddress();
    } catch (error) {
      return error;
    }
  }

  async getBalance() {
    try {
      return await alchemy.core.getBalance(await this.getAccounts());
    } catch (err) {
      return err;
    }
  }

  async sendTransaction() {
    try {
      return await alchemy.transact.sendTransaction("0.001");
    } catch (error) {
      return error;
    }
  }

  async signMessage() {
    try {
      const provider = await alchemy.config.getProvider();
      const signer = provider.getSigner();

      const originalMessage = "Signing the blockchain";

      return await signer.signMessage(originalMessage);
    } catch (error) {
      return error;
    }
  }
}
