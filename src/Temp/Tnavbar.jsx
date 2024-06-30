import { GiHamburgerMenu } from "react-icons/gi";

const Tnavbar = () => {
  return (
    <nav className="flex justify-between p-4 text-my-green font-mono">
      <div>Home</div>
      <div className="text-my-lightest-slate hover:text-my-green text-lg">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Tnavbar;
