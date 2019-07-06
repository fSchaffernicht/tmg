import About from './About'
import Comissions from './Comissions'
import Contact from './Contact'
import CurrentWorks from './CurrentWorks'
import Distribution from './Distribution'
import Fanart from './Fanart'
import Home from './Home'
import IamMangaka from './IamMangaka'
import Imprint from './Imprint'
import LovedPeople from './LovedPeople'
import Portfolio from './Portfolio'
import Sale from './Sale'
import SocialMedia from './SocialMedia'
import Teacher from './Teacher'
import Workshops from './Workshops'

export default [
  {
    name: 'Home',
    to: '/',
    Component: Home,
    exact: true
  },
  {
    name: 'Über mich',
    to: '/über-mich',
    Component: About
  },
  {
    name: 'Portfolio',
    to: '/portfolio',
    Component: Portfolio
  },
  {
    name: 'Aktuelle Werke',
    to: '/aktuelle-werke',
    Component: CurrentWorks
  },
  {
    name: 'Comissions',
    to: '/comissions',
    Component: Comissions
  },
  {
    name: 'Verkaufsgallerie',
    to: '/verkaufsgallerie',
    Component: Sale
  },
  {
    name: 'Workshops',
    to: '/workshops',
    Component: Workshops
  },
  {
    name: 'Fankunstwerke',
    to: '/fankunstwerke',
    Component: Fanart
  },
  {
    name: 'I am mangaka!',
    to: '/i-am-mangaka',
    Component: IamMangaka,
    exact: true,
    children: [
      {
        name: 'Vertrieb',
        to: '/i-am-mangaka/vertrieb',
        Component: Distribution
      },
      {
        name: 'Lehrer',
        to: '/i-am-mangaka/lehrer',
        Component: Teacher
      }
    ]
  },
  {
    name: 'Social Media',
    to: '/social-media',
    Component: SocialMedia
  },
  {
    name: 'Lieblingsmenschen',
    to: '/lieblingsmenschen',
    Component: LovedPeople
  },
  {
    name: 'Kontakt',
    to: '/kontakt',
    Component: Contact
  },
  {
    name: 'Impressum',
    to: '/impressum',
    Component: Imprint
  }
]
