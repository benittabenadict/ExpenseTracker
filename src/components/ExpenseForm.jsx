import { useState } from "react";
import { addExpense } from "../services/api";

function ExpenseForm() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !category || !description || !date) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      await addExpense({
        amount: Number(amount),
        category,
        description,
        date,
      });

      setAmount("");
      setCategory("");
      setDescription("");
      setDate("");

      window.dispatchEvent(new Event("expensesUpdated"));

      alert("Expense added successfully!");
    } catch (error) {
      console.error("Failed to add expense:", error);
      alert("Failed to add expense.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#171726] border border-violet-500/10 rounded-2xl p-6 shadow-xl">

      <h2 className="text-xl font-semibold text-white mb-6">
        Add Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount ₹"
          className="w-full px-4 py-3 rounded-xl bg-[#0b0b15] border border-violet-500/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[#0b0b15] border border-violet-500/20 text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
          <option value="">Select Category</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Education</option>
          <option>Entertainment</option>
          <option>Bills</option>
          <option>Other</option>
        </select>

        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full px-4 py-3 rounded-xl bg-[#0b0b15] border border-violet-500/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[#0b0b15] border border-violet-500/20 text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold hover:scale-[1.02] transition disabled:opacity-50"
        >
          {loading ? "Adding..." : "+ Add Expense"}
        </button>

      </form>
    </div>
  );
}

export default ExpenseForm;