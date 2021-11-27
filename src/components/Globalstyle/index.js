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

  .fas.fa-coins, .fas.fa-ring, .header__menu-mobileBtn {
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
      // border-color: ${({ theme }) => theme.inputBorder};
      border-color: ${({ theme }) => theme.text};
    }
  }
  .menu--open {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .fas.fa-times {
    color: ${({ theme }) => theme.text};
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
  .coin__page-intro--ranking {
    background: ${({ theme }) => theme.newFeatureBackground};
    color: ${({ theme }) => theme.newFeatureColor};
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
  .footer, .menu__footer {
    color: ${({ theme }) => theme.footerColor};
  }
  .table thead {
    border-bottom: ${({ theme }) => theme.tableTheadBorderBottom};

    th {
      background: ${({ theme }) => theme.body};
    }
  }
  .table tr {
    border-bottom: ${({ theme }) => theme.tableTRborderBottom};
  }

  @media screen and (max-width: 700px) {
    thead tr th:nth-child(1),
    tbody tr td:nth-child(1) {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }
    thead tr th:nth-child(2),
    tbody tr td:nth-child(2) {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }
  }
  tbody tr {
    background: ${({ theme }) => theme.body};
  }
  tbody tr:hover {
    background: ${({ theme }) => theme.tableTRhover};
  }
  .new-feature {
    background: ${({ theme }) => theme.newFeatureBackground};
    color: ${({ theme }) => theme.newFeatureColor};
  }
  .search-suggestions {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .suggestion:hover {
    background: ${({ theme }) => theme.tableTRhover};
  }
  .suggestion:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
  .select-currency-btn {
    color: ${({ theme }) => theme.text};
  }
  .currencies-wrapper {
    background: ${({ theme }) => theme.body};

    .currency-btn {
      color: ${({ theme }) => theme.text};

      &:first-child {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
      }
      &:last-child {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
      }
      &:hover {
        background: ${({ theme }) => theme.tableTRhover};
      }
    }
  }
  .fas.fa-caret-down {
    color: ${({ theme }) => theme.text};
  }
  .selectValues {
    background: ${({ theme }) => theme.selectValuesBackground};
    border: ${({ theme }) => theme.tableTRborderBottom};

    .btnValue {
      background: ${({ theme }) => theme.selectValuesBackground};
      color: ${({ theme }) => theme.text};
      &.active {
        background: ${({ theme }) => theme.activeLinkBackground};
        color: ${({ theme }) => theme.text};
      }
      &.disabled {
        color: grey;
      }
      &:hover:not(.disabled) {
        background: ${({ theme }) => theme.activeLinkBackground};
        color: ${({ theme }) => theme.text};
      }
    }
  }
  .lds-dual-ring:after {
    border: ${({ theme }) => theme.loaderBorder};
    border-color: ${({ theme }) => theme.loaderBorderColor};
  }
  `;

export default GlobalStyles;
