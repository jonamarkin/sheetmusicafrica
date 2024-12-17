'use client'

import React, { createContext, useContext } from 'react'
import { DataProvider } from './interfaces'
import { MockProvider } from './mock-provider'

const DataContext = createContext<DataProvider | null>(null)

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

export const DataProviderComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dataProvider = new MockProvider()

  return (
    <DataContext.Provider value={dataProvider}>
      {children}
    </DataContext.Provider>
  )
}

