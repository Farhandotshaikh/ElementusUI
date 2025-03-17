import portfolio from "../../assets/Portfolio.png";
export const Portfolio = ({ onCardClick, title, description, image }) => {
    const Portfolio = [
      {
        id: "Cards",
        title: "Cards",
        content: `
<section class=" bg-gray-900"><div class="container px-6 py-10 mx-auto"><h1 class="text-2xl font-semibold text-center text-gray capitalize lg:text-3xl text-white">Our Portfolio</h1><div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2"><div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style="background-image:url(https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"><div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg- bg-gray-800/60"><h2 class="mt-4 text-xl font-semibold text-gray capitalize text-white">Ton’s of mobile mockup</h2><p class="mt-2 text-lg tracking-wider text-blue uppercase text-blue-400 ">Mockups</p></div></div><div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" style="background-image:url(https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"><div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-whit bg-gray-800/60"><h2 class="mt-4 text-xl font-semibold text-gray- capitalize text-white">Huge collection of animation</h2><p class="mt-2 text-lg tracking-wider text-blue uppercase text-blue-400 ">Animation</p></div></div></div></div></section>
        `,
        code: `
<section class="E-bg-gray-900">
    <div class="E-container E-px-6 E-py-10 E-mx-auto">
        <h1 class="E-text-2xl E-font-semibold E-text-center E-capitalize lg:text-3xl E-text-white">Our
            Portfolio</h1>
        <div class="E-grid E-grid-cols-1 E-gap-8 E-mt-8 E-xl:E-mt-12 xl:gap-12 lg:grid-cols-2">
            <div class="E-flex E-items-end E-overflow-hidden E-bg-cover E-rounded-lg E-h-96" style="background-image:url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                <div class="E-w-full E-px-8 E-py-4 E-overflow-hidden E-rounded-b-lg E-backdrop-blur-sm E-bg-gray-800/60">
                    <h2 class="E-mt-4 E-text-xl E-font-semibold  E-capitalize E-text-white">Ton’s of mobile
                        mockup</h2>
                    <p class="E-mt-2 E-text-lg E-tracking-wider E-uppercase E-text-blue-400 ">Mockups</p>
                </div>
            </div>
            <div class="E-flex E-items-end E-overflow-hidden E-bg-cover E-rounded-lg E-h-96" style="background-image:url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                <div class="E-w-full E-px-8 E-py-4 E-overflow-hidden E-rounded-b-lg E-backdrop-blur-sm E-bg-gray-800/60">
                    <h2 class="E-mt-4 E-text-xl E-font-semibold E-capitalize E-text-white">Huge collection of
                        animation</h2>
                    <p class="E-mt-2 E-text-lg E-tracking-wider E-uppercase E-text-blue-400 ">Animation</p>
                </div>
            </div>
        </div>
    </div>
</section>
        `
      },
      {
        id: "Centered",
        title: "Centered",
        content: `
<section class=" bg-gray-900"><div class="container px-6 py-10 mx-auto"><h1 class="text-2xl font-semibold text-center text-gra capitalize lg:text-3xl text-white">Portfolio </h1><p class="mt-4 text-center text-gra text-gray-300">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Nostrum quam voluptatibus </p><div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"><div><img class="object-cover w-full rounded-lg h-96 " src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80" alt=""><h2 class="mt-4 text-xl font-semibold text-graycapitalize text-white">Best website collections</h2><p class="mt-2 text-lg tracking-wider text-blu uppercase text-blue-400 ">Website</p></div><div><img class="object-cover w-full rounded-lg h-96 " src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""><h2 class="mt-4 text-xl font-semibold text-gra capitalize text-white">Block of Ui kit collections</h2><p class="mt-2 text-lg tracking-wider text-blueuppercase text-blue-400 ">Ui kit</p></div><div><img class="object-cover w-full rounded-lg h-96 " src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""><h2 class="mt-4 text-xl font-semibold text-gra capitalize text-white">Ton’s of mobile mockup </h2><p class="mt-2 text-lg tracking-wider text-blu uppercase text-blue-400 ">Mockups</p></div></div></div></section>
        `,
        code: `
<section class="E-bg-gray-900">
    <div class="E-container E-px-6 E-py-10 E-mx-auto">
        <h1 class="E-text-2xl E-font-semibold E-text-center E-capitalize lg:text-3xl E-text-white">Portfolio
        </h1>
        <p class="E-mt-4 E-text-center E-text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>
        <div class="E-grid E-grid-cols-1 E-gap-8 E-mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img class="E-object-cover E-w-full E-rounded-lg E-h-96 "
                    src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                    alt="">
                <h2 class="E-mt-4 E-text-xl E-font-semibold E-capitalize E-text-white">Best website
                    collections</h2>
                <p class="E-mt-2 E-text-lg E-tracking-wider E-uppercase E-text-blue-400 ">Website</p>
            </div>
            <div>
                <img class="E-object-cover E-w-full E-rounded-lg E-h-96 "
                    src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt="">
                <h2 class="E-mt-4 E-text-xl E-font-semibold E-capitalize E-text-white">Block of Ui kit
                    collections</h2>
                <p class="E-mt-2 E-text-lg E-tracking-wider E-uppercase E-text-blue-400 ">Ui kit</p>
            </div>
            <div>
                <img class="E-object-cover E-w-full E-rounded-lg E-h-96 "
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="">
                <h2 class="E-mt-4 E-text-xl E-font-semibold E-capitalize E-text-white">Ton’s of mobile mockup
                </h2>
                <p class="E-mt-2 E-text-lg E-tracking-wider E-uppercase E-text-blue-400 ">Mockups</p>
            </div>
        </div>
    </div>
</section>
        `
      },
      {
        id: "Hover Effects",
        title: "Hover Effects",
        content: `
<section class=" bg-gray-900"><div class="container px-6 py-10 mx-auto"><h1 class="text-2xl font-semibold text-center  capitalize lg:text-3xl text-white">Portfolio </h1><p class="mt-4 text-center  text-gray-300">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Nostrum quam voluptatibus </p><div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"><div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style="background-image:url(https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80)"><div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"><h2 class="mt-4 text-xl font-semibold text-white capitalize">Best website collections</h2><p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p></div></div><div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style="background-image:url(https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80)"><div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"><h2 class="mt-4 text-xl font-semibold text-white capitalize">Block of Ui kit collections</h2><p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Ui kit</p></div></div><div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group" style="background-image:url(https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)"><div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"><h2 class="mt-4 text-xl font-semibold text-white capitalize">Ton’s of mobile mockup</h2><p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Mockups</p></div></div></div></div></section>
        `,
        code: `

        <section class="E-bg-gray-900">
        <div class="E-container E-px-6 E-py-10 E-mx-auto">
            <h1 class="E-text-2xl E-font-semibold E-text-center  E-capitalize lg:text-3xl E-text-white">Portfolio
            </h1>
            <p class="E-mt-4 E-text-center  E-text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
            </p>
            <div class="E-grid E-grid-cols-1 E-gap-8 E-mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                <div class="E-overflow-hidden E-bg-cover E-rounded-lg E-cursor-pointer E-h-96 E-group"
                    style="background-image:url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')">
                    <div
                        class="E-flex E-flex-col E-justify-center E-w-full E-h-full E-px-8 E-py-4 E-transition-opacity E-duration-700 E-opacity-0  hover:opacity-100" style="background-color: rgba(49, 48, 48, 0.329);backdrop-filter:blur(4px)">
                        <h2 class="E-mt-4 E-text-xl E-font-semibold E-text-white E-capitalize">Best website collections</h2>
                        <p class="E-mt-2 E-text-lg E-tracking-wider E-text-blue-400 E-uppercase ">Website</p>
                    </div>
                </div>
                <div class="E-overflow-hidden E-bg-cover E-rounded-lg E-cursor-pointer E-h-96 E-group"
                    style="background-image:url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')">
                    <div
                        class="E-flex E-flex-col E-justify-center E-w-full E-h-full E-px-8 E-py-4 E-transition-opacity E-duration-700 E-opacity-0  hover:opacity-100" style="background-color: rgba(49, 48, 48, 0.329);backdrop-filter:blur(4px)">
                        <h2 class="E-mt-4 E-text-xl E-font-semibold E-text-white E-capitalize">Block of Ui kit collections</h2>
                        <p class="E-mt-2 E-text-lg E-tracking-wider E-text-blue-400 E-uppercase ">Ui kit</p>
                    </div>
                </div>
                <div class="E-overflow-hidden E-bg-cover E-rounded-lg E-cursor-pointer E-h-96 E-group"
                    style="background-image:url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')">
                    <div
                        class="E-flex E-flex-col E-justify-center E-w-full E-h-full E-px-8 E-py-4 E-transition-opacity E-duration-700 E-opacity-0  hover:opacity-100" style="background-color: rgba(49, 48, 48, 0.329);backdrop-filter:blur(4px)">
                        <h2 class="E-mt-4 E-text-xl E-font-semibold E-text-white E-capitalize">Ton’s of mobile mockup</h2>
                        <p class="E-mt-2 E-text-lg E-tracking-wider E-text-blue-400 E-uppercase ">Mockups</p>
                    </div>
                </div>
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
            id: "Portfolio",
            title: title,
            subtitle: "COMPONENT",
            description: description,
            items: Portfolio
          })}
        >
          <div className="absolute inset-0">
            <img
              src={portfolio}
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
  
  