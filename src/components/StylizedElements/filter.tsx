
type FilterProps = {
    filterText?: string,
    alignLeft?: boolean
}

export default function Filter({filterText, alignLeft}: FilterProps) {
    return (
        <section className={`filter d-flex gap-2 align-content-center ${alignLeft? '': 'container'} pt-2 small flex-wrap`}>
            <span className="d-flex gap-1 p-1 small">
                <i className="bi bi-funnel-fill "></i>
                Filtrando por:
            </span>
            <b className="border p-1 rounded small">{filterText? filterText : 'Relevância'}</b>
        </section>
    )
}