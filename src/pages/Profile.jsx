import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <div className="flex min-h-screen bg-[#080812]">

      <Sidebar />

      <main className="flex-1 p-5 md:p-8">

        <h1 className="text-3xl font-bold text-white">
          Profile
        </h1>

        <div className="max-w-xl mt-8 bg-[#171726] border border-violet-500/10 rounded-2xl p-8">

          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center text-2xl font-bold mb-6">
            B
          </div>

          <label className="text-gray-500 text-sm">
            Name
          </label>

          <p className="text-white text-lg mb-5">
            User
          </p>

          <label className="text-gray-500 text-sm">
            Email
          </label>

          <p className="text-white text-lg">
            user@example.com
          </p>

        </div>

      </main>
    </div>
  );
}

export default Profile;