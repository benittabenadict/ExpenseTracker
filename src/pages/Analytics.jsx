import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function Analytics() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses(
      JSON.parse(localStorage.getItem("expenses")) || []
    );
  }, []);

  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const categories = {};

  expenses.forEach((expense) => {
    categories[expense.category] =
      (categories[expense.category] || 0) +
      Number(expense.amount);
  });

  return (
    <div className="flex min-h-screen bg-[#080812]">

      <Sidebar />

      <main className="flex-1 p-5 md:p-8">

        <h1 className="text-3xl font-bold text-white">
          Analytics
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Understand your spending habits.
        </p>

        <div className="bg-[#171726] border border-violet-500/10 rounded-2xl p-6">

          <p className="text-gray-500">
            Total Spending
          </p>

          <h2 className="text-4xl font-bold text-violet-400 mt-2">
            ₹{total.toFixed(2)}
          </h2>

        </div>

        <div className="bg-[#171726] border border-violet-500/10 rounded-2xl p-6 mt-6">

          <h2 className="text-xl font-semibold text-white mb-6">
            Spending by Category
          </h2>

          {Object.keys(categories).length === 0 ? (
            <p className="text-gray-500">
              Add expenses to see analytics.
            </p>
          ) : (
            <div className="space-y-5">

              {Object.entries(categories).map(
                ([category, amount]) => {

                  const percentage =
                    total > 0
                      ? (amount / total) * 100
                      : 0;

                  return (
                    <div key={category}>

                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">
                          {category}
                        </span>

                        <span className="text-violet-400">
                          ₹{amount.toFixed(2)}
                        </span>
                      </div>

                      <div className="h-3 bg-[#0b0b15] rounded-full">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-400"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>

                    </div>
                  );
                }
              )}

            </div>
          )}

        </div>

      </main>
    </div>
  );
}

export default Analytics;