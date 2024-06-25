import TimeUpdated from "../../MainContent/components/Time"

export default function () {
    return (
        <>
            <div className="hardware-info d-flex flex-row gap-2 
            align-items-center w-25 justify-content-end"
                style={{ "width": "auto" }}>
                <i className="bi bi-mic-mute-fill"></i>
                <i className="bi bi-battery-half"></i>
                <TimeUpdated />
            </div>
        </>
    )
}