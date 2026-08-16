import { useEffect, useState } from "react";
import { getExpenses, deleteExpense } from "../services/api";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const loadExpenses = async () => {
    try {
      const data = await getExpenses();

      setExpenses(
        Array.isArray(data) ? data : data.results || []
      );
    } catch (error) {
      console.error("Failed to load expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);

      await deleteExpense(id);

      await loadExpenses();

      window.dispatchEvent(new Event("expensesUpdated"));
    } catch (error) {
      console.error("Failed to delete expense:", error);
      alert("Failed to delete expense.");
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    loadExpenses();

    window.addEventListener("expensesUpdated", loadExpenses);

    return () => {
      window.removeEventListener(
        "expensesUpdated",
        loadExpenses
      );
    };
  }, []);

  if (loading) {
    return (
      <div className="bg-[#171726] border border-violet-500/10 rounded-2xl p-6">
        <p className="text-gray-500">
          Loading transactions...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#171726] border border-violet-500/10 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-white">
          Recent Transactions
        </h2>

        <span className="text-violet-400 text-sm">
          {expenses.length} transactions
        </span>
      </div>

      {expenses.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No expenses added yet.
        </p>
      ) : (
        <div className="space-y-3">

          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex justify-between items-center gap-4 bg-[#0b0b15] rounded-xl p-4"
            >

              <div className="min-w-0">
                <p className="text-white font-medium truncate">
                  {expense.description}
                </p>

                <p className="text-gray-500 text-sm">
                  {expense.category} • {expense.date}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">

                <span className="text-violet-400 font-semibold">
                  ₹{Number(expense.amount).toFixed(2)}
                </span>

                <button
                  type="button"
                  onClick={() => handleDelete(expense.id)}
                  disabled={deletingId === expense.id}
                  className="text-red-400 hover:text-red-300 text-sm transition disabled:opacity-50"
                >
                  {deletingId === expense.id
                    ? "Deleting..."
                    : "Delete"}
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default ExpenseList;