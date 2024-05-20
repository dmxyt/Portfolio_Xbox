
export default function Box({icon, description} : any) {
    return (
        <>
            <div className="cardBox box rounded d-flex justify-content-center bg-dark d-flex flex-column" style={{ "width": "30vh" }}>
                <span className="align-self-center pt-5">
                    <i className={`bi bi-${icon} h1 text-white`}></i>
                </span>
                <span className="pt-4 pb-2 text-white">
                    {description}
                </span>
            </div>
        </>
    )
}