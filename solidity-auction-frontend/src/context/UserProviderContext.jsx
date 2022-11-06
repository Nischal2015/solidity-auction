import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { authentication } from "../services";
import { useWeb3Context } from "../hooks";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { provider } = useWeb3Context();
  const { getUserInfo } = authentication();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userInfo = await getUserInfo();
        if (userInfo) {
          const { email, name, profileImage } = userInfo;
          setUser({ email, name, profileImage });
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [provider]);

  return (
    <UserContext.Provider value={{ setUser, ...user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

UserProvider.propTypes = {
  children: PropTypes.node,
};
