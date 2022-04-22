import ExpenseItem from "./expenses/ExpenseItem";
import "./expenses/Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
      {props.expenseArr.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Expenses;
