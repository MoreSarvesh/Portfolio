import Main from "./components/Main";
import Navbar from "./components/Navbar";

//temp compo
import Tmain from "./Temp/Tmain";
import Tnavbar from "./Temp/Tnavbar";

function App() {
  return (
    <div className="bg-my-navy">
      <Navbar />
      <Main />
      {/*       <Tnavbar />
      <Tmain /> */}
    </div>
  );
}

export default App;
