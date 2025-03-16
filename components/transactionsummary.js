import React from 'react';

const TransactionSummary = ({ transaction }) => {
  return (
    <div className="transaction-summary">
      <h3>Transaction Summary</h3>
      <p><strong>Product:</strong> {transaction.product.title}</p>
      <p><strong>Amount:</strong> {transaction.amount} ETH</p>
      <p><strong>Status:</strong> {transaction.status}</p>
      <p><strong>Commission:</strong> {transaction.site_commission} ETH</p>
      <p><strong>Net Amount:</strong> {transaction.net_amount} ETH</p>
      <p><strong>Payment Method:</strong> {transaction.payment_method}</p>
      <p><strong>Date:</strong> {new Date(transaction.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default TransactionSummary;
