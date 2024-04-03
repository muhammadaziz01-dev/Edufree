import "./style.scss";
import { Container ,Card2Grid } from "@containers";
import { Buuton , Card2 } from "@ui"; 

import {card2Data} from "@veraebels";

function index() {
    return <section id="kursus">
        <Container>
            <div className="kursus-wrapper pb-[150px]">
                <div className="flex items-center justify-between pb-[20px] border-b-[2px] border-[#ECECF1] mb-[62px]">
                    <h1 className="text-[#282938] text-[36px] font-semibold">
                        Rekomendasi Kursus  <br />
                        Untuk Kamu
                    </h1>
                    <div className="flex items-center gap-4 ">
                        <button className="flex items-center gap-2 text-[#282938] text-[18px] font-medium px-[20px]">
                            Kategori
                            <i className="bi bi-chevron-down"></i>
                        </button>
                        <Buuton titil="Lihat Semua" />
                    </div>
                </div>
                <Card2Grid>
                    {
                        card2Data.map((itim)=>{
                            return <Card2 key={itim.id}  data={itim}/>
                        })
                    }
                    
                </Card2Grid>
            </div>
        </Container>
    </section>
}

export default index;