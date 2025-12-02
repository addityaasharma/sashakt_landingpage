export const JoinAndWin = () => {
  const openGroup = () =>
    window.open("https://chat.whatsapp.com/DtxEVnuARCy4bAXCxkUw66", "_blank", "noopener,noreferrer");

  return (
    <section className="mt-12 max-w-7xl mx-auto px-6 bg-gradient-to-r from-green-50 to-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold">🎉 Join & Win!</h3>
        <p className="text-sm text-gray-700 mt-1">
          Join 3 or more groups this week & stand a chance to win ₹500 shopping credits!
        </p>
      </div>
      <button
        onClick={openGroup}
        className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700"
      >
        Join Groups Now
      </button>
    </section>
  );
};

export const LimitedTimeBanner = () => {
  const openGroup = () =>
    window.open("https://chat.whatsapp.com/DtxEVnuARCy4bAXCxkUw66", "_blank", "noopener,noreferrer");

  return (
    <div className="hidden sm:flex fixed top-16 left-1/2 transform -translate-x-1/2 z-50 
                bg-yellow-100 border border-yellow-300 px-6 py-3 rounded-full shadow-lg 
                items-center gap-4 animate-bounce">
      <span className="text-xl">⚡</span>
      <div className="text-sm font-medium">
        Limited Time: Get 20% off your first order – Join “Hot Picks” now!
      </div>
      <button
        onClick={openGroup}
        className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700"
      >
        Join Hot Picks
      </button>
    </div>

  );
};

