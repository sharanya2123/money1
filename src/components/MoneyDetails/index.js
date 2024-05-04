// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <>
      <div className="money-details-container">
        <div className="balance-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="details-img"
          />
        </div>
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="increase-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
      </div>
      <p className="details-text">Your Income</p>
      <p className="details-money" data-testid="incomeAmount">
        Rs {incomeAmount}
      </p>
      <div className="expensivr-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
      </div>
      <p className="details-text">Your Expenses</p>
      <p className="details-money" data-testid="expensesAmount">
        Rs {expensesAmount}
      </p>
    </>
  )
}

export default MoneyDetails
