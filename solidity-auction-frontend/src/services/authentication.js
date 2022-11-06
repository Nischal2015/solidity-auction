import { useWeb3Context } from "../hooks";

export default function authentication() {
  const { web3auth, setProvider } = useWeb3Context();

  const isWeb3AuthPresent = () => {
    if (!web3auth) return;
    return true;
  };

  return {
    async login() {
      if (!isWeb3AuthPresent()) return;
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
    },

    async getUserInfo() {
      if (!isWeb3AuthPresent()) return;
      return await web3auth.getUserInfo();
    },

    async logout(callback) {
      if (!isWeb3AuthPresent()) return;
      await web3auth.logout();
      setProvider(null);
      callback();
    },
  };
}
