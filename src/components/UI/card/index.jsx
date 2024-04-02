import "./style.scss";
import Icons from "@icons/Mask-group.svg";

const index = ({data:{id , title , description}}) => {
    return (
        <div className="card bg-[#F4F6FC] p-12">
            <div className=" relative">
                <img src={Icons} alt="icon" />
                <span className=" absolute top-2 left-[19px] text-white text-[20px] font-bold">{id}</span>
            </div>
            <h3 className="text-[#282938] text-[24px] font-medium mt-[20px] mb-[12px]">{title}</h3>
            <p className="text-[#282938] pr-4 text-[16px] font-normal">{description}</p>
        </div>
    );
};

export default index;