import { INavContent } from 'interfaces-and-types/_app/layout/interfaces-and-types'

export const navContent: INavContent = {
  dropdowns: [
    {
      dropdownTitle: 'About Us',
      mainDestination: '/about-us',
      dropdownOptions: [
        {
          linkText: 'Overview',
          destination: `/about-us`,
        },
        {
          linkText: 'Who We Are',
          destination: `/about-us#who-we-are`,
        },
        {
          linkText: 'Why GY Consulting',
          destination: '/about-us#why-gy-consulting',
        },
        {
          linkText: 'The Team',
          destination: '/about-us#the-team',
        },
      ],
    },
    {
      dropdownTitle: 'Consulting',
      mainDestination: '/consulting',
      dropdownOptions: [
        {
          linkText: 'Overview',
          destination: '/consulting',
        },
        {
          linkText: 'Initial Consultation',
          destination: '/consulting#initial-consultation',
        },
        {
          linkText: 'Academic Tutoring',
          destination: '/consulting#academic-tutoring',
        },
        {
          linkText: 'Homestay',
          destination: '/consulting#homestay',
        },
      ],
    },
    {
      dropdownTitle: 'Homestay',
      mainDestination: '/homestay',
      dropdownOptions: [
        {
          linkText: 'Overview',
          destination: '/homestay',
        },
        {
          linkText: 'Academic Homestay',
          destination: '/homestay#academic-homestay',
        },
        {
          linkText: 'Consultation',
          destination: '/homestay#consultation',
        },
        {
          linkText: 'Programs',
          destination: '/homestay#programs',
        },
      ],
    },
  ],
  navLinks: [
    { linkText: 'GY Blog', destination: '/gy-blog' },
    { linkText: 'Login', destination: '/login' },
  ],
}
