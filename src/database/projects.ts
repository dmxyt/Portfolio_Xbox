import ChaveiroCard from '../../public/ChaveiroCard.png'
import LilyPinkCycleCard from '../../public/LilyPinkCycleCard.png'
import SpotifyCard from '../../public/SpotifyCard.png'
import LadingPageLogo from '../../public/currencyLogo.png'
import ItauLogo from '../../public/logoItaú.png'
import CalculatorLogo from '../../public/calculatorLogo.png'

interface project {
    id: number,
    img_src: string,
    title: string,
    description: string,
    href: string,
    languages?: string[]
}

const projects : project[] = [
    {
        id: 1,
        img_src: ChaveiroCard,
        title: 'Chaveiro Barão',
        description: "O Chaveiro Barão é uma empresa...",
        href: 'https://chaveiro-web.vercel.app/',
        languages: [
            'Typescript', 'React'
        ]
    },
    {
        id: 2,
        img_src: LilyPinkCycleCard,
        title: 'Lily Pink Cycle',
        description: "A Lily Pink Cycle é ...",
        href: 'https://lily-pink-cycle-app.vercel.app/',
        languages: [
            'React',
            'Javascript'
        ]
    },
    {
        id: 3,
        img_src: SpotifyCard,
        title: 'Spotify Web Simulation',
        description: "A Spotify Web Simulation é ...",
        href: 'https://spotify-web-clone-ruddy.vercel.app/',
        languages: [
            'Javascript', 'React'
        ]
    },
    {
        id: 4,
        img_src: LadingPageLogo,
        title: 'Lading Page',
        description: "Lading Page é ...",
        href: 'https://landing-page-five-alpha-73.vercel.app/',
        languages: [
            'Typescript', 'React'
        ]
    },
    {
        id: 5,
        img_src: ItauLogo,
        title: 'Itaú Website',
        description: "Itaú Website é ...",
        href: 'https://itau-website.vercel.app/',
        languages: [
            'Javascript'
        ]
    },
    {
        id: 6,
        img_src: CalculatorLogo,
        title: 'Area e Perímetro',
        description: "Area e Perímetro Website é ...",
        href: '/',
        languages: [
            'Javascript'
        ]
    }
];

export {projects};
export type {project};
