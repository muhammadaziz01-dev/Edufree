import Header from "@component/header";
import Footter from "@component/footer";
import { Main , Container} from "@containers";

import { Intro ,  } from "@sections";


const App = () => {
  return (
    <>
    <Header />
    <Main>
      <Intro/>
      

    </Main>
    <Footter />
    </>
  );
};

export default App;