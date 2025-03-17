
export const Content = ({ onCardClick, title, description, image }) => {
    const Content = [
      {
        id: "Product Profile ",
        title: "Product Profile",
        content: `
        <section class="text-gray-200 body-font"><div class="container flex flex-wrap px-5 py-24 mx-auto items-center"><div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200"><h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-500">Pitchfork Kickstarter Taxidermy</h1><p class="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra,distillery gastropub pok pok ugh.</p><a class="text-indigo-500 inline-flex items-center mt-4">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div><div class="flex flex-col md:w-1/2 md:pl-12"><h2 class="title-font font-semibold text-gray-500 tracking-wider text-sm mb-3">CATEGORIES</h2><nav class="flex flex-wrap list-none -mb-1"><li class="lg:w-1/3 mb-1 w-1/2"><a class="text-gray-300 hover:text-gray-500">First Link</a></li><li class="lg:w-1/3 mb-1 w-1/2"><a class="text-gray-200 hover:text-gray-500">Second Link</a></li><li class="lg:w-1/3 mb-1 w-1/2"><a class="text-gray-300 hover:text-gray-500">Third Link</a></li><li class="lg:w-1/3 mb-1 w-1/2"><a class="text-gray-300 hover:text-gray-500">Fourth Link</a></li></nav></div></div></section>
        `,
        code: `
  <section class="E-text-gray-200 E-body-font E-bg-black">
    <div class="E-container E-flex E-flex-wrap E-px-5 E-py-24 E-mx-auto E-items-center">
      <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 E-mb-10 md:mb-0 E-pb-10 E-border-b E-border-gray-200">
        <h1 class="sm:text-3xl E-text-2xl E-font-medium E-title-font E-mb-2 E-text-gray-500">Pitchfork Kickstarter Taxidermy</h1>
        <p class="E-leading-relaxed E-text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
        <a class="E-text-indigo-500 E-inline-flex E-items-center E-mt-4 E-cursor-pointer">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="E-w-4 E-h-4 E-ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="E-flex E-flex-col md:w-1/2 md:pl-12">
        <h2 class="E-title-font E-font-semibold E-text-gray-500 E-tracking-wider E-text-sm E-mb-3">CATEGORIES</h2>
        <nav class="E-flex E-flex-wrap E-list-none E--mb-1">
          <li class="lg:w-1/3 E-mb-1 E-w-1/2">
            <a class="E-text-gray-300 hover:text-gray-400 E-cursor-pointer">First Link</a>
          </li>
          <li class="lg:w-1/3 E-mb-1 w-1/2">
            <a class="E-text-gray-300 hover:text-gray-400 E-cursor-pointer">Second Link</a>
          </li>
          <li class="lg:w-1/3 E-mb-1 w-1/2">
            <a class="E-text-gray-300 hover:text-gray-400 E-cursor-pointer">Third Link</a>
          </li>
          <li class="lg:w-1/3 E-mb-1 w-1/2">
            <a class="E-text-gray-300 hover:text-gray-400 E-cursor-pointer">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
</section> 
        `
      },
      {
        id: "Project Cards",
        title: "Project Cards",
        content: `
        <section class="text-gray-400 bg-gray-900 body-font"><div class="container px-5 py-24 mx-auto"><div class="flex flex-wrap -mx-4 -mb-10 text-center"><div class="sm:w-1/2 mb-10 px-4"><div class="rounded-lg h-64 overflow-hidden"><img alt="content" class="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1603487669754-61e2ea4da396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc2NlbmFyeXxlbnwwfDB8MHx8fDA%3D"></div><h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Buy YouTube Videos</h2><p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch,slow-carb neutra irony.</p><button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Button</button></div><div class="sm:w-1/2 mb-10 px-4"><div class="rounded-lg h-64 overflow-hidden"><img alt="content" class="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1654226761195-fda5e69eb705?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwc2NlbmFyeXxlbnwwfDB8MHx8fDA%3D"></div><h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">The Catalyzer</h2><p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch,slow-carb neutra irony.</p><button class="flex mx-auto mt-6 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded">Button</button></div></div></div></section>
        `,
        code: `
 
  <section class="E-text-gray-400 E-bg-gray-900 E-body-font">
    <div class="E-container E-px-5 E-py-24 E-mx-auto">
      <div class="E-flex E-flex-wrap -mx-4 -mb-10 E-text-center">
        <div class="sm:w-1/2 E-mb-10 E-px-4">
          <div class="E-rounded-lg E-h-64 E-overflow-hidden">
            <img alt="content" class="E-object-cover E-object-center E-h-full E-w-full" src="https://images.unsplash.com/photo-1603487669754-61e2ea4da396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwc2NlbmFyeXxlbnwwfDB8MHx8fDA%3D">
          </div>
          <h2 class="E-title-font E-text-2xl E-font-medium E-text-white E-mt-6 E-mb-3">Buy YouTube Videos</h2>
          <p class="E-leading-relaxed E-text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
          <button class="E-flex E-mx-auto E-mt-6 E-text-white E-bg-green-500 E-border-0 E-py-2 E-px-5 focus:outline-none hover:bg-green-600 E-rounded E-cursor-pointer">Button</button>
        </div>
        <div class="sm:w-1/2 E-mb-10 E-px-4">
          <div class="E-rounded-lg E-h-64 E-overflow-hidden">
            <img alt="content" class="E-object-cover E-object-center E-h-full E-w-full" src="https://images.unsplash.com/photo-1654226761195-fda5e69eb705?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwc2NlbmFyeXxlbnwwfDB8MHx8fDA%3D">
          </div>
          <h2 class="E-title-font E-text-2xl E-font-medium E-text-white E-mt-6 E-mb-3">The Catalyzer</h2>
          <p class="E-leading-relaxed E-text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
          <button class="E-flex E-mx-auto E-mt-6 E-text-white E-bg-green-500 E-border-0 E-py-2 E-px-5 focus:outline-none hover:bg-green-600 E-rounded E-cursor-pointer">Button</button>
        </div>
      </div>
    </div>
</section>  
        `
      },
      {
        id: "Profile With img",
        title: "Profile With Image",
        content: `
<section class="text-gray-400 bg-gray-900 body-font"><div class="container px-5 py-24 mx-auto flex flex-col"><div class="lg:w-4/6 mx-auto"><div class="rounded-lg h-64 overflow-hidden"><img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"></div><div class="flex flex-col sm:flex-row mt-10"><div class="sm:w-1/3 text-center sm:pr-8 sm:py-8"><div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><div class="flex flex-col items-center text-center justify-center"><h2 class="font-medium title-font mt-4 text-white text-lg">Phoebe Caulfield</h2><div class="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div><p class="text-base text-gray-400">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p></div></div><div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"><p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft,post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial,disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical,chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p><a class="text-blue-400 inline-flex items-center">Learn More <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></a></div></div></div></div></section>
        `,
        code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font">
        <div class="E-container E-px-5 E-py-24 E-mx-auto E-flex E-flex-col">
          <div class="lg:w-4/6 E-mx-auto">
            <div class="E-rounded-lg E-h-64 E-overflow-hidden">
              <img alt="content" class="E-object-cover E-object-center E-h-full E-w-full" src="https://dummyimage.com/1200x500">
            </div>
            <div class="E-flex E-flex-col sm:flex-row E-mt-10">
              <div class="sm:w-1/3 E-text-center sm:pr-8 sm:py-8">
                <div class="E-w-20 E-h-20 E-rounded-full E-inline-flex E-items-center E-justify-center E-bg-gray-800 E-text-gray-600">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="E-w-10 E-h-10" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="E-flex E-flex-col E-items-center E-text-center E-justify-center">
                  <h2 class="E-font-medium E-title-font E-mt-4 E-text-white E-text-lg">Phoebe Caulfield</h2>
                  <div class="E-w-12 E-h-1 E-bg-blue-500 E-rounded E-mt-2 E-mb-4"></div>
                  <p class="E-text-base E-text-gray-400">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l E-border-gray-800 sm:border-t-0 E-border-t E-mt-4 E-pt-4 sm:mt-0 E-text-center sm:text-left">
                <p class="E-leading-relaxed E-text-lg E-mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                <a class="E-text-blue-400 E-inline-flex E-items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="E-w-4 E-h-4 E-ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
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
            id: "Content",
            title: title,
            subtitle: "COMPONENT",
            description: description,
            items: Content
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
  
  