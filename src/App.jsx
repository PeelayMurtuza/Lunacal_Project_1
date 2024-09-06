import React from "react";
import Instructions from "./components/Instruction";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center">

      <div className="flex w-full max-w-6xl gap-4 p-4">

        <div className="w-1/3">
          <Instructions />
        </div>

        <div className="w-2/3 bg-[#292e33] p-6 rounded-lg">
          <Tabs />
          <Gallery />
        </div>

      </div>
    </div>
  );
};

export default App;