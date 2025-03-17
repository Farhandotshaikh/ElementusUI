
export const Hero = ({ onCardClick, title, description, image }) => {
    const Hero = [
      {
        id: "Hero with Image",
        title: "Hero with Image",
        content: `
<div class="container px-6 py-16 mx-auto text-center"><div class="max-w-lg mx-auto"><h1 class="text-3xl font-semibold  text-white lg:text-4xl">Building Your Next App with our Awesome components</h1><p class="mt-6  text-gray-300">Lorem ipsum dolor sit,amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.</p><button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">Start 14-Day free trial </button><p class="mt-3 text-sm text-gray-400 ">No credit card required</p></div><div class="flex justify-center mt-10"><img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div></div>
        `,
        code: `
<div class="E-container E-px-6 E-py-16 E-mx-auto E-text-center">
        <div class="E-max-w-lg E-mx-auto">
            <h1 class="E-text-3xl E-font-semibold  E-text-white lg:text-4xl">Building Your Next App with our Awesome components</h1>
            <p class="E-mt-6  E-text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                obcaecati illum mollitia.</p>
            <button class="E-px-5 E-py-2 E-mt-6 E-text-sm E-font-medium E-leading-5 E-text-center E-text-white E-capitalize E-bg-blue-600 E-rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                Start 14-Day free trial
            </button>
            <p class="E-mt-3 E-text-sm E-text-gray-400 ">No credit card required</p>
        </div>
        <div class="E-flex E-justify-center E-mt-10">
            <img class="E-object-cover E-w-full E-h-96 E-rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
</div>
        `
      },
      {
        id: "Left",
        title: "Left Align",
        content: `
<section class="text-gray-300 body-font"><div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"><div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-500">Before they sold out <br class="hidden lg:inline-block">readymade gluten </h1><p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p><div class="flex justify-center"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button><button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button></div></div><div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"><img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></div></div></section>
        `,
        code: `
<section class="E-text-gray-300 E-body-font">
  <div class="E-container E-mx-auto E-flex E-px-5 E-py-24 md:flex-row E-flex-col E-items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 E-flex E-flex-col md:items-start md:text-left E-mb-16 md:mb-0 E-items-center E-text-center">
      <h1 class="E-title-font sm:text-4xl E-text-3xl E-mb-4 E-font-medium E-text-gray-500">Before they sold out
        <br class="hidden lg:inline-block">readymade gluten
      </h1>
      <p class="E-mb-8 E-leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="E-flex E-justify-center">
        <button class="E-inline-flex E-text-white E-bg-indigo-500 E-border-0 E-py-2 E-px-6 focus:outline-none hover:bg-indigo-600 E-rounded E-text-lg">Button</button>
        <button class="E-ml-4 E-inline-flex E-text-gray-700 E-bg-gray-100 E-border-0 E-py-2 E-px-6 focus:outline-none hover:bg-gray-200 E-rounded E-text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 E-w-5/6">
      <img class="E-object-cover E-object-center E-rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
  </div>
</section>
        `
      },
      {
        id: "Centered",
        title: "Centered",
        content: `
<section class="text-gray-300 body-font"><div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"><img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"><div class="text-center lg:w-2/3 w-full"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-500">Microdosing synth tattooed vexillologist</h1><p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY,kale chips beard jianbing tousled. Chambray dreamcatcher trust fund,kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p><div class="flex justify-center"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button><button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button></div></div></div></section>
        `,
        code: `
<section class="E-text-gray-300 E-body-font">
  <div class="E-container E-mx-auto E-flex E-px-5 E-py-24 E-items-center E-justify-center E-flex-col">
    <img class="lg:w-2/6 md:w-3/6 E-w-5/6 E-mb-10 E-object-cover E-object-center E-rounded" alt="hero" src="https://dummyimage.com/720x600">
    <div class="E-text-center lg:w-2/3 E-w-full">
      <h1 class="E-title-font sm:text-4xl E-text-3xl E-mb-4 E-font-medium E-text-gray-500">Microdosing synth tattooed vexillologist</h1>
      <p class="E-mb-8 E-leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      <div class="E-flex E-justify-center">
        <button class="E-inline-flex E-text-white E-bg-indigo-500 E-border-0 E-py-2 E-px-6 focus:outline-none hover:bg-indigo-600 E-rounded E-text-lg">Button</button>
        <button class="E-ml-4 E-inline-flex E-text-gray-700 E-bg-gray-100 E-border-0 E-py-2 E-px-6 focus:outline-none hover:bg-gray-200 E-rounded E-text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
        `
      },
      {
        id: "Slider",
        title: "Slider",
        content: `
<div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center"><div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2"><div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col"><button class="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button><button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button><button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button><button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button></div><div class="max-w-lg lg:mx-12 lg:order-2"><h1 class="text-3xl font-semibold tracking-wide  text-white lg:text-4xl">The best Apple Watch apps</h1><p class="mt-4  text-gray-300">Lorem ipsum,dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p><div class="mt-6"><a href="#" class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">Download from App Store</a></div></div></div><div class="flex items-center justify-center w-full h-96 lg:w-1/2"><img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo"></div></div>
        `,
        code: `
<div class="E-container E-flex E-flex-col E-px-6 E-py-4 E-mx-auto E-space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
  <div class="E-flex E-flex-col E-items-center E-w-full lg:flex-row lg:w-1/2">
      <div class="E-flex E-justify-center E-order-2 E-mt-6 lg:E-mt-0 lg:space-y-3 lg:flex-col">
          <button class="E-w-3 E-h-3 E-mx-2 E-bg-blue-500 E-rounded-full lg:mx-0 focus:outline-none"></button>
          <button class="E-w-3 E-h-3 E-mx-2 E-bg-gray-300 E-rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
          <button class="E-w-3 E-h-3 E-mx-2 E-bg-gray-300 E-rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
          <button class="E-w-3 E-h-3 E-mx-2 E-bg-gray-300 E-rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
      </div>
      <div class="E-max-w-lg lg:mx-12 lg:order-2">
          <h1 class="E-text-3xl E-font-semibold E-tracking-wide  E-text-white lg:text-4xl">The best Apple Watch apps</h1>
          <p class="E-mt-4  E-text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
          <div class="E-mt-6">
              <a href="#" class="E-px-6 E-py-3  E-mt-6 E-text-sm E-font-medium E-leading-5 E-text-center E-text-white E-capitalize E-bg-blue-600 E-rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">Download from App Store</a>
          </div>
      </div>
  </div>
  <div class="E-flex E-items-center E-justify-center E-w-full E-h-96 lg:w-1/2">
      <img class="E-object-cover E-w-full E-h-full E-max-w-2xl E-rounded-md" src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="apple watch photo">
  </div>
</div>
        `
      }
    ];
  
    return (
      <>
        <div 
          className="h-52 sm:h-64 md:h-72 relative group cursor-pointer bg-white rounded-t-lg shadow-md overflow-hidden"
          onClick={() => onCardClick({
            id: "Hero",
            title: title,
            subtitle: "COMPONENT",
            description: description,
            items: Hero
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