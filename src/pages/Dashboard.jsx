import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { getExpenses } from "../services/api";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    try {
      const data = await getExpenses();

      // Django REST Framework normally returns an array.
      // This also handles paginated responses if enabled.
      setExpenses(Array.isArray(data) ? data : data.results || []);
    } catch (error) {
      console.error("Failed to load expenses:", error);
    }
  };

  useEffect(() => {
    loadExpenses();

    window.addEventListener("expensesUpdated", loadExpenses);

    return () => {
      window.removeEventListener("expensesUpdated", loadExpenses);
    };
  }, []);

  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyTotal = expenses
    .filter((expense) => {
      const date = new Date(expense.date);

      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    })
    .reduce(
      (sum, expense) => sum + Number(expense.amount),
      0
    );

  const budget = 20000;

  const budgetLeft = Math.max(
    budget - monthlyTotal,
    0
  );

  return (
    <div className="flex min-h-screen bg-[#080812]">

      <Sidebar />

      <main className="flex-1 p-5 md:p-8 overflow-y-auto">

        <Navbar />

        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Here's your financial overview.
          </p>
        </section>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          <SummaryCard
            title="Total Expense"
            value={`₹${total.toFixed(2)}`}
            icon="₹"
          />

          <SummaryCard
            title="This Month"
            value={`₹${monthlyTotal.toFixed(2)}`}
            icon="◉"
          />

          <SummaryCard
            title="Budget Left"
            value={`₹${budgetLeft.toFixed(2)}`}
            icon="✓"
          />

          <SummaryCard
            title="Transactions"
            value={expenses.length}
            icon="≡"
          />

        </div>

        {/* Form + Transactions */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

          <ExpenseForm />

          <ExpenseList />

        </div>

      </main>
    </div>
  );
}

export default Dashboard;