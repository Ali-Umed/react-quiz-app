import React from 'react'

export default function Coins() {
    
  const MoneyList=[
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1.000" },
    { id: 6, amount: "$ 2.000" },
    { id: 7, amount: "$ 4.000" },
    { id: 8, amount: "$ 8.000" },
    { id: 9, amount: "$ 16.000" },
    { id: 10, amount: "$ 32.000" },
    { id: 11, amount: "$ 64.000" },
    { id: 12, amount: "$ 125.000" },
    { id: 13, amount: "$ 250.000" },
    { id: 14, amount: "$ 500.000" },
    { id: 15, amount: "$ 1.000.000" },
  ].reverse();
  return (
    <div className="coins">
    <ul className='ml-10 mt-14 '>
      {MoneyList.map((money) => (
        <li key={money.id} className="liTags flex items-center justify-between py-2 w-60">
          <span className="text-white">{money.id}</span>
          <span className="text-white">{money.amount}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}
