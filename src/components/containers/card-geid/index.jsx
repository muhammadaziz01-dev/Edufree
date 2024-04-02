import "./style.scss";

function index({children}) {
    return <div className="grid grid-cols-3 gap-[42px]">
        {children}
    </div>
}

export default index;