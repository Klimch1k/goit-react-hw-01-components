import propTypes from 'prop-types';
import {
  TransactionsHistoryTable,
  TransactionsHistoryTableHeader,
  TransactionsHistorySection,
  TransactionsHistoryTitle,
  TransactionsHistoryBox,
} from './TransactionHistory.styled';
  
const TransactionsHistory = ({ transactions }) => {
  return (
    <TransactionsHistoryTable>
      <TransactionsHistoryTableHeader>
        <TransactionsHistorySection>
          <TransactionsHistoryTitle>Type</TransactionsHistoryTitle>
          <TransactionsHistoryTitle>Amount</TransactionsHistoryTitle>
          <TransactionsHistoryTitle>Currency</TransactionsHistoryTitle>
        </TransactionsHistorySection>
      </TransactionsHistoryTableHeader>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionsHistorySection key={id}>
            <TransactionsHistoryBox>{type}</TransactionsHistoryBox>
            <TransactionsHistoryBox>{amount}</TransactionsHistoryBox>
            <TransactionsHistoryBox>{currency}</TransactionsHistoryBox>
          </TransactionsHistorySection>
        ))}
      </tbody>
    </TransactionsHistoryTable>
  );
};

TransactionsHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    })
  ),
};

export default TransactionsHistory;

