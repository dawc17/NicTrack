import "../index.css";

function Home() {
  return (
    <div className="flex-col items-center justify-center bg-red-400 min-h-screen pb-16">
      <h1 className="text-2xl font-bold text-white p-4">NicTrack - Home</h1>
      <div className="p-4">
        <p className="text-white">
          Welcome to NicTrack! Track your nicotine intake here.
        </p>
        <p className="text-white mt-2">
          Use the navigation bar below to explore different sections.
        </p>
      </div>
    </div>
  );
}

export default Home;
