import ChaveiroCard from '../../public/ChaveiroCard.png';
import LilyPinkCycleCard from '../../public/LilyPinkCycleCard.png';
import SpotifyCard from '../../public/SpotifyCard.png';
import LandingPageLogo from '../../public/currencyLogo.png';
import ItauLogo from '../../public/logoItaú.png';
import CalculatorLogo from '../../public/calculatorLogo.png';
import TypescriptLogo from '../../public/icons/typescript.svg';
import JavascriptLogo from '../../public/icons/logo-javascript.svg';
import ReactLogo from '../../public/icons/react-2.svg';

interface language {
    title: string;
    src: string;
}

interface project {
    id: number;
    img_src: string;
    title: string;
    description: string;
    href: string;
    languages?: language[];
}

const projects: project[] = [
    {
        id: 1,
        img_src: ChaveiroCard,
        title: 'Chaveiro Barão',
        description: "Website criado para a empresa Chaveiro Barão, possui elementos de Sass, Bootstrap, React e Typescript em sua configuração.",
        href: 'https://chaveiro-web.vercel.app/',
        languages: [
            {
                title: 'Typescript',
                src: TypescriptLogo
            },
            {
                title: 'React',
                src: ReactLogo
            }
        ]
    },
    {
        id: 2,
        img_src: LilyPinkCycleCard,
        title: 'Lily Pink Cycle',
        description: "A Lily Pink Cycle é ...",
        href: 'https://lily-pink-cycle-app.vercel.app/',
        languages: [
            {
                title: 'React',
                src: ReactLogo
            },
            {
                title: 'Javascript',
                src: JavascriptLogo
            }
        ]
    },
    {
        id: 3,
        img_src: SpotifyCard,
        title: 'Spotify Web Simulation',
        description: "A Spotify Web Simulation é ...",
        href: 'https://spotify-web-clone-ruddy.vercel.app/',
        languages: [
            {
                title: 'Javascript',
                src: JavascriptLogo
            },
            {
                title: 'React',
                src: ReactLogo
            }
        ]
    },
    {
        id: 4,
        img_src: LandingPageLogo,
        title: 'Landing Page',
        description: "Landing Page é ...",
        href: 'https://landing-page-five-alpha-73.vercel.app/',
        languages: [
            {
                title: 'Typescript',
                src: TypescriptLogo
            },
            {
                title: 'React',
                src: ReactLogo
            }
        ]
    },
    {
        id: 5,
        img_src: ItauLogo,
        title: 'Itaú Website',
        description: "Itaú Website é ...",
        href: 'https://itau-website.vercel.app/',
        languages: [
            {
                title: 'Javascript',
                src: JavascriptLogo
            }
        ]
    },
    {
        id: 6,
        img_src: CalculatorLogo,
        title: 'Área e Perímetro',
        description: "Área e Perímetro Website é ...",
        href: '/',
        languages: [
            {
                title: 'Javascript',
                src: JavascriptLogo
            }
        ]
    }
];

export { projects };
export type { project, language };
