import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { webAuth } from "../services";

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = await webAuth();
        setWeb3auth(web3auth);
        if (web3auth.provider) setProvider(web3auth.provider);
      } catch (err) {
        console.error(err);
      }
    };
    init();
  }, []);

  return (
    <Web3Context.Provider value={{ web3auth, provider, setProvider }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Context;

Web3Provider.propTypes = {
  children: PropTypes.node,
};
