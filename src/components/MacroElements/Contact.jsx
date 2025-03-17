import contact from '../../assets/Contact.png'
export const Contacts = ({ onCardClick, title, description, image }) => {
    const Contacts = [
      {
        id: "With Map",
        title: "With Map",
        content: `
<section class="text-gray-400 bg-gray-900 body-font relative"><div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"><div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"><iframe width="100%" height="100%" title="map" class="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe><div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"><div class="lg:w-1/2 px-6"><h2 class="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2><p class="mt-1">Photo booth tattooed prism,portland taiyaki hoodie neutra typewriter</p></div><div class="lg:w-1/2 px-6 mt-4 lg:mt-0"><h2 class="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2><a class="text-purple-400 leading-relaxed">example@email.com</a><h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2><p class="leading-relaxed">123-456-7890</p></div></div></div><div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"><h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2><p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park,banjo fashion axe</p><div class="relative mb-4"><label for="name" class="leading-7 text-sm text-gray-400">Name</label><input type="text" id="name" name="name" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative mb-4"><label for="email" class="leading-7 text-sm text-gray-400">Email</label><input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative mb-4"><label for="message" class="leading-7 text-sm text-gray-400">Message</label><textarea id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea></div><button class="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button><p class="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p></div></div></section>
        `,
        code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font E-relative">
  <div class="E-container E-px-5 E-py-24 E-mx-auto E-flex sm:flex-nowrap E-flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 E-bg-gray-900 E-rounded-lg E-overflow-hidden sm:mr-10 E-p-10 E-flex E-items-end E-justify-start E-relative">
      <iframe width="100%" height="100%" title="map" class="E-absolute E-inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe>
      <div class="E-bg-gray-900 E-relative E-flex E-flex-wrap E-py-6 E-rounded E-shadow-md">
        <div class="lg:w-1/2 E-px-6">
          <h2 class="E-title-font E-font-semibold E-text-white E-tracking-widest E-text-xs">ADDRESS</h2>
          <p class="E-mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div class="lg:w-1/2 E-px-6 E-mt-4 lg:mt-0">
          <h2 class="E-title-font E-font-semibold E-text-white E-tracking-widest E-text-xs">EMAIL</h2>
          <a class="E-text-purple-400 E-leading-relaxed">example@email.com</a>
          <h2 class="E-title-font E-font-semibold E-text-white E-tracking-widest E-text-xs E-mt-4">PHONE</h2>
          <p class="E-leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 E-flex E-flex-col md:ml-auto E-w-full md:py-8 E-mt-8 md:mt-0">
      <h2 class="E-text-white E-text-lg E-mb-1 E-font-medium E-title-font">Feedback</h2>
      <p class="E-leading-relaxed E-mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="E-relative E-mb-4">
        <label for="name" class="E-leading-7 E-text-sm E-text-gray-400">Name</label>
        <input type="text" id="name" name="name" class="E-w-full E-bg-gray-800 E-rounded E-border E-border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 E-text-base E-outline-none E-text-gray-100 E-py-1 E-px-3 E-leading-8 E-transition-colors E-duration-200 E-ease-in-out">
      </div>
      <div class="E-relative E-mb-4">
        <label for="email" class="E-leading-7 E-text-sm E-text-gray-400">Email</label>
        <input type="email" id="email" name="email" class="E-w-full E-bg-gray-800 E-rounded E-border E-border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 E-text-base E-outline-none E-text-gray-100 E-py-1 E-px-3 E-leading-8 E-transition-colors E-duration-200 E-ease-in-out">
      </div>
      <div class="E-relative E-mb-4">
        <label for="message" class="E-leading-7 E-text-sm E-text-gray-400">Message</label>
        <textarea id="message" name="message" class="E-w-full E-bg-gray-800 E-rounded E-border E-border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 E-h-32 E-text-base E-outline-none E-text-gray-100 E-py-1 E-px-3 E-resize-none E-leading-6 E-transition-colors E-duration-200 E-ease-in-out"></textarea>
      </div>
      <button class="E-text-white E-bg-purple-500 E-border-0 E-py-2 E-px-6 focus:outline-none hover:bg-purple-600 E-rounded E-text-lg">Button</button>
      <p class="E-text-xs E-text-gray-400 E-text-opacity-90 E-mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
        `
      },
      {
        id: "Stores Locations",
        title: "Stores Locations",
        content: `
<section class="bg-gray-900"><div class="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3"><div><p class="font-medium text-blue-400">Our locations</p><h1 class="mt-2 text-2xl font-semibold md:text-3xl text-white">Visit our stores</h1><p class="mt-3 text-gray-400">Find us at these locations.</p></div><div class="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2"><div><h2 class="font-medium text-white">Melbourne</h2><p class="mt-2 text-gray-400">100 Flinders Street <br>Melbourne VIC 3000 AU</p></div><div><h2 class="font-medium text-white">London</h2><p class="mt-2 text-gray-400">100 Oxford Street <br>London W1D 1LL UK</p></div><div><h2 class="font-medium text-white">Sydney</h2><p class="mt-2 text-gray-400">100 Flinders Street <br>Melbourne VIC 3000 AU</p></div><div><h2 class="font-medium text-white">San Francisco</h2><p class="mt-2 text-gray-400">100 Flinders Street <br>Melbourne VIC 3000 AU</p></div><div><h2 class="font-medium text-white">Byron Bay</h2><p class="mt-2 text-gray-400">100 Flinders Street <br>Melbourne VIC 3000 AU</p></div><div><h2 class="font-medium text-gray-200">Sweden</h2><p class="mt-2 text-gray-400">100 Flinders Street <br>Melbourne VIC 3000 AU</p></div></div></div></section>
        `,
        code: `
<section class="E-bg-gray-900">
    <div class="E-container E-grid E-grid-cols-1 E-gap-10 E-px-6 E-py-12 E-mx-auto lg:grid-cols-3">
        <div>
            <p class="E-font-medium E-text-blue-400">Our locations</p>
            <h1 class="E-mt-2 E-text-2xl E-font-semibold  md:text-3xl E-text-white">Visit our stores</h1>
            <p class="E-mt-3 E-text-gray-400">Find us at these locations.</p>
        </div>
        <div class="E-grid E-grid-cols-1 E-gap-12 lg:col-span-2 sm:grid-cols-2">
            <div>
                <h2 class="E-font-medium E-text-white">Melbourne</h2>
                <p class="E-mt-2 E-text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
            </div>
            <div>
                <h2 class="E-font-medium E-text-white">London</h2>
                <p class="E-mt-2 E-text-gray-400">100 Oxford Street <br> London W1D 1LL UK</p>
            </div>
            <div>
                <h2 class="E-font-medium E-text-white">Sydney</h2>
                <p class="E-mt-2 E-text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
            </div>
            <div>
                <h2 class="E-font-medium E-text-white">San Francisco</h2>
                <p class="E-mt-2 E-text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
            </div>
            <div>
                <h2 class="E-font-medium E-text-white">Byron Bay</h2>
                <p class="E-mt-2 E-text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
            </div>
            <div>
                <h2 class="E-font-medium E-text-gray-200">Sweden</h2>
                <p class="E-mt-2 E-text-gray-400">100 Flinders Street <br> Melbourne VIC 3000 AU</p>
            </div>
        </div>
    </div>
</section>
        `
      },
      {
        id: "Map with form",
        title: "Map with form",
        content: `
<section class="text-gray-400 bg-gray-900 body-font relative"><div class="absolute inset-0 bg-gray-900"><iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe></div><div class="container px-5 py-24 mx-auto flex"><div class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10"><h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2><p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park,banjo fashion axe</p><div class="relative mb-4"><label for="email" class="leading-7 text-sm text-gray-400">Email</label><input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative mb-4"><label for="message" class="leading-7 text-sm text-gray-400">Message</label><textarea id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea></div><button class="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button><p class="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p></div></div></section>
        `,
        code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font E-relative">
  <div class="E-absolute E-inset-0 E-bg-gray-900">
    <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe>
  </div>
  <div class="E-container E-px-5 E-py-24 E-mx-auto E-flex">
    <div class="lg:w-1/3 md:w-1/2 E-bg-gray-900 E-shadow-md E-rounded-lg E-p-8 E-flex E-flex-col md:ml-auto E-w-full E-mt-10 md:mt-0 E-relative E-z-10">
      <h2 class="E-text-white E-text-lg E-mb-1 E-font-medium E-title-font">Feedback</h2>
      <p class="E-leading-relaxed E-mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="E-relative E-mb-4">
        <label for="email" class="E-leading-7 E-text-sm E-text-gray-400">Email</label>
        <input type="email" id="email" name="email" class="E-w-full E-bg-gray-800 E-rounded E-border E-border-gray-700 focus:E-border-purple-500 focus:E-ring-2 focus:E-ring-purple-900 E-text-base E-outline-none E-text-gray-100 E-py-1 E-px-3 E-leading-8 E-transition-colors E-duration-200 E-ease-in-out">
      </div>
      <div class="E-relative E-mb-4">
        <label for="message" class="E-leading-7 E-text-sm E-text-gray-400">Message</label>
        <textarea id="message" name="message" class="E-w-full E-bg-gray-800 E-rounded E-border E-border-gray-700 focus:E-border-purple-500 focus:E-ring-2 focus:E-ring-purple-900 E-h-32 E-text-base E-outline-none E-text-gray-100 E-py-1 E-px-3 E-resize-none E-leading-6 E-transition-colors E-duration-200 E-ease-in-out"></textarea>
      </div>
      <button class="E-text-white E-bg-purple-500 E-border-0 E-py-2 E-px-6 focus:outline-none hover:bg-purple-600 E-rounded E-text-lg">Button</button>
      <p class="E-text-xs E-text-gray-400 E-text-opacity-90 E-mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
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
            id: "Contacts",
            title: title,
            subtitle: "COMPONENT",
            description: description,
            items: Contacts
          })}
        >
          <div className="absolute inset-0">
            <img
              src={contact}
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
  
  