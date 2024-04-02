import "./style.scss";
import { Container } from "@containers";
import Img from "@images/img2.png";

function index() {
    return <section id="gratis">
    <Container>
        <div className="gratis-wrapper flex items-center justify-between pb-[150px]">
           <div>
            <p className="text-[#232536] text-[18px] font-normal">Tentang Kami</p>
             <h1 className="w-[624px] text-[#232536] text-[38px] font-semibold py-4 ">
             EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
             </h1>
             <p className="w-[620px] text-[#282938] text-[16px] font-mediuml">
             Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan
             </p>
           </div>
           <img src={Img} alt="img" />
        </div>
    </Container>
    </section>
}

export default index;