
export const Testimonial = ({ onCardClick, title, description, image }) => {
    const Testimonials = [
      {
        id: "single-testimonial",
        title: "Single Testimonial",
        content: `
          <section class=" bg-gray-900"><div class="container px-6 py-10 mx-auto"><div class="lg:-mx-6 lg:flex lg:items-center"><img class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" /><div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0"><p class="text-5xl font-semibold text-blue-500 ">“</p><h1 class="text-2xl font-semibold  text-white lg:text-3xl lg:w-96">Help us improve our productivity </h1><p class="max-w-lg mt-6  text-gray-400 ">“ Lorem ipsum dolor sit amet,consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum,culpa aperiam dolorum,obcaecati corrupti aspernatur a. ” </p><h3 class="mt-6 text-lg font-medium text-blue-500">alisa miller</h3><p class="text-gray-300">Marketing Manager at Google</p><div class="flex items-center justify-between mt-12 lg:justify-start"><button title="left arrow" class="p-2  transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200 hove hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg></button><button title="right arrow" class="p-2  transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 text-gray-200 hove lg:mx-6 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg></button></div></div></div></div></section>
        `,
        code: `
  <section class="E-bg-gray-900">
    <div class="E-container E-px-6 E-py-10 E-mx-auto">
        <div class="lg:-mx-6 E-lg:flex lg:items-center">
            <img class="E-object-cover E-object-center lg:w-1/2 lg:mx-6 E-w-full E-h-96 E-rounded-lg lg:h-auto" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <div class="E-mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p class="E-text-5xl E-font-semibold E-text-blue-500 ">“</p>
                <h1 class="E-text-2xl E-font-semibold  E-text-white lg:text-3xl lg:w-96">
                    Help us improve our productivity
                </h1>
                <p class="E-max-w-lg E-mt-6  E-text-gray-400 ">
                    “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p>
                <h3 class="E-mt-6 E-text-lg E-font-medium E-text-blue-500">alisa miller</h3>
                <p class=" E-text-gray-300">Marketing Manager at Google</p>
                <div class="E-flex E-items-center E-justify-between E-mt-12 lg:justify-start">
                    <button title="left arrow" class="E-p-2  E-transition-colors E-duration-300 E-border E-rounded-full rtl:-scale-x-100 E-border-gray-700 E-text-gray-200 hover:bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="E-w-6 E-h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button title="right arrow" class="E-p-2 E-transition-colors E-duration-300 E-border E-rounded-full rtl:-scale-x-100 E-border-gray-700 E-text-gray-200 lg:mx-6 hover:bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" class="E-w-6 E-h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
        `
      },
      {
        id: "card-testimonial",
        title: "Card",
        content: `
          <section class="text-gray-400 bg-gray-900 body-font"><div class="container px-5 py-24 mx-auto"><h1 class="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1><div class="flex flex-wrap -m-4"><div class="p-4 md:w-1/2 w-full"><div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded"><svg class="block w-5 h-5 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 975.04 975.04" xmlns="http://www.w3.org/2000/svg"><path d="m925.04 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.1-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zm-819 856.3c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2s30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"/></svg><p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p><a class="inline-flex items-center"><img alt="testimonial" src="https://dummyimage.com/106x106" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-4"><span class="title-font font-medium text-white">Holden Caulfield</span><span class="text-gray-500 text-sm">UI DEVELOPER</span></span></a></div></div><div class="p-4 md:w-1/2 w-full"><div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded"><svg class="block w-5 h-5 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 975.04 975.04" xmlns="http://www.w3.org/2000/svg"><path d="m925.04 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.1-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zm-819 856.3c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2s30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"/></svg><p class="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo,post-ironic heirloom try-hard pabst authentic iceland.</p><a class="inline-flex items-center"><img alt="testimonial" src="https://dummyimage.com/107x107" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"><span class="flex-grow flex flex-col pl-4"><span class="title-font font-medium text-white">Alper Kamu</span><span class="text-gray-500 text-sm">DESIGNER</span></span></a></div></div></div></div></section>
        `,
        code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font">
  <div class="E-container E-px-5 E-py-24 E-mx-auto">
    <h1 class="E-text-3xl E-font-medium E-title-font E-text-white E-mb-12 E-text-center">Testimonials</h1>
    <div class="E-flex E-flex-wrap E--m-4">
      <div class="E-p-4 md:w-1/2 E-w-full">
        <div class="E-h-full E-bg-gray-800 E-bg-opacity-40 E-p-8 E-rounded">
            <svg class="E-block E-w-5 E-h-5 E-text-gray-500 E-mb-4" fill="currentColor" viewBox="0 0 975.04 975.04" xmlns="http://www.w3.org/2000/svg">
                <path d="m925.04 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.1-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zm-819 856.3c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2s30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"/>
            </svg>
          <p class="E-leading-relaxed E-mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a class="E-inline-flex E-items-center">
            <img alt="testimonial" src="https://dummyimage.com/106x106" class="E-w-12 E-h-12 E-rounded-full E-flex-shrink-0 E-object-cover E-object-center">
            <span class="E-flex-grow E-flex E-flex-col E-pl-4">
              <span class="E-title-font E-font-medium E-text-white">Holden Caulfield</span>
              <span class="E-text-gray-500 E-text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div class="E-p-4 md:w-1/2 E-w-full">
        <div class="E-h-full E-bg-gray-800 E-bg-opacity-40 E-p-8 E-rounded">
            <svg class="E-block E-w-5 E-h-5 E-text-gray-500 E-mb-4" fill="currentColor" viewBox="0 0 975.04 975.04" xmlns="http://www.w3.org/2000/svg">
                <path d="m925.04 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.1-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zm-819 856.3c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2s30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"/>
            </svg>
          <p class="E-leading-relaxed E-mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a class="E-inline-flex E-items-center">
            <img alt="testimonial" src="https://dummyimage.com/107x107" class="E-w-12 E-h-12 E-rounded-full E-flex-shrink-0 E-object-cover E-object-center">
            <span class="E-flex-grow E-flex E-flex-col E-pl-4">
              <span class="E-title-font E-font-medium E-text-white">Alper Kamu</span>
              <span class="E-text-gray-500 E-text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
        `
      },
      {
        id: "centered-testimonial",
        title: "Centered",
        content: `
<section class="text-gray-400 bg-gray-900 body-font"><div class="container px-5 py-24 mx-auto"><div class="flex flex-wrap -m-4"><div class="lg:w-1/3 lg:mb-0 mb-6 p-4"><div class="h-full text-center"><img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/302x302"><p class="leading-relaxed">Edison bulb retro cloud bread echo park,helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p><span class="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span><h2 class="text-white font-medium title-font tracking-wider text-sm">ALEX CARY</h2><p class="text-gray-500">Senior Product Designer</p></div></div><div class="lg:w-1/3 lg:mb-0 mb-6 p-4"><div class="h-full text-center"><img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/302x302"><p class="leading-relaxed">Edison bulb retro cloud bread echo park,helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p><span class="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span><h2 class="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2><p class="text-gray-500">Senior Product Designer</p></div></div><div class="lg:w-1/3 lg:mb-0 mb-6 p-4"> <div class="h-full text-center"><img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/300x300"><p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut+1 kinfolk.Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p><span class="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span><h2 class="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2><p class="text-gray-500">UI Develeoper</p></div></div></div></div></section>
        `,
        code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font">
  <div class="E-container E-px-5 E-py-24 E-mx-auto">
    <div class="E-flex E-flex-wrap E--m-4">
      <div class="lg:w-1/3 lg:mb-0 E-mb-6 E-p-4">
        <div class="E-h-full E-text-center">
          <img alt="testimonial" class="E-w-20 E-h-20 E-mb-8 E-object-cover E-object-center E-rounded-full E-inline-block E-border-2 E-border-gray-800 E-bg-gray-800 E-bg-opacity-10" src="https://dummyimage.com/302x302">
          <p class="E-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="E-inline-block E-h-1 E-w-10 E-rounded E-bg-purple-500 E-mt-6 E-mb-4"></span>
          <h2 class="E-text-white E-font-medium E-title-font E-tracking-wider E-text-sm">ALEX CARY</h2>
          <p class="E-text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 E-mb-6 E-p-4">
        <div class="E-h-full E-text-center">
          <img alt="testimonial" class="E-w-20 E-h-20 E-mb-8 E-object-cover E-object-center E-rounded-full E-inline-block E-border-2 E-border-gray-800 E-bg-gray-800 E-bg-opacity-10" src="https://dummyimage.com/302x302">
          <p class="E-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="E-inline-block E-h-1 E-w-10 E-rounded E-bg-purple-500 E-mt-6 E-mb-4"></span>
          <h2 class="E-text-white E-font-medium E-title-font E-tracking-wider E-text-sm">HOLDEN CAULFIELD</h2>
          <p class="E-text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 E-mb-6 E-p-4">
        <div class="E-h-full E-text-center">
          <img alt="testimonial" class="E-w-20 E-h-20 E-mb-8 E-object-cover E-object-center E-rounded-full E-inline-block E-border-2 E-border-gray-800 E-bg-gray-800 E-bg-opacity-10" src="https://dummyimage.com/300x300">
          <p class="E-leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span class="E-inline-block E-h-1 E-w-10 E-rounded E-bg-purple-500 E-mt-6 E-mb-4"></span>
          <h2 class="E-text-white E-font-medium E-title-font E-tracking-wider E-text-sm">ALPER KAMU</h2>
          <p class="E-text-gray-500">UI Develeoper</p>
        </div>
      </div>
    </div>
  </div>
</section>
        `
      },
      {
        id: "simple",
        title: "Simple",
        content: `
<section class="text-gray-400 bg-gray-900 body-font"><div class="container px-5 py-24 mx-auto"><div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center"><svg class="inline-block w-8 h-8 text-gray-500 mb-8" fill="currentColor" viewBox="0 0 975.04 975.04" xmlns="http://www.w3.org/2000/svg"><path d="m925.04 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.1-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zm-819 856.3c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2s30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"/></svg><p class="leading-relaxed text-lg">Edison bulb retro cloud bread echo park,helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic,yr scenester sriracha forage franzen organic drinking vinegar.</p><span class="inline-block h-1 w-10 rounded bg-purple-500 mt-8 mb-6"></span><h2 class="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2><p class="text-gray-500">Senior Product Designer</p></div></div></section>
        `,
        code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font">
  <div class="E-container E-px-5 E-py-24 E-mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 E-w-full E-mx-auto E-text-center">
      <svg class="E-inline-block E-w-8 E-h-8 E-text-gray-500 E-mb-8" fill="currentColor" viewBox="0 0 975.04 975.04" xmlns="http://www.w3.org/2000/svg">
        <path d="m925.04 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.1-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zm-819 856.3c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2s30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"/>
      </svg>
      <p class="E-leading-relaxed E-text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
      <span class="E-inline-block E-h-1 E-w-10 E-rounded E-bg-purple-500 E-mt-8 E-mb-6"></span>
      <h2 class="E-text-white E-font-medium E-title-font E-tracking-wider E-text-sm">HOLDEN CAULFIELD</h2>
      <p class="E-text-gray-500">Senior Product Designer</p>
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
            id: "Testimonials",
            title: title,
            subtitle: "COMPONENT",
            description: description,
            items: Testimonials
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

