import { Helmet } from 'react-helmet'
import ImageCarousel from './ImageCarousel'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Image Carousel</title>
    </Helmet>
    <ImageCarousel />
  </>
)
export default Wrapper
