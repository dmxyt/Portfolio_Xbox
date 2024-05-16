
type tabButtonType = {
    href: string,
    item_name: string
}

const tabBtn = ({href, item_name} : tabButtonType) => {
    return(
        <>
            <a href={href} className="btn btn-primary-outline d-flex">
                <i className={`bi bi-${item_name}`}></i>
            </a> 
        </>
    )
}

export default tabBtn;