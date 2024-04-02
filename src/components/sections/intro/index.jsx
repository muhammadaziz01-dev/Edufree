import "./stely.scss";
import { Container } from "@containers";
import { Buuton } from "@ui";
import IntroImg from "@images/intro-img.png";

function index() {
    return <section id="intro" className="bg-[#1C1E53] pt-[92px] pb-[132px] ">
        <Container>
            <div className="intro-wrapper flex items-center justify-between">
                <div className="intro-text">
                    <h1 className="text-[42px]  text-[#FFF] font-semibold">
                        Bangun dan Wujudkan Cita <br />Bersama EDUFREE
                    </h1>
                    <p className="text-[16px]  text-[#FFF] font-normal pt-[32px] pb-[62px]">
                        EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online <br />
                        yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.
                    </p>
                    <div className="flex items-center gap-2">
                        <Buuton titil="Lihat Kursus"/>
                        
                        <a href="#" className="flex items-center gap-2 font-normal text-white text-[16px] py-[15px] px-5 border border-transparent hover:border-white duration-200 rounded-md">Lihat Alur Belajar <i className="bi bi-arrow-right"></i></a>
                    </div>

                </div>
                <img src={IntroImg} alt="img" />
            </div>

        </Container>
    </section>
}

export default index;  