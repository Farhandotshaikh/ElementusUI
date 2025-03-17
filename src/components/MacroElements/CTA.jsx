import cta from '../../assets/CTA.png';
export const CTA = ({ onCardClick, title, description, image }) => {
  const CTA = [
    {
      id: "cta-1",
      title: "CTA 1",
      content: `
          <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
              </div>
              <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                <div class="relative sm:mb-0 flex-grow w-full">
                  <label for="full-name" class="leading-7 text-sm text-gray-400">Full Name</label>
                  <input type="text" id="full-name" name="full-name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative sm:mb-0 flex-grow w-full">
                  <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
              </div>
            </div>
          </section>
        `,
      code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font">
        <div class="E-container E-px-5 E-py-24 E-mx-auto">
          <div class="E-flex E-flex-col E-text-center E-w-full E-mb-12">
            <h1 class="sm:E-text-3xl E-text-2xl E-font-medium E-title-font E-mb-4 E-text-white">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:w-2/3 E-mx-auto E-leading-relaxed E-text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.</p>
          </div>
          <div class="E-flex lg:w-3/5 E-w-full sm:flex-row E-flex-col E-mx-auto E-px-8 sm:px-0 E-items-end sm:space-x-4 sm:space-y-0 space-y-4">
            <div class="E-relative sm:mb-0 E-flex-grow E-w-full">
              <label for="full-name" class="E-leading-7 E-text-sm E-text-gray-400">Full Name</label>
              <input type="text" id="full-name" name="full-name" class="E-w-full E-bg-gray-800 E-bg-opacity-40 E-rounded E-border E-border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 focus:bg-transparent E-text-base E-outline-none E-text-gray-100 E-py-1 E-px-3 E-leading-8 E-transition-colors E-duration-200 E-ease-in-out">
            </div>
            <div class="E-relative sm:mb-0 E-flex-grow E-w-full">
              <label for="email" class="E-leading-7 E-text-sm E-text-gray-400">Email</label>
              <input type="email" id="email" name="email" class="E-w-full E-bg-gray-800 E-bg-opacity-40 E-rounded E-border E-border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 focus:bg-transparent E-text-base E-outline-none E-text-gray-100 E-py-1 E-px-3 E-leading-8 E-transition-colors E-duration-200 E-ease-in-out">
            </div>
            <button class="E-text-white E-bg-pink-500 E-border-0 E-py-2 E-px-8 focus:outline-none hover:bg-pink-600 E-rounded E-text-lg">Button</button>
          </div>
        </div>
      </section>
        `
    },
    {
      id: "cta-2",
      title: "CTA 2",
      content: `
          <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
              <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 class="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
                <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
              </div>
              <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
                <div class="relative mb-4">
                  <label for="full-name" class="leading-7 text-sm text-gray-400">Full Name</label>
                  <input type="text" id="full-name" name="full-name" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                  <input type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 rounded border border-gray-600 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button class="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
                <p class="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
          </section>
        `,
      code: `
      <section class="E-text-gray-400 E-bg-gray-900 E-body-font">
        <div class="E-container E-px-5 E-py-24 E-mx-auto E-flex E-flex-wrap E-items-center">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 E-pr-0">
            <h1 class="E-title-font E-font-medium E-text-3xl E-text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
            <p class="E-leading-relaxed E-mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
          </div>
          <div class="lg:w-2/6 md:w-1/2 E-bg-gray-800 E-bg-opacity-50 E-rounded-lg E-p-8 E-flex E-flex-col md:ml-auto E-w-full E-mt-10 md:mt-0">
            <h2 class="E-text-white E-text-lg E-font-medium E-title-font E-mb-5">Sign Up</h2>
            <div class="E-relative E-mb-4">
              <label for="full-name" class="E-leading-7 E-text-sm E-text-gray-400">Full Name</label>
              <input type="text" id="full-name" name="full-name" class="E-w-full E-bg-gray-600 E-bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 E-rounded E-border E-border-gray-600 focus:border-pink-500 E-text-base E-outline-none E-text-gray-100 E-py-1 E-px-3 E-leading-8 E-transition-colors E-duration-200 E-ease-in-out">
            </div>
            <div class="E-relative E-mb-4">
              <label for="email" class="E-leading-7 E-text-sm E-text-gray-400">Email</label>
              <input type="email" id="email" name="email" class="E-w-full E-bg-gray-600 E-bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-900 E-rounded E-border E-border-gray-600 focus:border-pink-500 E-text-base E-outline-none E-text-gray-100 E-py-1 E-px-3 E-leading-8 E-transition-colors E-duration-200 E-ease-in-out">
            </div>
            <button class="E-text-white E-bg-pink-500 E-border-0 E-py-2 E-px-8 focus:outline-none hover:bg-pink-600 E-rounded E-text-lg">Button</button>
            <p class="E-text-xs E-mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
      </section>
        `
    },
    {
      id: "cta-3",
      title: "CTA 3",
      content: `
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 class="text-xs text-red-400 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 class="md:text-3xl text-2xl font-medium title-font text-white">Master Cleanse Reliac Heirloom</h1>
    </div>
    <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button class="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-500 mb-1">GET IT ON</span>
          <span class="title-font font-medium">Google Play</span>
        </span>
      </button>
      <button class="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs text-gray-500 mb-1">Download on the</span>
          <span class="title-font font-medium">App Store</span>
        </span>
      </button>
    </div>
  </div>
</section>
        `,
      code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font">
  <div class="E-container E-px-5 E-py-24 E-mx-auto E-flex E-items-center md:flex-row E-flex-col">
    <div class="E-flex E-flex-col md:pr-10 md:mb-0 E-mb-6 E-pr-0 E-w-full md:w-auto md:text-left E-text-center">
      <h2 class="E-text-xs E-text-red-400 E-tracking-widest E-font-medium E-title-font E-mb-1">ROOF PARTY POLAROID</h2>
      <h1 class="md:text-3xl E-text-2xl E-font-medium E-title-font E-text-white">Master Cleanse Reliac Heirloom</h1>
    </div>
    <div class="E-flex md:ml-auto md:mr-0 E-mx-auto E-items-center E-flex-shrink-0 space-x-4">
      <button class="E-bg-gray-800 E-inline-flex E-py-3 E-px-5 E-rounded-lg E-items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="E-w-6 E-h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span class="E-ml-4 E-flex E-items-start E-flex-col E-leading-none">
          <span class="E-text-xs E-text-gray-500 E-mb-1">GET IT ON</span>
          <span class="E-title-font E-font-medium">Google Play</span>
        </span>
      </button>
      <button class="E-bg-gray-800 E-inline-flex E-py-3 E-px-5 E-rounded-lg E-items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="E-w-6 E-h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span class="E-ml-4 E-flex E-items-start E-flex-col E-leading-none">
          <span class="E-text-xs E-text-gray-500 E-mb-1">Download on the</span>
          <span class="E-title-font E-font-medium">App Store</span>
        </span>
      </button>
    </div>
  </div>
</section>
        `
    }
  ];

  return (
    <>
      <div
        className="h-52 sm:h-64 md:h-72 relative group cursor-pointer bg-white rounded-t-lg shadow-md overflow-hidden"
        onClick={() => onCardClick({
          id: "CTA",
          title: title,
          subtitle: "COMPONENT",
          description: description,
          items: CTA
        })}
      >
        <div className="absolute inset-0">
          <img
            src={cta}
            alt={title}
            className="Object-cover w-full h-full"
          />
        </div>

      </div>
      <div className="bg-black text-white p-4 rounded-b-lg">
        <h2 className="text-lg text-center font-medium mb-1">{title}</h2>
        <p className="text-sm text-center text-white/80">{description}</p>
      </div>
    </>
  );
};

