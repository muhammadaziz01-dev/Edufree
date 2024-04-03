import "./style.scss";

function index({children}) {
    return <div className="grid grid-cols-3  gap-[130px] justify-between  items-center">
        {children}
    </div>
}

export default index;