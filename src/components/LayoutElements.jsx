export const Section = ({ children, color = "indigo" }) => (
  <section
    className={`bg-${color}-100 p-3 border-2 border-${color}-500 border-dashed text-${color}-700 rounded-2xl shadow-xl`}
  >
    {children}
  </section>
);

export const BudgetSection = ({ children, color }) => (
  <section
    className={`bg-${color}-50 border-2 border-${color}-600 px-4 py-2 rounded-md shadow-lg`}
  >
    {children}
  </section>
);
