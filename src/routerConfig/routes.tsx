import { Navigate, Route } from 'react-router-dom'
import Projects from '../pages/Projects'
import HiddenSearchWidget from '../projects/HiddenSearchWidget'
import BlurryLoading from '../projects/BlurryLoading'
import ScrollAnimation from '../projects/ScrollAnimation'
import SplitLandingPage from '../projects/SplitLandingPage'
import Wrapper from '../projects/FormWaveAnimation'
import SoundBoard from '../projects/SoundBoard'
import SearchDropdown from '../projects/SearchDropdown'
import DadJokes from '../projects/DadJokes'
import DiamondAutograder from '../projects/DiamondAutograder'
import DutyCycleSamplingWrapper from '../projects/DutyCycleSampling'
import EventKeycodes from '../projects/EventKeycodes'
import FaqCollapse from '../projects/FaqCollapse'
import { Results } from '../projects/DutyCycleSampling/Results'
import { Inputs } from '../projects/DutyCycleSampling/Inputs'
import { generateUniqueKey } from '../utils'
import RandomChoicePicker from '../projects/RandomChoicePicker/RandomChoicePicker'
import AnimatedNavigation from '../projects/AnimatedNavigation/AnimatedNavigation'
import IncrementingCounter from '../projects/IncrementingCounter/IncrementingCounter'
import DrinkWater from '../projects/DrinkWater/DrinkWater'
import MovieApp from '../projects/MovieApp'
import BackgroundSlider from '../projects/BackgroundSlider'
import ThemeClock from '../projects/ThemeClock'
import { ButtonRippleEffect } from '../projects/ButtonRippleEffect/ButtonRippleEffect'
import DragNDrop from '../projects/DragNDrop/DragNDrop'
import DrawingApp from '../projects/DrawingApp'
import KineticCSSLoader from '../projects/KineticCSSLoader'
import ContentPlaceholder from '../projects/ContentPlaceholder'
import StickyNavbar from '../projects/StickyNavbar'
import DoubleVerticalSlider from '../projects/DoubleVerticalSlider'
import ExpandingCards from '../projects/ExpandingCards'
import ProgressSteps from '../projects/ProgressSteps'
import RotatingNavigation from '../projects/RotatingNavigation'
import ToastNotification from '../projects/ToastNotification'
import GithubProfiles from '../projects/GithubProfiles'
import DoubleClickHeart from '../projects/DoubleClickHeart'
import TypingEffect from '../projects/TypingEffect'
import PasswordGenerator from '../projects/PasswordGenerator'
import GoodCheapFast from '../projects/GoodCheapFast'
import NotesApp from '../projects/NotesApp'
import AnimatedCountdown from '../projects/AnimatedCountdown'
import ImageCarousel from '../projects/ImageCarousel'
import Hoverboard from '../projects/Hoverboard'
import Pokedex from '../projects/Pokedex'
import MobileTabNavigation from '../projects/MobileTabNavigation'
import PasswordStrengthBackground from '../projects/PasswordStrengthBackground'
import BackgroundBoxes from '../projects/BackgroundBoxes'
import VerifyAccountUI from '../projects/VerifyAccountUI'
import LiveUserFilter from '../projects/LiveUserFilter'
import FeedbackUIDesign from '../projects/FeedbackUIDesign'
import CustomRangeSlider from '../projects/CustomRangeSlider'
import NetflixNavigation from '../projects/NetflixNavigation'
import QuizApp from '../projects/QuizApp'
import TestimonialBoxSwitcher from '../projects/TestimonialBoxSwitcher'
import RandomImageFeed from '../projects/RandomImageFeed'
import TodoList from '../projects/TodoList'
import InsectCatchGame from '../projects/InsectCatchGame'

const PROJECTS_PATH = '/projects/'

