import Header from "@component/header";
import Footter from "@component/footer";
import { Main  } from "@containers";

import { Intro , MainSection , Edufrre  ,Gratis , Kursus} from "@sections";


const App = () => {
  return (
    <>
    <Header />
    <Main>
      <Intro/>
      <MainSection/>
      <Edufrre/>
      <Gratis/>
       <Kursus/>
    </Main>
    <Footter />
    </>
  );
};

export default App;