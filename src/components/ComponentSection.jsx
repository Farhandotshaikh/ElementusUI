import { Button } from './Minimates/Buttons.jsx';
import { Card } from './Minimates/Cards.jsx';
import { Inputs } from './Minimates/Inputs.jsx';
import { Loaders } from './Minimates/Loaders.jsx';
import { Avatars } from './Minimates/Avatars.jsx';
import { Pagination } from './Minimates/Pagination.jsx';

import { Alerts } from './Minimates/Alerts.jsx';
import { LogoCloud } from './Minimates/LC.jsx';
import { Progress } from './Minimates/Progress.jsx';

import { Footer } from './MacroElements/Footer.jsx';
import { CTA } from './MacroElements/CTA.jsx';
import { Header } from './MacroElements/Header.jsx';
import { Stats } from './MacroElements/Stats.jsx';
import { Hero } from './MacroElements/Hero.jsx';
import { Contacts } from './MacroElements/Contact.jsx';
import { Portfolio } from './MacroElements/Portfolio.jsx';
import { Blog } from './MacroElements/Blog.jsx';
import { Content } from './MacroElements/Content.jsx';
import { Testimonial } from './MacroElements/Testimonial.jsx';


export const ComponentSection = ({ title, onCardClick, activeButton }) => {
  const miniMatesComponents = [
    { 
      Component: Button, 
      title: 'Buttons', 
      description: 'A collection of button styles for various use cases.',
      image: './src/assets/Button.png'
    },
    { 
      Component: Inputs, 
      title: 'Inputs', 
      description: 'A collection of Inputs styles for various use cases.',
      image: './src/assets/Inputs.png'
    },
    { 
      Component: Loaders, 
      title: 'Loaders', 
      description: 'A collection of Loaders styles for various use cases.',
      image: './src/assets/Loaders.png'
    },
    { 
      Component: Avatars, 
      title: 'Avatars', 
      description: 'A collection of Avatars styles for various use cases.',
      image: './src/assets/Avatars.png'
    },
    { 
      Component: Pagination, 
      title: 'Pagination', 
      description: 'A collection of Pagination styles for various use cases.',
      image: './src/assets/Pagination.png'
    },

    { 
      Component: Alerts, 
      title: 'Alerts', 
      description: 'A collection of PopUps styles for various use cases.',
      image: './src/assets/Alerts.png'
    },
    { 
      Component: LogoCloud, 
      title: 'LogoCloud', 
      description: 'A collection of Logos Cloud styles for various use cases.',
      image: './src/assets/LC.png'
    },
    { 
      Component: Progress, 
      title: 'Progress', 
      description: 'A collection of Progress Bars styles for various use cases.',
      image: './src/assets/Progress.png'
    },
    { 
      Component: Card, 
      title: 'Cards', 
      description: 'A collection of card designs for various content types.',
      image: './src/assets/Card.png'
    }
  ];

  const macroElementsComponents = [
    { 
      Component: Footer, 
      title: 'Footer Components', 
      description: 'A collection of Footers layouts and components.',
      image: './src/assets/Footer.png'
    },
    { 
      Component: CTA, 
      title: 'CTA Components', 
      description: 'A collection of Call to Action components.',
      image: './src/assets/CTA.png'
    },
    { 
      Component: Header, 
      title: 'Headers', 
      description: 'A collection of Navigation Bars.',
      image: './src/assets/Header.png'
    },
    { 
      Component: Stats, 
      title: 'Statistics', 
      description: 'Components to display statistics.',
      image: './src/assets/Stats.png'
    },
    { 
      Component: Testimonial, 
      title: 'Testimonials', 
      description: 'A collection of Testimonials components.',
      image: './src/assets/Testimonial.png'
    },
    { 
      Component: Hero, 
      title: 'Hero', 
      description: 'A collection of Hero sections.',
      image: './src/assets/Hero.png'
    },
    { 
      Component: Contacts, 
      title: 'Contacts', 
      description: 'A collection of Navigation Bars.',
      image: './src/assets/Contact.png'
    },
    { 
      Component: Portfolio, 
      title: 'Portfolio', 
      description: 'A collection of Navigation Bars.',
      image: './src/assets/Portfolio.png'
    },
    { 
      Component: Blog, 
      title: 'Blog', 
      description: 'A collection of Navigation Bars.',
      image: './src/assets/Blog.png'
    },
    { 
      Component: Content, 
      title: 'Content', 
      description: 'A collection of Navigation Bars.',
      image: './src/assets/Content.png'
    }
  ];

  const components = activeButton === 'minimates' ? miniMatesComponents : macroElementsComponents;

  return (
    <section className="text-black body-font">
      <div className="container px-4 sm:px-5 py-12 sm:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10 sm:mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">{title}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore our collection of UI components and layouts. Click on any item to view its preview and code.
          </p>
        </div>
        <div className="flex flex-wrap -m-2 sm:-m-4 ">
          {components.map(({ Component, title, description, image }, index) => (
            <div key={index} className="p-2 sm:p-4 w-full sm:w-1/2 lg:w-1/3 transform transition-transform duration-300 hover:scale-90">
              <Component onCardClick={onCardClick} title={title} description={description} image={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

