import { Helmet } from 'react-helmet'
import Pokedex from './Pokedex'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Pokedex</title>
    </Helmet>
    <Pokedex />
  </>
)
export default Wrapper
