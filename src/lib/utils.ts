import { type ClassValue,clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function currencyFormat(value: number) {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}
