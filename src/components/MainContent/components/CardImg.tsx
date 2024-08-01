import { project } from '../../../database/projects'

interface CardImgProps extends project {
    small_size: boolean
}

export default function CardImg({ img_src, title, id, href, small_size }: CardImgProps) {
    return (
        <>
            <a className={`flex-column d-flex ${small_size ? 'small-size' : ''}`} key={id} href={href}
                target='_blank'>
                <img src={img_src} alt={title}
                    className={`img-fluid rounded cardBox`} />
            </a>
        </>
    )
}

