import { createGlobalStyle} from "styled-components"
const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Chillax, sans-serif;
  }
  .app__desc--content {
    color: ${({ theme }) => theme.text};
  }
  .results__msgField {
    color: ${({ theme }) => theme.text};
  }
  .header {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    &__menu-desktopBtn {
      &:hover {
        color: ${({ theme }) => theme.headerLinksHover};
      }
      &--active {
        color: ${({ theme }) => theme.headerLinksHover};
      }
    }
  }
  .fas.fa-coins, .header__menu-mobileBtn {
    color: ${({ theme }) => theme.headerBtns};
    &:hover {
      color: ${({ theme }) => theme.headerLinksHover};
    }
  }
  .form {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    &__input, &__input--open {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
      border-color: ${({ theme }) => theme.inputBorder};
    }
  }
  .menu--open {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    .fas.fa-times {
      color: ${({ theme }) => theme.headerBtns};
    }
  }
  .coin, .coin__page-item {
    background: ${({ theme }) => theme.coin};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.coinShadow};
    border: ${({ theme }) => theme.coinBorder};
  }
  .coin:hover {
    background: ${({ theme }) => theme.body};
  }
  .goButton {
    background: ${({ theme }) => theme.goButtonBg};
    color: ${({ theme }) => theme.goButtonColor};
    border: ${({ theme }) => theme.goButtonBorder};

    &:hover {
      color: ${({ theme }) => theme.goButtonColorHover};
      border: ${({ theme }) => theme.goButtonBorderHover};
      box-shadow: ${({ theme }) => theme.goButtonShadow};
    }
  }
  .platform-item > .platform-url {
    &:hover {
      color: ${({ theme }) => theme.platformUrlHover};
    }

  }
  `;

export default GlobalStyles;
