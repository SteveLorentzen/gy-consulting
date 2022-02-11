export interface INavContent {
  navLinks: INavLink[]
}

export interface IDropdown {
  dropdownTitle: string
  mainDestination: string
  dropdownOptions: INavLink[]
}

export interface INavLink {
  linkText: string
  destination: string
}
