import "./stely.scss";

import { Container } from "@containers";
import { CartGrid  } from "@containers";
import { Card } from "@ui";

import {cardData} from "@veraebels";

function index() {
    return <section id="edufrre" className="pt-[122px] pb-[148px]">
        <Container>
            <h1 className="text-[#282938] text-[38px] font-semibold w-[640px] text-center mx-auto mb-[62px]">Keuntungan Bergabung Dengan  E-Learning EDUFREE</h1>
            <CartGrid>
                {
                    cardData.map((item) => {
                        return <Card key={item.id} data={item} />
                    })
                }
            </CartGrid>

        </Container>
    </section>
}

export default index;