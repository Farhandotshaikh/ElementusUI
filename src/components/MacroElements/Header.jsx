
export const Header = ({ onCardClick, title, description, image }) => {
    const Header = [
      {
        id: "Header 1",
        title: "E-Commerce",
        content: `
<nav class="bg-gray-900 shadow-md px-6 py-4 flex items-center justify-between"><div class="text-xl font-bold text-gray-300"><a href="#">ShopEase</a></div><div class="hidden md:flex space-x-6"><a href="#" class="text-white hover:text-blue-500">Home</a><a href="#" class="text-white hover:text-blue-500">Shop</a><a href="#" class="text-white hover:text-blue-500">About</a><a href="#" class="text-white hover:text-blue-500">Contact</a></div><div class="flex items-center space-x-4"><a href="#" class="relative text-white hover:text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h14l-2-5M9 21h6m-3-4v-6" /></svg><span class="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span></a><button class="md:hidden text-white hover:text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg></button></div></nav>
        `,
        code: `
    <nav class="E-bg-gray-900 E-shadow-md E-px-6 E-py-4 E-flex E-items-center E-justify-between">
        <div class="E-text-xl E-font-bold E-text-gray-300">
          <a href="#">ShopEase</a>
        </div>
        <div class="E-hidden E-sm:flex space-x-4">
          <a href="#" class="E-text-white hover:text-blue-500 ">Home</a>
          <a href="#" class="E-text-white hover:text-blue-500 ">Shop</a>
          <a href="#" class="E-text-white hover:text-blue-500 ">About</a>
          <a href="#" class="E-text-white hover:text-blue-500 ">Contact</a>
        </div>
        <div class="E-flex E-items-center space-x-4">
          <a href="#" class="E-relative E-text-white hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="E-h-6 E-w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h14l-2-5M9 21h6m-3-4v-6" />
            </svg>
            <span class="E-absolute -top-1.5 E--right-2 E-bg-red-500 E-text-white E-text-xs E-w-5 E-h-5 E-flex E-items-center E-justify-center E-rounded-full">3</span>
          </a>
          <button class="E-md:hidden E-text-white hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="E-h-6 E-w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
        `
      },
      {
        id: "Header 2",
        title: "Centered Logo",
        content: `
          <header class="text-gray-400 bg-gray-900 body-font"><div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"><nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"><a class="mr-5 hover:text-white">First Link</a><a class="mr-5 hover:text-white">Second Link</a><a class="mr-5 hover:text-white">Third Link</a><a class="hover:text-white">Fourth Link</a></nav><a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"><img src="./src/assets/logo1.png" alt="Elementus Logo" class="w-6 h-8 md:w-10 md:h-14"><span class="ml-3 text-xl xl:block lg:hidden">Elementus</span></a><div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"><button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button></div></div></header>
        `,
        code: `
    <header class="E-text-gray-400 E-bg-gray-900 E-body-font">
        <div class="E-container E-mx-auto E-flex E-flex-wrap E-p-5 E-flex-col md:flex-row E-items-center">
          <nav class="E-flex lg:w-2/5 E-flex-wrap E-items-center E-justify-center sm:justify-start E-mx-auto E-text-base md:ml-auto">
            <a class="E-mr-5 hover:text-white">First Link</a>
            <a class="E-mr-5 hover:text-white">Second Link</a>
            <a class="E-mr-5 hover:text-white">Third Link</a>
            <a class="hover:text-white">Fourth Link</a>
          </nav>
          <a class="E-flex E-order-first lg:order-none lg:w-1/5 E-title-font E-font-medium E-items-center E-text-white lg:items-center lg:justify-center E-mb-4 md:mb-0">
            <img src="./src/assets/logo1.png" alt="Logo" class="E-w-6 E-h-8 md:w-10 md:h-14">
            <span class="E-ml-3 E-text-xl E-xl:block E-lg:hidden">Elementus</span>
          </a>
          <div class="lg:w-2/5 E-inline-flex lg:justify-end E-ml-5 lg:ml-0">
            <button class="E-inline-flex E-items-center E-bg-gray-800 E-border-0 E-py-1 E-px-3 focus:outline-none hover:bg-gray-700 E-rounded E-text-base E-mt-4 md:mt-0">Button
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="E-w-4 E-h-4 E-ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
        `
      },
      {
        id: "Header 3",
        title: "Centered Link",
        content: `
          <header class="text-gray-400 bg-gray-900 body-font"><div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"><a class="flex title-font font-medium items-center text-white mb-4 md:mb-0"><img src="./src/assets/logo1.png" alt="Tailblocks Logo" class="w-6 h-8 md:w-10 md:h-14"><span class="ml-3 text-xl">Elementus</span></a><nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"><a class="mr-5 hover:text-white">Link 1</a><a class="mr-5 hover:text-white">Link 2</a><a class="mr-5 hover:text-white">Link 3</a><a class="mr-5 hover:text-white">Link 4</a></nav><button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button></div></header>
        `,
        code: `
    <header class="E-text-gray-400 E-bg-gray-900 E-body-font">
        <div class="E-container E-mx-auto E-flex E-flex-wrap E-p-5 E-flex-col md:flex-row E-items-center">
          <a class="E-flex E-title-font E-font-medium E-items-center E-text-white E-mb-4 md:mb-0">
            <img src="./src/assets/logo1.png" alt="Logo" class="E-w-6 E-h-8 md:w-10 md:h-14">
            <span class="E-ml-3 E-text-xl">Elementus</span>
          </a>
          <nav class="md:ml-auto md:mr-auto E-flex E-flex-wrap E-items-center E-text-base E-justify-center">
            <a class="E-mr-5 hover:text-white">Link 1</a>
            <a class="E-mr-5 hover:text-white">Link 2</a>
            <a class="E-mr-5 hover:text-white">Link 3</a>
            <a class="E-mr-5 hover:text-white">Link 4</a>
          </nav>
          <button class="E-inline-flex E-items-center E-bg-gray-800 E-border-0 E-py-1 E-px-3 focus:outline-none hover:bg-gray-700 E-rounded E-text-base E-mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="E-w-4 E-h-4 E-ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
        `
      }
    ];
  
    return (
      <>
        <div 
          className="h-52 sm:h-64 md:h-72 relative group cursor-pointer bg-white rounded-t-lg shadow-md overflow-hidden"
          onClick={() => onCardClick({
            id: "Header",
            title: title,
            subtitle: "COMPONENT",
            description: description,
            items: Header
          })}
        >
          <div className="absolute inset-0">
            <img
              src={image}
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