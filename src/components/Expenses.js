import ExpenseItem from "./expenses/ExpenseItem";

const Expenses = (props) =>
  props.expenseArr.map((item) => (
    <ExpenseItem
      title={item.title}
      amount={item.amount}
      date={item.date}
      key={item.id}
    />
  ));

export default Expenses;
