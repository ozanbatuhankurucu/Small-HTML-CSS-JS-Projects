import { Helmet } from 'react-helmet'
import BackgroundBoxes from './BackgroundBoxes'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>3D Background Boxes</title>
    </Helmet>
    <BackgroundBoxes />
  </>
)
export default Wrapper
