
type GraphProps = {
    percentage: number
}

export default function ({percentage}: GraphProps) {
    
    return (
        <>
            <div className="graph">
                <svg>
                    <circle cx="50" cy="50" r="30" stroke-width="5" />
                </svg>
                <svg className="cor">
                    <circle cx="50" cy="50" r="30" stroke-width="5" />
                </svg>
                <b>{percentage}%</b>
            </div>
        </>
    )
}