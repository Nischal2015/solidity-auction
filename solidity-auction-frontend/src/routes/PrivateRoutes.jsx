import { Outlet } from "react-router-dom";
import { useWeb3Context } from "../hooks";

export const PrivateRoutes = () => {
  const { provider: auth } = useWeb3Context();

  return auth ? <Outlet /> : <>Ram</>;
};
