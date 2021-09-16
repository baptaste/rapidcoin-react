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

    &__menu-mobileBtn--topBar, &__menu-mobileBtn--subBar {
      background-color: ${({ theme }) => theme.text};
    }
  }
  .theme-toggler, .theme-toggler--mobile {
    background: ${({ theme }) => theme.themeTogglerBackground};
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.themeTogglerBorder};

    &:hover {
      color: ${({ theme }) => theme.themeTogglerColorHover};
    }
  }

  .fas.fa-coins, .header__menu-mobileBtn {
    color: ${({ theme }) => theme.text};
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
      color: ${({ theme }) => theme.text};
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
    border: ${({ theme }) => theme.coinBorderHover};
    box-shadow: ${({ theme }) => theme.coinShadowHover};
  }
  .coin__content > .coin__content--url {
    &:hover {
      color: ${({ theme }) => theme.coinUrlHover};
    }
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
  .goButton__filter.active {
    color: ${({ theme }) => theme.filtersButtonColorActive};
    border: ${({ theme }) => theme.filtersButtonBorderActive};
  }
  .platforms-list {
    border-bottom: ${({ theme }) => theme.platformsGridBorder};
    border-right: ${({ theme }) => theme.platformsGridBorder};
  }
  .platform-item > .platform-url {
    &:hover {
      color: ${({ theme }) => theme.platformUrlHover};
    }
  }
  .home__load-more {
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.goButtonBorder};

    &:hover {
      color: ${({ theme }) => theme.goButtonColorHover};
      border: ${({ theme }) => theme.goButtonBorderHover};
      box-shadow: ${({ theme }) => theme.goButtonShadow};
    }
  }
  .coin__page__preview {
    &:after {
      background-color: ${({ theme }) => theme.coinPageDividerBorder};
    }
  }
  .footer, .menu__footer {
    color: ${({ theme }) => theme.footerColor};
  }
  `;

export default GlobalStyles;
