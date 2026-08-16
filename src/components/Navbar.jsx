function Navbar() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <p className="text-gray-500 text-sm">
          Personal Finance
        </p>
        <h2 className="text-xl font-semibold text-white">
          Expense Overview
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center font-bold">
          B
        </div>

        <div className="hidden sm:block">
          <p className="text-white text-sm font-medium">
            User
          </p>
          <p className="text-gray-500 text-xs">
            Personal Account
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;