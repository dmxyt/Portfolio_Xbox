import ChaveiroCard from '../../public/ChaveiroCard.png'
import LilyPinkCycleCard from '../../public/LilyPinkCycleCard.png'
import SpotifyCard from '../../public/SpotifyCard.png'

interface project {
    id: number,
    img_src: string,
    title: string,
    description: string,
    href: string
}

const projects : project[] = [
    {
        id: 1,
        img_src: ChaveiroCard,
        title: 'Chaveiro Barão',
        description: "O Chaveiro Barão é uma empresa...",
        href: 'https://chaveiro-web.vercel.app/'
    },
    {
        id: 2,
        img_src: LilyPinkCycleCard,
        title: 'Lily Pink Cycle',
        description: "A Lily Pink Cycle é ...",
        href: 'https://lily-pink-cycle-app.vercel.app/'
    },
    {
        id: 3,
        img_src: SpotifyCard,
        title: 'Spotify Web Simulation',
        description: "A Spotify Web Simulation é ...",
        href: 'https://spotify-web-clone-ruddy.vercel.app/'
    }
];

export {projects};
export type {project};
