import { Link } from "react-router-dom";

type tabButtonType = {
    href: string,
    item_name: string,
}

const tabBtn = ({href, item_name} : tabButtonType) => {
    return(
        <>
            <Link to={href} className="tabSelector d-flex text-light" 
            data-toggle="tooltip" data-placement="bottom" title={href} target="">
                <i className={`bi bi-${item_name}`}></i>
            </Link> 
        </>
    )
}

export default tabBtn;