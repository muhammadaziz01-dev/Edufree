import Header from "@component/header";
import Footter from "@component/footer";
import { Main  } from "@containers";

import { Intro , MainSection , Edufrre  ,Gratis} from "@sections";


const App = () => {
  return (
    <>
    <Header />
    <Main>
      <Intro/>
      <MainSection/>
      <Edufrre/>
      <Gratis/>

    </Main>
    <Footter />
    </>
  );
};

export default App;