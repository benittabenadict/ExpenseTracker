function SummaryCard({ title, value, icon }) {
  return (
    <div className="bg-[#171726] border border-violet-500/10 rounded-2xl p-6 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300">

      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <span className="w-9 h-9 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center">
          {icon}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-white mt-4">
        {value}
      </h2>
    </div>
  );
}

export default SummaryCard;