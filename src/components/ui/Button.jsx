export const Button = ({ children, variant = "primary", ...props }) => {
  const base =
    "px-4 py-2 font-medium rounded-[10px] transition disabled:opacity-50";
  const styles = {
    primary:
      "px-5 py-1.5 [background-color:var(--primary)] text-white font-medium rounded-[10px] hover:opacity-90 transition",
    secondary:
      "px-3 py-1.5 text-[color:var(--brand-text)] font-semibold border border-[color:var(--brand-text)] border-2 rounded-[10px] hover:bg-gray-300 transition",
    danger:
      "px-4 py-2 bg-red-600 text-white rounded-[10px] hover:bg-red-700 transition",
    ghost:
      "px-4 py-2 bg-transparent text-[color:var(--brand-text)] rounded-[10px] hover:bg-gray-100 transition",
  };

  return (
    <button {...props} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};
