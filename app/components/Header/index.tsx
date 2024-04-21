"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const AppBar = styled.header`
  background-color: #000;
  color: #fff;
  padding: 16px 0;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const NavLink = styled.h1`
  font-size: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  const isActive = (pathname: string): boolean => {
    return path === pathname;
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <AppBar>
      <Toolbar>
        {!isActive("/") && <Button onClick={handleBack}>Back</Button>}
        <Nav>
          <Link href="/">
            <NavLink>Pokemon</NavLink>
          </Link>
        </Nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
