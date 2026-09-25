/**
 * Formats a numeric price into realistic Pakistani Rupee (PKR) nomenclature
 * (Crore, Lakh, Thousand) or standard formatted number.
 */
export function formatPKR(amount: number, isRent = false): string {
  if (isRent) {
    if (amount >= 100000) {
      const lakh = amount / 100000;
      return `PKR ${lakh % 1 === 0 ? lakh : lakh.toFixed(1)} Lakh/mo`;
    }
    return `PKR ${amount.toLocaleString()}/mo`;
  }

  if (amount >= 10000000) {
    const crore = amount / 10000000;
    return `PKR ${crore % 1 === 0 ? crore : crore.toFixed(2)} Crore`;
  } else if (amount >= 100000) {
    const lakh = amount / 100000;
    return `PKR ${lakh % 1 === 0 ? lakh : lakh.toFixed(1)} Lakh`;
  }

  return `PKR ${amount.toLocaleString()}`;
}

export function formatNumberWithCommas(val: number): string {
  return new Intl.NumberFormat('en-PK').format(val);
}

/**
 * Monthly mortgage payment calculation in PKR
 */
export function calculateMortgagePayment(
  principalPrice: number,
  downPaymentPercent: number,
  interestRateAnnual: number,
  tenureYears: number
): {
  monthlyPayment: number;
  loanAmount: number;
  downPaymentAmount: number;
  totalInterest: number;
  totalRepayment: number;
} {
  const downPaymentAmount = (principalPrice * downPaymentPercent) / 100;
  const loanAmount = principalPrice - downPaymentAmount;
  const monthlyRate = interestRateAnnual / 100 / 12;
  const totalMonths = tenureYears * 12;

  if (monthlyRate === 0) {
    const monthlyPayment = loanAmount / totalMonths;
    return {
      monthlyPayment,
      loanAmount,
      downPaymentAmount,
      totalInterest: 0,
      totalRepayment: loanAmount,
    };
  }

  const monthlyPayment =
    (loanAmount *
      (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalRepayment = monthlyPayment * totalMonths;
  const totalInterest = totalRepayment - loanAmount;

  return {
    monthlyPayment: Math.round(monthlyPayment),
    loanAmount: Math.round(loanAmount),
    downPaymentAmount: Math.round(downPaymentAmount),
    totalInterest: Math.round(totalInterest),
    totalRepayment: Math.round(totalRepayment),
  };
}
