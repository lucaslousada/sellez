import { css } from 'styled-components';

export const content = css`
  z-index: 1;
  max-width: 445px;
  padding: 12px 16px;
  margin-top: 6px;
  background-color: ${({ theme }) => theme.colors.color_300};
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  border-radius: 5px;
`;

export const label = css`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.color_700};
`;

export const group = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 5px;
`;

export const buttonForFilters = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0 2px;
  padding: 6px 10px;
  background-color: ${({ theme }) => theme.colors.color_300};
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  border-radius: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.color_900};
  text-transform: lowercase;
  transition: box-shadow ${({ theme }) => theme.transitions.default},
    border-color ${({ theme }) => theme.transitions.default};

  svg {
    width: 17px;
    height: 17px;
    color: ${({ theme }) => theme.colors.color_900};
  }

  &:hover,
  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.main};
    border-color: ${({ theme }) => theme.colors.main};
  }
`;
