import { useState } from 'react'
import { useTheme } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ReactComponent as LogoImg } from '../../assets/logo.svg'

import {
  CaretDoubleLeft,
  ChartLineUp,
  Database,
  File,
  Package,
} from 'phosphor-react'

import {
  TabsTrigger,
  TabsRoot,
  TabsContent,
  TabsList,
  ContainerTabsContent,
  MinimizeMenuButton,
  Header,
  LinkList,
  ListItem,
  Logo,
} from './styles'

interface linkIsActiveProps {
  isActive: boolean
}

type valuesTypesInMenuGroups = keyof typeof valuesInMenuGroups

interface LinkIsActiveResult {
  color: string
  backgroundColor: string
}

const valuesInMenuGroups = {
  dashboard: 'Painel de Controle',
  records: 'Cadastros',
  none: 'Exibição desativada',
}

export function Menu(): JSX.Element {
  const [selectedMenuGroup, setSelectedMenuGroup] =
    useState<valuesTypesInMenuGroups>('records')

  const { colors } = useTheme()

  function linkIsActive({ isActive }: linkIsActiveProps): LinkIsActiveResult {
    return {
      color: isActive ? colors.color_900 : '',
      backgroundColor: isActive ? colors.transparent_color_200 : '',
    }
  }

  function closeTab(): void {
    setSelectedMenuGroup('none')
  }

  return (
    <TabsRoot
      value={selectedMenuGroup}
      onValueChange={setSelectedMenuGroup as (value: string) => void}
      orientation="vertical"
      activationMode="manual"
    >
      <TabsList>
        <Logo>
          <LogoImg />
        </Logo>
        <TabsTrigger value="dashboard">
          <ChartLineUp />
        </TabsTrigger>
        <TabsTrigger value="records">
          <Database />
        </TabsTrigger>
      </TabsList>

      <ContainerTabsContent isTheTabVisible={selectedMenuGroup}>
        <Header>
          <h2>{valuesInMenuGroups[selectedMenuGroup]}</h2>
          <MinimizeMenuButton type="button" onClick={closeTab}>
            <CaretDoubleLeft weight="bold" alt="Fechar menu" />
          </MinimizeMenuButton>
        </Header>
        <TabsContent value="dashboard">
          <nav>
            <LinkList>
              <ListItem>
                <NavLink to="/" style={linkIsActive}>
                  <File />
                  <p>Em breve</p>
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/" style={linkIsActive}>
                  <File />
                  <p>Em breve</p>
                </NavLink>
              </ListItem>
            </LinkList>
          </nav>
        </TabsContent>

        <TabsContent value="records">
          <nav>
            <LinkList>
              <ListItem>
                <NavLink to="/produtos" style={linkIsActive}>
                  <Package />
                  <p>Produtos</p>
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/" style={linkIsActive}>
                  <File />
                  <p>Em breve</p>
                </NavLink>
              </ListItem>
            </LinkList>
          </nav>
        </TabsContent>
      </ContainerTabsContent>
    </TabsRoot>
  )
}
