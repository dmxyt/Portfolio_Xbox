
type box = {
    icon: string,
    description: string,
    href: string,
    target: boolean
}

export default function Box({icon, description, href, target} : box) {
    return (
        <>
            <a className="cardBox box rounded d-flex justify-content-center bg-dark d-flex flex-column" 
            style={{ "width": "30vh" }} href={href} target={target?"_blank":''}>
                <span className="align-self-center pt-5">
                    <i className={`bi bi-${icon} h1 text-white`}></i>
                </span>
                <span className="pt-4 pb-2 text-white">
                    {description}
                </span>
            </a>
        </>
    )
}