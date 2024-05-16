
export default function () {

    return (
        <>
            <div className="account d-flex gap-2 w-25"
                style={{ "width": "auto" }}>
                <div className='h1'>
                    <i className="bi bi-person-circle"></i>
                </div>
                <div className="d-flex flex-column">
                    <span className="d-flex ">
                        Arthur Gonçalves Saldanha
                    </span>
                    {/* //Profile Name */}
                    <span className='accumulated-points d-flex gap-1 p'>
                        <i className="bi bi-info-circle-fill"></i>
                        5000
                    </span>
                </div>
            </div>
        </>
    )
}