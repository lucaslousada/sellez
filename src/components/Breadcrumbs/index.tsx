import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { CaretLeft, CaretRight, House } from 'phosphor-react';

import { BackToPreviousPage, LinkHomePage, List } from './styles';

interface BreadcrumbsProps {
  children: ReactNode;
  BtnBackToPreviousPage?: boolean;
}

export function Breadcrumbs({
  children,
  BtnBackToPreviousPage,
}: BreadcrumbsProps) {
  const navigate = useNavigate();

  function backToPreviousPage() {
    navigate('..');
  }

  return (
    <List>
      {BtnBackToPreviousPage && (
        <li>
          <BackToPreviousPage type="button" onClick={backToPreviousPage}>
            <CaretLeft />
            Voltar
          </BackToPreviousPage>
        </li>
      )}
      <LinkHomePage>
        <Link to="/">
          <House />
        </Link>
        <CaretRight />
      </LinkHomePage>
      {children}
    </List>
  );
}
