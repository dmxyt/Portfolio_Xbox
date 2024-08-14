import { project } from '../../../database/projects'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
interface CardImgProps extends project {
    small_size: boolean,
    allow_description?: boolean
}

export default function CardImg({ img_src, title, id, href, small_size, description, allow_description }: CardImgProps) {
    const [isHovered, setIsHovered] = useState(false);

    if (!allow_description) {
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

    return (
        <>
            <a
                className={`flex-column d-flex ${small_size ? 'small-size' : ''}`}
                key={id}
                href={href}
                target='_blank'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ position: 'relative', display: 'block', width: '100%' }}
            >
                <AnimatePresence>
                    <motion.div
                        style={{
                            transition: '0.3s',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                    >
                        <img
                            src={img_src}
                            alt={title}
                            className={`img-fluid rounded cardBox`}
                            style={{
                                transition: '0.3s',
                                boxShadow: isHovered ? '0 0 4vh green' : 'none',
                            }}
                        />
                        {isHovered && (
                            <motion.div
                                className="tooltip container description-cardbox d-flex"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {description}
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </a>
        </>
    )
}

/* 

*/