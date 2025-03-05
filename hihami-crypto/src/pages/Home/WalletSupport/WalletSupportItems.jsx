import React from "react";
import metamask from "@/assets/images/icons/Metamask.svg";
import Binance from "@/assets/images/icons/Binance.svg";
import TrustWallet from "@/assets/images/icons/Trust-wallet.svg";
import Alpha from "@/assets/images/icons/Alpha.svg";
import CoinGecko from "@/assets/images/icons/CoinGecko.svg";
import WalletItemsCard from "../../../assets/Components/WalletItemsCard";

export default function WalletSupportItems() {
  const WalletSupportItems = [
    { id: 1, name: "MetaMask", img: metamask },
    { id: 2, name: "Binance", img: Binance },
    { id: 3, name: "Trust Wallet", img: TrustWallet },
    { id: 4, name: "Alpha", img: Alpha },
    { id: 5, name: "CoinGecko", img: CoinGecko },
    { id: 6, name: "CoinGecko", img: CoinGecko },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 items-center justify-center">
      {WalletSupportItems.map((Witem) => (
        <WalletItemsCard key={Witem.id} {...Witem} />
      ))}
    </div>
  );
}
