export const Button = ({ children, variant = "primary", ...props }) => {
  const base =
    "px-4 py-2 font-medium rounded-[10px] transition disabled:opacity-50";
  const styles = {
    primary:
      "px-5 py-1.5 [background-color:var(--primary)] text-white font-medium rounded-[10px] hover:opacity-90 transition cursor-pointer",
    secondary:
      "px-3 py-1.5 text-[color:var(--brand-text)] font-semibold border border-[color:var(--brand-text)] border-2 rounded-[10px] hover:bg-gray-300 transition cursor-pointer",
    tryForFree:
      "bg-black text-white px-8 py-4 rounded-[10px] font-semibold hover:bg-gray-800 transition-colors cursor-pointer",
    getStarted:
      "px-8 py-4 [background-color:var(--primary)] text-white font-semibold rounded-[10px] hover:bg-blue-600 transition-colors cursor-pointer",
  };

  return (
    <button {...props} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};
