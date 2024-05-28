
type tabButtonType = {
    href: string,
    item_name: string,
}

const tabBtn = ({href, item_name} : tabButtonType) => {
    return(
        <>
            <a href={href} className="tabSelector d-flex text-light" 
            data-toggle="tooltip" data-placement="bottom" title={href} target="">
                <i className={`bi bi-${item_name}`}></i>
            </a> 
        </>
    )
}

export default tabBtn;