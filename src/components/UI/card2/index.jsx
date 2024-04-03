import "./style.scss";

function index({data:{title ,description , jam ,video , users, star, images }}) {
    return <>

        <div className="max-w-[386px]">
            <div className=" relative ">
                <img src={images} alt={title} />
                <span className=" absolute bottom-[-12px] right-[10px] flex items-center gap-1 py-1 px-[11px] bg-[#1C1E53] rounded-2xl w-[63px] text-white text-[12px] font-medium ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M8.14413 2.63437C8.41413 1.80547 9.58683 1.80547 9.85593 2.63437L10.8189 5.59717C10.8778 5.77761 10.9921 5.93483 11.1457 6.04636C11.2992 6.1579 11.4841 6.21803 11.6739 6.21817H14.7897C15.6618 6.21817 16.0236 7.33417 15.3189 7.84717L12.7989 9.67777C12.6451 9.7894 12.5305 9.94688 12.4716 10.1276C12.4128 10.3084 12.4127 10.5031 12.4713 10.684L13.4343 13.6468C13.7043 14.4757 12.7548 15.166 12.0483 14.653L9.52833 12.8224C9.37461 12.7108 9.18953 12.6507 8.99958 12.6507C8.80962 12.6507 8.62454 12.7108 8.47083 12.8224L5.95083 14.653C5.24523 15.166 4.29663 14.4757 4.56573 13.6468L5.52873 10.684C5.58738 10.5031 5.58728 10.3084 5.52843 10.1276C5.46957 9.94688 5.355 9.7894 5.20113 9.67777L2.68203 7.84807C1.97733 7.33507 2.34003 6.21907 3.21123 6.21907H6.32613C6.51607 6.21912 6.70116 6.15907 6.8549 6.04753C7.00864 5.93598 7.12314 5.77866 7.18203 5.59807L8.14503 2.63527L8.14413 2.63437Z" fill="#FCD980" />
                    </svg>
                    {star}
                </span>
            </div>
            <div className="py-4 px-6">
                <h3 className="text-[#282938] text-[24px]  font-medium">{title}</h3>
                <p className="text-[#282938] text-[16px] font-normal pt-1 pb-6  leading-[24px] ">
                    {description}
                </p>
                <div className="flex items-cente gap-[17px]">
                    <p className="flex items-center gap-2 text-[#282938] text-[16px] font-normal">
                        <i className="bi bi-clock"></i>
                        <span>{jam}</span>
                    </p>
                    <p className="flex items-center gap-2 text-[#282938] text-[16px] font-normal">
                        <i className="bi bi-play-circle"></i>
                        <span>{video}</span>
                    </p><p className="flex items-center gap-2 text-[#282938] text-[16px] font-normal">
                        <i className="bi bi-people"></i>
                        <span>{users}</span>
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default index;