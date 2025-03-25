import {
    MagnGlassIcon
  } from "../icons/Icon";
  
  function Searcher() {
    return (
      <>
        <div className="fixed top-0 left-0 mt-32 lg:mt-20">
          <div className="flex justify-center min-w-screen">
            <div className="w-full max-w-4xl px-4 relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="bg-gray-200 text-black rounded-full p-4 pl-12 pr-4 w-full text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black">
                <MagnGlassIcon />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
export default Searcher;
