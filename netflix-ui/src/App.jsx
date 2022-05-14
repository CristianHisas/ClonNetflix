import Movies from "./components/Movies";
import Banner from "./components/Banner";
import Header from './components/Header';
import { endpoints } from "./endpoints/Endpoints";

function App() {

  return (
    <>
    <Header/>
    <Banner endpoint={endpoints.originals}/>
    <Movies endpoints={endpoints}/>
    </>
  );
}

export default App;
