import { Helmet } from 'react-helmet'
import GithubProfiles from './GithubProfiles'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Github Profiles</title>
    </Helmet>
    <GithubProfiles />
  </>
)
export default Wrapper