const routes = [
  {
    path: '/',
    element: <Navigate to='/projects' />
  },
  {
    path: PROJECTS_PATH,
    element: <Projects />
  },
  {
    path: `${PROJECTS_PATH}hidden-search-widget`,
    element: <HiddenSearchWidget />
  },
  {
    path: `${PROJECTS_PATH}blurry-loading`,
    element: <BlurryLoading />
  },
  {
    path: `${PROJECTS_PATH}scroll-animation`,
    element: <ScrollAnimation />
  },
  {
    path: `${PROJECTS_PATH}split-landing-page`,
    element: <SplitLandingPage />
  },
  {
    path: `${PROJECTS_PATH}form-wave-animation`,
    element: <Wrapper />
  },
  {
    path: `${PROJECTS_PATH}sound-board`,
    element: <SoundBoard />
  },
  {
    path: `${PROJECTS_PATH}search-dropdown`,
    element: <SearchDropdown />
  },
  {
    path: `${PROJECTS_PATH}dad-jokes`,
    element: <DadJokes />
  },
  {
    path: `${PROJECTS_PATH}diamond-autograder`,
    element: <DiamondAutograder />
  },
  {
    path: `${PROJECTS_PATH}duty-cycle-sampling`,
    element: <DutyCycleSamplingWrapper />,
    childRoutes: (
      <>
        <Route path='' element={<Navigate to='inputs' />} />
        <Route path='inputs' element={<Inputs />} />
        <Route path='results' element={<Results />} />
      </>
    )
  },
  {
    path: `${PROJECTS_PATH}event-keycodes`,
    element: <EventKeycodes />
  },
  {
    path: `${PROJECTS_PATH}faq-collapse`,
    element: <FaqCollapse />
  },
  {
    path: `${PROJECTS_PATH}random-choice-picker`,
    element: <RandomChoicePicker />
  },
  {
    path: `${PROJECTS_PATH}animated-navigation`,
    element: <AnimatedNavigation />
  },
  {
    path: `${PROJECTS_PATH}incrementing-counter`,
    element: <IncrementingCounter />
  },
  {
    path: `${PROJECTS_PATH}drink-water`,
    element: <DrinkWater />
  },
  {
    path: `${PROJECTS_PATH}movie-app`,
    element: <MovieApp />
  },
  {
    path: `${PROJECTS_PATH}background-slider`,
    element: <BackgroundSlider />
  },
  {
    path: `${PROJECTS_PATH}theme-clock`,
    element: <ThemeClock />
  },
  {
    path: `${PROJECTS_PATH}button-ripple-effect`,
    element: <ButtonRippleEffect />
  },
  {
    path: `${PROJECTS_PATH}drag-n-drop`,
    element: <DragNDrop />
  },
  {
    path: `${PROJECTS_PATH}drawing-app`,
    element: <DrawingApp />
  },
  {
    path: `${PROJECTS_PATH}kinetic-css-loader`,
    element: <KineticCSSLoader />
  },
  {
    path: `${PROJECTS_PATH}content-placeholder`,
    element: <ContentPlaceholder />
  },
  {
    path: `${PROJECTS_PATH}sticky-navbar`,
    element: <StickyNavbar />
  },
  {
    path: `${PROJECTS_PATH}double-vertical-slider`,
    element: <DoubleVerticalSlider />
  },
  {
    path: `${PROJECTS_PATH}expanding-cards`,
    element: <ExpandingCards />
  },
  {
    path: `${PROJECTS_PATH}progress-steps`,
    element: <ProgressSteps />
  },
  {
    path: `${PROJECTS_PATH}rotating-navigation`,
    element: <RotatingNavigation />
  },
  {
    path: `${PROJECTS_PATH}toast-notification`,
    element: <ToastNotification />
  },
  {
    path: `${PROJECTS_PATH}github-profiles`,
    element: <GithubProfiles />
  },
  {
    path: `${PROJECTS_PATH}double-click-heart`,
    element: <DoubleClickHeart />
  },
  {
    path: `${PROJECTS_PATH}typing-effect`,
    element: <TypingEffect />
  },
  {
    path: `${PROJECTS_PATH}password-generator`,
    element: <PasswordGenerator />
  },
  {
    path: `${PROJECTS_PATH}good-cheap-fast`,
    element: <GoodCheapFast />
  },
  {
    path: `${PROJECTS_PATH}notes-app`,
    element: <NotesApp />
  },
  {
    path: `${PROJECTS_PATH}animated-countdown`,
    element: <AnimatedCountdown />
  },
  {
    path: `${PROJECTS_PATH}image-carousel`,
    element: <ImageCarousel />
  },
  {
    path: `${PROJECTS_PATH}hoverboard`,
    element: <Hoverboard />
  },
  {
    path: `${PROJECTS_PATH}pokedex`,
    element: <Pokedex />
  },
  {
    path: `${PROJECTS_PATH}mobile-tab-navigation`,
    element: <MobileTabNavigation />
  },
  {
    path: `${PROJECTS_PATH}password-strength-background`,
    element: <PasswordStrengthBackground />
  },
  {
    path: `${PROJECTS_PATH}3d-background-boxes`,
    element: <BackgroundBoxes />
  },
  {
    path: `${PROJECTS_PATH}verify-account-ui`,
    element: <VerifyAccountUI />
  },
  {
    path: `${PROJECTS_PATH}live-user-filter`,
    element: <LiveUserFilter />
  },
  {
    path: `${PROJECTS_PATH}feedback-ui-design`,
    element: <FeedbackUIDesign />
  },
  {
    path: `${PROJECTS_PATH}custom-range-slider`,
    element: <CustomRangeSlider />
  },
  {
    path: `${PROJECTS_PATH}netflix-navigation`,
    element: <NetflixNavigation />
  },
  {
    path: `${PROJECTS_PATH}quiz-app`,
    element: <QuizApp />
  },
  {
    path: `${PROJECTS_PATH}testimonial-box-switcher`,
    element: <TestimonialBoxSwitcher />
  },
  {
    path: `${PROJECTS_PATH}random-image-feed`,
    element: <RandomImageFeed />
  },
  {
    path: `${PROJECTS_PATH}todo-list`,
    element: <TodoList />
  },
  {
    path: `${PROJECTS_PATH}insect-catch-game`,
    element: <InsectCatchGame />
  }
]

const routesWithId = routes.map((route) => ({
  ...route,
  id: generateUniqueKey(route.path)
}))

export default routesWithId
