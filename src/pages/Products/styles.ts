import styled from 'styled-components';
import { List, Trigger, Content } from '@radix-ui/react-tabs';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  width: 100%;
  padding: 40px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.color_900};
  }
`;

export const TabsList = styled(List)`
  display: flex;
  gap: 0 16px;
  margin-top: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
`;

export const TabsTrigger = styled(Trigger)`
  position: relative;
  padding: 10px 20px;
  background-color: transparent;
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.color_800};
  border: none;

  &[data-state='active'] {
    color: ${({ theme }) => theme.colors.color_900};

    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      right: 0;
      left: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.color_900};
    }
  }
`;

export const TabsContent = styled(Content)`
  padding-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  text-align: left;

  th {
    padding: 17.5px 0;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.color_800};
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.transparent_color_100};
  }

  td {
    padding: 16.5px 0;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.color_900};
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.transparent_color_100};
  }

  tr td:first-of-type,
  tr th:first-of-type {
    padding-left: 20px;
  }

  tr td:last-of-type,
  tr th:last-of-type {
    padding-right: 20px;
  }

  tr:last-of-type td {
    border: none;
  }
`;
