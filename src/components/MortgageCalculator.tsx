import React, { useState } from 'react';
import { Calculator, ArrowRight, Check } from 'lucide-react';
import { calculateMortgagePayment, formatPKR } from '../utils/formatters';

interface MortgageCalculatorProps {
  initialPrice: number;
}

export const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ initialPrice }) => {
  const [price, setPrice] = useState(initialPrice || 50000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [interestRate, setInterestRate] = useState(16.5);
  const [tenureYears, setTenureYears] = useState(15);
  const [applied, setApplied] = useState(false);

  const result = calculateMortgagePayment(price, downPaymentPercent, interestRate, tenureYears);

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="w-5 h-5 text-amber-700" />
        <h3 className="text-xl font-bold text-neutral-950 font-display">
          Home Loan & Mortgage Calculator
        </h3>
      </div>
      <p className="text-xs text-neutral-500 mb-6">
        Estimate your monthly bank installments for verified residential properties across Pakistan (standard KIBOR + bank spread rates).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5 text-xs">
          <div>
            <div className="flex justify-between items-center mb-1 font-medium">
              <label className="text-neutral-700">Property Price (PKR)</label>
              <span className="font-mono text-neutral-950 font-bold">{formatPKR(price)}</span>
            </div>
            <input
              type="range"
              min={5000000}
              max={300000000}
              step={1000000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-900"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1 font-medium">
              <label className="text-neutral-700">Down Payment ({downPaymentPercent}%)</label>
              <span className="font-mono text-neutral-950 font-semibold">{formatPKR(result.downPaymentAmount)}</span>
            </div>
            <div className="flex gap-2">
              {[20, 25, 30, 40, 50].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setDownPaymentPercent(pct)}
                  className={`flex-1 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                    downPaymentPercent === pct
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between items-center mb-1 font-medium">
                <label className="text-neutral-700">Annual Profit / Rate</label>
                <span className="font-mono text-neutral-950 font-semibold">{interestRate}%</span>
              </div>
              <select
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
              >
                <option value={14.5}>14.5% (Islamic Home Finance)</option>
                <option value={16.5}>16.5% (Conventional Variable)</option>
                <option value={18.0}>18.0% (Fixed Rate)</option>
                <option value={20.0}>20.0% (Commercial Mortgages)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1 font-medium">
                <label className="text-neutral-700">Loan Tenure</label>
                <span className="font-mono text-neutral-950 font-semibold">{tenureYears} Years</span>
              </div>
              <select
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 bg-white"
              >
                <option value={5}>5 Years (60 Months)</option>
                <option value={10}>10 Years (120 Months)</option>
                <option value={15}>15 Years (180 Months)</option>
                <option value={20}>20 Years (240 Months)</option>
                <option value={25}>25 Years (300 Months)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Estimated Monthly Installment
            </span>
            <div className="text-3xl font-extrabold text-neutral-950 font-mono tabular-nums mt-1">
              PKR {result.monthlyPayment.toLocaleString()}
              <span className="text-xs font-normal text-neutral-500 ml-1">/month</span>
            </div>

            <div className="mt-5 space-y-2 text-xs border-t border-neutral-200 pt-4">
              <div className="flex justify-between">
                <span className="text-neutral-600">Financed Loan Amount:</span>
                <span className="font-mono font-semibold text-neutral-900">{formatPKR(result.loanAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Initial Down Payment:</span>
                <span className="font-mono font-semibold text-neutral-900">{formatPKR(result.downPaymentAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Total Interest over {tenureYears}y:</span>
                <span className="font-mono font-semibold text-neutral-900">{formatPKR(result.totalInterest)}</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            {!applied ? (
              <button
                type="button"
                onClick={() => setApplied(true)}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Pre-Approval Assistance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 py-2.5 px-4 rounded-xl">
                <Check className="w-4 h-4 shrink-0" />
                <span>Our banking desk will contact you with bank partner offers.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
