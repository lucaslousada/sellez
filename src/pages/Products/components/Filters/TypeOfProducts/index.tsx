import { type ReactNode, useState } from 'react'

import { TabsRoot, TabsList, TabsTrigger, TabsContent } from './styles'

interface TypeOfProductsProps {
  children: ReactNode
}

type TypesOfProducts = 'all' | 'simple'

export function TypeOfProducts({ children }: TypeOfProductsProps): JSX.Element {
  const [activeProductTypeFilter, setActiveProductTypeFilter] =
    useState<TypesOfProducts>('all')

  return (
    <TabsRoot
      value={activeProductTypeFilter}
      onValueChange={setActiveProductTypeFilter as (value: string) => void}
      activationMode="manual"
    >
      <TabsList>
        <TabsTrigger value="all">
          todos <p>127</p>
        </TabsTrigger>
        <TabsTrigger value="simple">
          simples <p>110</p>
        </TabsTrigger>
      </TabsList>
      <TabsContent value={activeProductTypeFilter}>{children}</TabsContent>
    </TabsRoot>
  )
}
