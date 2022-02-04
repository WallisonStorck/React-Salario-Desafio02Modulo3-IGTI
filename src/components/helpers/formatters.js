const brazilianCurrency = Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

function formatCurrency(data) {
  return brazilianCurrency.format(data);
}

export { formatCurrency };
