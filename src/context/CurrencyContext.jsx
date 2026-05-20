/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'

const CURRENCIES = {
  USD: { label: 'USD', symbol: '$', code: 'USD', rate: 1 },
  INR: { label: 'INR', symbol: '₹', code: 'INR', rate: 83 },
  PKR: { label: 'PKR', symbol: '₨', code: 'PKR', rate: 278 },
}

const CurrencyContext = createContext(null)

const toNumber = (value) => (value === null || value === undefined || value === '' ? 0 : Number(value))

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(() => {
    const storedCurrency = window.localStorage.getItem('ecomcalc-currency')
    return storedCurrency && CURRENCIES[storedCurrency] ? storedCurrency : 'USD'
  })

  useEffect(() => {
    window.localStorage.setItem('ecomcalc-currency', currency)
  }, [currency])

  const convertFromUsd = (amountUsd, targetCurrency = currency) => toNumber(amountUsd) * CURRENCIES[targetCurrency].rate
  const convertToUsd = (amount, sourceCurrency = currency) => toNumber(amount) / CURRENCIES[sourceCurrency].rate

  const formatCurrency = (amountUsd, targetCurrency = currency) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: CURRENCIES[targetCurrency].code,
      maximumFractionDigits: 2,
    }).format(convertFromUsd(amountUsd, targetCurrency))

  const formatInputValue = (amountUsd, targetCurrency = currency) => {
    if (amountUsd === null || amountUsd === undefined || amountUsd === '') {
      return ''
    }

    return Number(convertFromUsd(amountUsd, targetCurrency).toFixed(2))
  }

  const parseCurrencyInput = (value, sourceCurrency = currency) => {
    if (value === '' || value === null || value === undefined) {
      return null
    }

    const parsed = Number(value)
    return Number.isNaN(parsed) ? null : convertToUsd(parsed, sourceCurrency)
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        currencies: CURRENCIES,
        convertFromUsd,
        convertToUsd,
        formatCurrency,
        formatInputValue,
        parseCurrencyInput,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)

  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }

  return context
}