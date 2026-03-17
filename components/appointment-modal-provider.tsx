'use client'

import * as React from 'react'

type AppointmentModalContextValue = {
  open: boolean
  openModal: () => void
  closeModal: () => void
}

const AppointmentModalContext = React.createContext<AppointmentModalContextValue | null>(null)

export function AppointmentModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  const value = React.useMemo(
    () => ({
      open,
      openModal: () => setOpen(true),
      closeModal: () => setOpen(false),
    }),
    [open],
  )

  return (
    <AppointmentModalContext.Provider value={value}>
      {children}
    </AppointmentModalContext.Provider>
  )
}

export function useAppointmentModal() {
  const ctx = React.useContext(AppointmentModalContext)
  if (!ctx) {
    throw new Error('useAppointmentModal must be used within an AppointmentModalProvider')
  }
  return ctx
}
