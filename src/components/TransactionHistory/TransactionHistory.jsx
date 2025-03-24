import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
          <thead>
            <tr>
              <th className={css.tableTh}>Type</th>
              <th className={css.tableTh}>Amount</th>
              <th className={css.tableTh}>Currencyy</th>
            </tr>
          </thead>
        
      <tbody className={css.tbody}>          
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.tbodyTd}>{item.type}</td>
            <td className={css.tbodyTd}>{item.amount}</td>
            <td className={css.tbodyTd}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
        </table>

    );
};

export default TransactionHistory;