import { CiWallet } from "react-icons/ci";
import { BsCollection } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";
import { MdOutlinePoll } from "react-icons/md";
import HowToWorkCard from "../../../assets/Components/HowToWorkCard";

export default function HowToWorkItems() {
  const HowToItem = [
    { id: 1, name: "Set up your wallet", icon: CiWallet },
    { id: 2, name: "Create your collection", icon: BsCollection },
    { id: 3, name: "Add your NFTs", icon: BiBookAdd },
    { id: 4, name: "List them for sale", icon: MdOutlinePoll },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {HowToItem.map((Hitem) => {
        return <HowToWorkCard key={Hitem.id} {...Hitem} />;
      })}
    </div>
  );
}
