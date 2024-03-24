import { AboutUs, Chef, Footer,  Gallery, Header, Intro, Laurels, SpecialMenu} from '../src/container/';
import { Navbar } from '../src/components';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    {/* <FindUs /> */}
    <Footer />
  </>
);

export default App;
