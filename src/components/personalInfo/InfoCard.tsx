type infoList = {
    titleElement: string,
    subtitleElement: string
}

const InfoCard = (props: infoList) => {
    return (
        <>
                <section className="w-100 d-flex gap-3
                        justify-content-between align-items-center
                        border p-3">
                    <h6>
                        {props.titleElement}
                    </h6>
                    <span className="d-flex gap-3 align-items-center">
                        <h6>
                            {props.subtitleElement}
                        </h6>
                    </span>
                </section>
        </>
    )
}

export default InfoCard;