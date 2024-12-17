'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { MusicScore } from '../data/interfaces'

interface CartItem extends MusicScore {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (score: MusicScore) => void
  removeFromCart: (scoreId: string) => void
  clearCart: () => void
  getCartTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addToCart = (score: MusicScore) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === score.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === score.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, { ...score, quantity: 1 }]
    })
  }

  const removeFromCart = (scoreId: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== scoreId))
  }

  const clearCart = () => {
    setItems([])
  }

  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

