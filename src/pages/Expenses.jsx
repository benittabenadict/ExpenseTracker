import Sidebar from "../components/Sidebar";
import ExpenseList from "../components/ExpenseList";

function Expenses() {
  return (
    <div className="flex min-h-screen bg-[#080812]">

      <Sidebar />

      <main className="flex-1 p-5 md:p-8">

        <h1 className="text-3xl font-bold text-white">
          Expenses
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Manage all your expenses.
        </p>

        <ExpenseList />

      </main>
    </div>
  );
}

export default Expenses;