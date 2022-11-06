import { useContext } from "react";
import { Web3Context } from "../context";

export default function useWeb3Context() {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error("useWeb3Context must be used within Web3Provider");
  }
  return context;
}
