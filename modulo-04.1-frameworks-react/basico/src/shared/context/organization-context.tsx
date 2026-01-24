import React, { createContext, useContext, useState, ReactNode } from 'react'

interface OrganizationContextType {
  organization: string
  setOrganization: (org: string) => void
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(
  undefined
)

interface OrganizationProviderProps {
  children: ReactNode
}

export const OrganizationProvider: React.FC<OrganizationProviderProps> = ({
  children,
}) => {
  const [organization, setOrganization] = useState('lemoncode')

  return (
    <OrganizationContext.Provider value={{ organization, setOrganization }}>
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganization = () => {
  const context = useContext(OrganizationContext)
  if (context === undefined) {
    throw new Error(
      'useOrganization must be used within an OrganizationProvider'
    )
  }
  return context
}
