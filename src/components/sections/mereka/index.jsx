import "./style.scss";

import { Container } from "@containers"
import Img from "@images/mereke-img.png";

function index() {
    return <section id="mereka" className=" py-[75px] bg-[rgba(238,244,250,1)]">
        <Container>
            <div className="meeka-wrrap flex items-start justify-between ">
                <div>
                    <h1 className="text-[#282938] text-[28px] font-semibold ">Kata Mereka Tentang <br />
                        Kursus EDUFREE</h1>
                    <p className="text-[#313243] text-[16px] font-normal">
                        EDUFREE telah dipercaya lebih dari 10.000 siswa 
                    </p>
                </div>
                <div className="max-w-[843px]">
                    <h1 className="text-[#282938] text-[26px] font-medium mb-[41px]  ">
                    "Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta  responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!"
                    </h1>
                    <div className="flex items-center justify-between">
                          <div className="flex items-center gap-[10px]">
                            <img src={Img} alt="img" className=" rounded-[50%]" />
                            <p className="flex flex-col items-start">
                                <strong>Jenny Wilson</strong>
                                <span>Vice President</span>
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <sapn className="w-[16px] h-[16px] rounded-[50%] bg-[#a6a4b6] "></sapn>
                            <sapn className="w-[16px] h-[16px] rounded-[50%] bg-[#2405F2] "></sapn>
                            <sapn className="w-[16px] h-[16px] rounded-[50%] bg-[#a6a4b6] "></sapn>
                            <sapn className="w-[16px] h-[16px] rounded-[50%] bg-[#a6a4b6] "></sapn>
                            <sapn className="w-[16px] h-[16px] rounded-[50%] bg-[#a6a4b6] "></sapn>
                          </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}

export default index;
