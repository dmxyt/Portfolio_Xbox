
export default function Filter() {
    return (
        <section className="filter d-flex gap-2 align-content-center container pt-2 small">
            <span className="d-flex gap-1 p-1 small">
                <i className="bi bi-funnel-fill "></i>
                Filtro:
            </span>
            <b className="border p-1 rounded small">Do mais recente para o mais antigo</b>
        </section>
    )
}