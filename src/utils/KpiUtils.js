import { sales, transactions, products } from "../mockData";

export const getRevenueByDate = (dateString) => {
  const dayData = sales.daily.find((d) => d.date === dateString);
  return dayData ? dayData.revenue : 0;
};

export const getTransactionsByDate = (dateString) => {
  return transactions.filter((t) =>
    t.date.toISOString().startsWith(dateString)
  ).length;
};

export const percentChange = (current, previous) => {
  if (previous === 0) return 100;
  return (((current - previous) / previous) * 100).toFixed(1);
};

export const countLowStock = () =>
  products.filter((p) => p.quantity <= 10 && p.quantity > 0).length;

export const countOutOfStock = () =>
  products.filter((p) => p.quantity === 0).length;
