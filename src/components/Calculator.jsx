import { useState } from 'react'

export default function Calculator({ title, description, children, onCalculate }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 text-lg mb-8">{description}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
