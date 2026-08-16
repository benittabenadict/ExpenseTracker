import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div className="flex min-h-screen bg-[#080812]">

      <Sidebar />

      <main className="flex-1 p-5 md:p-8">

        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <div className="max-w-xl mt-8 bg-[#171726] border border-violet-500/10 rounded-2xl p-6">

          <h2 className="text-xl text-white font-semibold">
            Monthly Budget
          </h2>

          <p className="text-gray-500 mt-2">
            Current dashboard budget: ₹20,000
          </p>

          <button className="mt-6 px-6 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition">
            Update Budget
          </button>

        </div>

      </main>
    </div>
  );
}

export default Settings;