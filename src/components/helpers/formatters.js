const brazilianCurrency = Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

function formatCurrency(value) {
  return brazilianCurrency.format(value);
}

function formatPercent(value) {
  return `${value.toFixed(2).replace(".", ",")}%`;
}

export { formatCurrency, formatPercent };
