import Transactions from "../components/Transactions/Transactions";

const TransactionDetails = () => {
  return (
    <>
      <div className="form-group radio">
        <label>Type</label>
        <div className="radio_group">
          <input
            required
            type="radio"
            value="all"
            name="type"
          // checked={type === "income"}
          // onChange={(e) => setType("income")}
          />
          <label>All</label>
        </div>
        <div className="radio_group">
          <input
            required
            type="radio"
            value="income"
            name="type"
          // checked={type === "income"}
          // onChange={(e) => setType("income")}
          />
          <label>Income</label>
        </div>
        <div className="radio_group">
          <input
            type="radio"
            value="expense"
            name="type"
            placeholder="Expense"
          // checked={type === "expense"}
          // onChange={(e) => setType("expense")}
          />
          <label>Expense</label>
        </div>
      </div>
      <Transactions />
    </>
  )
}

export default TransactionDetails;