import Students from "./components/Students";


function App() {
  return (
    <div className="bg-gray-200 flex justify-center items-center overflow-y-auto h-screen">
      <div className="bg-white shadow scroll-smooth w-full md:w-[52rem] lg:w-[70rem] h-[38rem] lg:h-[38rem] rounded-lg overflow-y-scroll">
        <Students />
      </div>
    </div>
  );
}

export default App;