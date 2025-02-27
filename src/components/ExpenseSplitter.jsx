import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpenseSplitter = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("$");

  const addExpense = () => {
    if (!name || !amount) return;
    setExpenses([...expenses, { name, amount: parseFloat(amount) }]);
    setName("");
    setAmount("");
  };

  const resetExpenses = () => {
    setExpenses([]);
  };

  const totalAmount = expenses.reduce((acc, item) => acc + item.amount, 0);
  const perPerson = expenses.length > 0 ? totalAmount / expenses.length : 0;

  return (
    <div style={styles.container}>
      {/* Currency Selection Dropdown */}
      <div style={styles.currencyContainer}>
        <label style={styles.currencyLabel}>Currency: </label>
        <select
          style={styles.currencyDropdown}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="$">USD ($)</option>
          <option value="€">Euro (€)</option>
          <option value="₹">INR (₹)</option>
          <option value="£">GBP (£)</option>
        </select>
      </div>

      <button style={styles.backButton} onClick={() => navigate("/")}>
        ⬅ Back
      </button>
      <h1 style={styles.title}>Expense Splitter</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <button onClick={addExpense} style={styles.addButton}>
          Add
        </button>
        <button onClick={resetExpenses} style={styles.resetButton}>
          Reset
        </button>
      </div>

      <h2 style={styles.summaryTitle}>Summary</h2>

      {/* Table for Summary with Total Amount */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount ({currency})</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp, index) => (
            <tr key={index}>
              <td>{exp.name}</td>
              <td>{currency} {exp.amount.toFixed(2)}</td>
            </tr>
          ))}
          {/* Total Row */}
          <tr style={styles.totalRow}>
            <td><strong>Total</strong></td>
            <td><strong>{currency} {totalAmount.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>

      {/* Each Person's Share Displayed Separately */}
      <h3>Each should pay: {currency} {perPerson.toFixed(2)}</h3>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#1e1e1e",
    color: "yellow",
    padding: "20px",
  },
  currencyContainer: {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  currencyLabel: {
    fontSize: "1rem",
  },
  currencyDropdown: {
    padding: "5px",
    fontSize: "1rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
  },
  addButton: {
    padding: "10px",
    backgroundColor: "#50cac4",
    color: "green",
    cursor: "pointer",
  },
  resetButton: {
    padding: "10px",
    backgroundColor: "aqua",
    color: "teal",
    cursor: "pointer",
  },
  summaryTitle: {
    marginTop: "20px",
    fontSize: "1.5rem",
  },
  table: {
    width: "60%",
    borderCollapse: "collapse",
    margin: "20px 0",
    backgroundColor: "#333",
    color: "white",
  },
  totalRow: {
    backgroundColor: "#444",
  },
  backButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    backgroundColor: "white",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default ExpenseSplitter;
