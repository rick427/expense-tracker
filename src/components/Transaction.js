import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const Transaction = ({item}) => {
  const {deleteTransactions} = useContext(GlobalContext);
  const sign = item.amount < 0 ? '-' : '+';

    return (
        <li className={item.amount < 0 ? 'minus' : 'plus'}> 
          {item.text} <span>{sign}${Math.abs(item.amount)}</span>
          <button onClick={() => deleteTransactions(item.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction

