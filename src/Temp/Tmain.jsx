import React from "react";
import Thero from "./Thero";
import Tabout from "./Tabout";
import Tqualification from "./Tqualification";
import Tskills from "./Tskills";
import Twork from "./Twork";
import Tprojexts from "./Tprojexts";
import Tcontact from "./Tcontact";

const Tmain = () => {
  return (
    <div className="p-8">
      <Thero />
      <Tabout />
      <Tqualification />
      <Tskills />
      <Twork />
      <Tprojexts />
      <Tcontact />
    </div>
  );
};

export default Tmain;
