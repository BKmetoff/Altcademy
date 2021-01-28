import React from "react"
import { Link } from "react-router-dom"

import styled, { css } from "styled-components"
import { Theme } from "../backbone/style/Theme"

import Button from "../backbone/Button"
import Divider from "../backbone/Divider"

import { MOCK_DATA } from "../utils/mock"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  width: 100%;
  margin-top: ${Theme.margin.M};
`

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${({ userActions }) =>
    userActions
      ? css`
          justify-content: space-between;
          width: 100%;
        `
      : css`
          justify-content: center;
        `}
`

export default function Header() {
  return (
    <HeaderContainer>
      <ItemsContainer userActions>
        <p>{MOCK_DATA.USER.USERNAME}</p>
        <Button kind="secondary">Log out</Button>
      </ItemsContainer>
      <ItemsContainer>
        <Button kind="headerLink">
          <Link to="/">Upload Image</Link>
        </Button>
        <Divider vertical />
        <Button kind="headerLink">
          <Link to="/history">History</Link>
        </Button>
        <Divider vertical />
        <Button kind="headerLink">
          <Link to="/leaderboard">Leaderboard</Link>
        </Button>
      </ItemsContainer>
    </HeaderContainer>
  )
}
