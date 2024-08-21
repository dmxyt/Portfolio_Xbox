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
        description: "Plataforma para rastreamento de ciclos menstruais com React e JavaScript, tendo uma interface interativa e amigável.",
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
        description: "Simulação do design e funcionalidades do Spotify, desenvolvida com JavaScript e React, replicando a experiência do serviço de streaming.",
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
        description: "Landing page criada com TypeScript e React, projetada para demonstrar habilidades em design e funcionalidade de páginas de aterrissagem.",
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
        description: "Um site que simula o visual e a funcionalidade do site oficial do Itaú, utilizando JavaScript para criar uma interface interativa e responsiva.",
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
        description: "Site para cálculos de áreas e perímetros com JavaScript, oferecendo uma interface prática e precisa para usuários.",
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
