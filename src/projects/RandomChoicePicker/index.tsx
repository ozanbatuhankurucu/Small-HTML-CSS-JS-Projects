import { Helmet } from 'react-helmet'
import RandomChoicePicker from './RandomChoicePicker'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Random Choice Picker</title>
    </Helmet>
    <RandomChoicePicker />
  </>
)
export default Wrapper
