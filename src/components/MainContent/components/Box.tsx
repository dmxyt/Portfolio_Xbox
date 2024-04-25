
export default function Box() {
    return (
        <>
            <div className="box rounded d-flex justify-content-center bg-dark d-flex flex-column" style={{ "width": "30vh" }}>
                <span className="align-self-center pt-5">
                    <i className="bi bi-collection-fill h1 text-white"></i>
                </span>
                <span className="pt-4 pb-2 text-white">
                    My Games and Apps
                </span>
            </div>
        </>
    )
}