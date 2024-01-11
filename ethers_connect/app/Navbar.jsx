'use client'
import Link from "next/link";
import React from "react"
import Connect from "@/app/components/connection/Connect"

const Navbar = (props) => {
  console.log(props)
  const handleClick = async () => {
    
   console.log(typeof props.Connect())
    
  };

  return (
    <>
    <nav className="flex justify-center p-2 bg-purple-700">
      <ul className="flex flex-wrap space-x-8 p-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Marketplace</Link>
        </li>
        <li>
          <Link href="/Nft">NFT</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <span />
        <li>
          <button
            onClick={handleClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Connect Wallet
          </button>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
