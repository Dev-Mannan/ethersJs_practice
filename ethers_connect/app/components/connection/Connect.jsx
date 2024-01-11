'use client'
import { useState } from "react";
function Connect(props) {
const [walletAddress, setWalletAddress] = useState("");
  async function requestAccount(props) {

    console.log("Requesting account...");
  
    if(window.ethereum){
      console.log("Metamask detected");
  
        try{
          await window.ethereum.request({method:"eth_requestAccounts"}); 
          const accounts = await window.ethereum.request({method:"eth_requestAccounts"});
          setWalletAddress(accounts[0]); 
          if(setWalletAddress==walletAddress){
            console.log("disconnected");
          }
          console.log("Accounts: ", accounts);
        }catch(err){
          console.error(err);
        }
  
    }
  
  }
 
}
export default Connect