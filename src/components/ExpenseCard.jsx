function ExpenseCard({ category, amount, date }) {
  return (
    <div className="flex justify-between items-center bg-[#171726] rounded-xl p-4 hover:bg-[#222238] transition">
      <div>
        <h3 className="text-white font-semibold">{category}</h3>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>

      <h2 className="text-violet-400 font-bold text-xl">
        ₹{amount}
      </h2>
    </div>
  );
}

export default ExpenseCard;