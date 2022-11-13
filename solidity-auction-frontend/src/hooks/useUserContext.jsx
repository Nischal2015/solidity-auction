import { useContext } from "react";
import { UserContext } from "../context";

export default function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useWeb3Context must be used within Web3Provider");
  }
  return context;
}
