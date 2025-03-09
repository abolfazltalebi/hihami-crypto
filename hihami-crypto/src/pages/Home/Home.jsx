import HeroSection from "./HeroSection/HeroSection";
import HowToWork from "./HowToWork/HowToWork";
import LiveActionNft from "./LiveActionNft/LiveActionNft";
import OurCollection from "./OurCollection/OurCollection";
import WalletSupport from "./WalletSupport/WalletSupport";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WalletSupport />
      <HowToWork />
      <OurCollection />
      <LiveActionNft/>
    </>
  );
}
