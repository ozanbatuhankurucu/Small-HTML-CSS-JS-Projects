import { Helmet } from 'react-helmet'
import { StickyNavbar } from './StickyNavbar'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Sticky Navbar</title>
    </Helmet>
    <StickyNavbar />
  </>
)
export default Wrapper
