import { project } from '../../../database/projects'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
interface CardImgProps extends project {
    small_size: boolean
}

export default function CardImg({ img_src, title, id, href, small_size, description }: CardImgProps) {
    const [isHovered, setIsHovered] = useState(false);
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
                            position: 'relative',
                            display: 'block',
                            width: '100%',
                            height: 'auto',
                            transition: '0.3s',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                    >
                        <img
                            src={img_src}
                            alt={title}
                            className={`img-fluid rounded cardBox`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                border: '0.3vh solid transparent',
                                transition: '0.3s',
                                boxShadow: isHovered ? '0 0 4vh green' : 'none',
                            }}
                        />
                        {isHovered && (
                            <motion.div
                                className="tooltip container"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    color: 'white',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxSizing: 'border-box',
                                    zIndex: 0,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
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
<a className={`flex-column d-flex ${small_size ? 'small-size' : ''}`} key={id} href={href}
                target='_blank'>
                <img src={img_src} alt={title}
                    className={`img-fluid rounded cardBox`} />
            </a>
*/