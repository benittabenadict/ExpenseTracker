function InputField({ type, placeholder, icon }) {
  return (
    <div className="relative mb-5">

      <div className="absolute left-4 top-4 text-violet-400">
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#181828] border border-violet-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
      />

    </div>
  );
}

export default InputField;