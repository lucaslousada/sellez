import { useState } from 'react';
import { useTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Content as TabsContent } from '@radix-ui/react-tabs';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

import {
  CaretDoubleLeft,
  ChartLineUp,
  Database,
  File,
  Package,
} from 'phosphor-react';

import {
  TabsTrigger,
  TabsRoot,
  TabsList,
  ContainerTabsContent,
  MinimizeMenuButton,
  Header,
  LinkList,
  ListItem,
  Logo,
} from './styles';

interface linkIsActiveProps {
  isActive: boolean;
}

type valuesTypesInMenuGroups = keyof typeof valuesInMenuGroups;

const valuesInMenuGroups = {
  dashboard: 'Painel de Controle',
  records: 'Cadastros',
  displayOff: '',
};

export function Menu() {
  const [whichTabIsOpen, setWhichTabIsOpen] =
    useState<valuesTypesInMenuGroups>('records');

  const { colors } = useTheme();

  function linkIsActive({ isActive }: linkIsActiveProps) {
    return {
      color: isActive ? colors.color_900 : '',
      backgroundColor: isActive ? colors.transparent_color_200 : '',
    };
  }

  function closeTab() {
    setWhichTabIsOpen('displayOff');
  }

  return (
    <TabsRoot
      value={whichTabIsOpen}
      onValueChange={setWhichTabIsOpen as (value: string) => void}
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

      <ContainerTabsContent isTheTabVisible={whichTabIsOpen}>
        <Header>
          <h2>{valuesInMenuGroups[whichTabIsOpen]}</h2>
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
  );
}
