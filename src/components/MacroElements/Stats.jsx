import stats from '../../assets/Stats.png'
export const Stats = ({ onCardClick, title, description, image }) => {
    const Stats = [
      {
        id: "Simple",
        title: "Simple",
        content: `
<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">35</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">4</h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
  </div>
</section>
        `,
        code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font">
  <div class="E-container E-px-5 E-py-24 E-mx-auto">
    <div class="E-flex E-flex-wrap E--m-4 E-text-center">
      <div class="E-p-4 sm:w-1/4 w-1/2">
        <h2 class="E-title-font E-font-medium sm:text-4xl E-text-3xl E-text-white">2.7K</h2>
        <p class="E-leading-relaxed">Users</p>
      </div>
      <div class="E-p-4 sm:w-1/4 w-1/2">
        <h2 class="E-title-font E-font-medium sm:text-4xl E-text-3xl E-text-white">1.8K</h2>
        <p class="E-leading-relaxed">Subscribes</p>
      </div>
      <div class="E-p-4 sm:w-1/4 w-1/2">
        <h2 class="E-title-font E-font-medium sm:text-4xl E-text-3xl E-text-white">35</h2>
        <p class="E-leading-relaxed">Downloads</p>
      </div>
      <div class="E-p-4 sm:w-1/4 w-1/2">
        <h2 class="E-title-font E-font-medium sm:text-4xl E-text-3xl E-text-white">4</h2>
        <p class="E-leading-relaxed">Products</p>
      </div>
    </div>
  </div>
</section>
        `
      },
      {
        id: "Stats 2",
        title: "With Image",
        content: `
<section class="text-gray-400 bg-gray-900 body-font"><div class="container px-5 py-24 mx-auto flex flex-wrap"><div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10"><div class="w-full sm:p-4 px-4 mb-6"><h1 class="title-font font-medium text-xl mb-2 text-white">Moon hashtag pop-up try-hard offal truffaut</h1><div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub,keytar neutra sustainable fingerstache kickstarter.</div></div><div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2"><h2 class="title-font font-medium text-3xl text-white">2.7K</h2><p class="leading-relaxed">Users</p></div><div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2"><h2 class="title-font font-medium text-3xl text-white">1.8K</h2><p class="leading-relaxed">Subscribes</p></div><div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2"><h2 class="title-font font-medium text-3xl text-white">35</h2><p class="leading-relaxed">Downloads</p></div><div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2"><h2 class="title-font font-medium text-3xl text-white">4</h2><p class="leading-relaxed">Products</p></div></div><div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"><img class="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats"></div></div></section>
        `,
        code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font">
  <div class="E-container E-px-5 E-py-24 E-mx-auto E-flex E-flex-wrap">
    <div class="E-flex E-flex-wrap E--m-4 E-mt-auto E-mb-auto lg:w-1/2 sm:w-2/3 E-content-start sm:pr-10">
      <div class="E-w-full sm:p-4 E-px-4 E-mb-6">
        <h1 class="E-title-font E-font-medium E-text-xl E-mb-2 E-text-white">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="E-leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div class="E-p-4 sm:w-1/2 lg:w-1/4 E-w-1/2">
        <h2 class="E-title-font E-font-medium E-text-3xl E-text-white">2.7K</h2>
        <p class="E-leading-relaxed">Users</p>
      </div>
      <div class="E-p-4 sm:w-1/2 lg:w-1/4 E-w-1/2">
        <h2 class="E-title-font E-font-medium E-text-3xl E-text-white">1.8K</h2>
        <p class="E-leading-relaxed">Subscribes</p>
      </div>
      <div class="E-p-4 sm:w-1/2 lg:w-1/4 E-w-1/2">
        <h2 class="E-title-font E-font-medium E-text-3xl E-text-white">35</h2>
        <p class="E-leading-relaxed">Downloads</p>
      </div>
      <div class="E-p-4 sm:w-1/2 lg:w-1/4 E-w-1/2">
        <h2 class="E-title-font E-font-medium E-text-3xl E-text-white">4</h2>
        <p class="E-leading-relaxed">Products</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 E-w-full E-rounded-lg E-overflow-hidden E-mt-6 sm:mt-0">
      <img class="object-cover object-center E-w-full E-h-full" src="https://dummyimage.com/600x300" alt="stats">
    </div>
  </div>
</section>
        `
      },
      {
        id: "Stats 3",
        title: "Modern",
        content: `
          <section class="text-gray-400 bg-gray-900 body-font"><div class="container px-5 py-24 mx-auto"><div class="flex flex-col text-center w-full mb-20"><h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1><p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify,subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p></div><div class="flex flex-wrap -m-4 text-center"><div class="p-4 md:w-1/4 sm:w-1/2 w-full"><div class="border-2 border-gray-800 px-4 py-6 rounded-lg"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-green-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m-4-5v9"></path><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path></svg><h2 class="title-font font-medium text-3xl text-white">2.7K</h2><p class="leading-relaxed">Downloads</p></div></div><div class="p-4 md:w-1/4 sm:w-1/2 w-full"><div class="border-2 border-gray-800 px-4 py-6 rounded-lg"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-green-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path></svg><h2 class="title-font font-medium text-3xl text-white">1.3K</h2><p class="leading-relaxed">Users</p></div></div><div class="p-4 md:w-1/4 sm:w-1/2 w-full"><div class="border-2 border-gray-800 px-4 py-6 rounded-lg"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-green-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0118 0v6"></path><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path></svg><h2 class="title-font font-medium text-3xl text-white">74</h2><p class="leading-relaxed">Files</p></div></div><div class="p-4 md:w-1/4 sm:w-1/2 w-full"><div class="border-2 border-gray-800 px-4 py-6 rounded-lg"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-green-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><h2 class="title-font font-medium text-3xl text-white">46</h2><p class="leading-relaxed">Places</p></div></div></div></div></section>
        `,
        code: `
<section class="E-text-gray-400 E-bg-gray-900 E-body-font">
  <div class="E-container E-px-5 E-py-24 E-mx-auto">
    <div class="E-flex E-flex-col E-text-center E-w-full E-mb-20">
      <h1 class="sm:text-3xl E-text-2xl E-font-medium E-title-font E-mb-4 E-text-white">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 E-mx-auto E-leading-relaxed E-text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="E-flex E-flex-wrap -E-m-4 E-text-center">
      <div class="E-p-4 md:w-1/4 sm:w-1/2 E-w-full">
        <div class="E-border-2 E-border-gray-800 E-px-4 E-py-6 E-rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="E-text-green-400 E-w-12 E-h-12 E-mb-3 E-inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="E-title-font E-font-medium E-text-3xl E-text-white">2.7K</h2>
          <p class="E-leading-relaxed">Downloads</p>
        </div>
      </div>
      <div class="E-p-4 md:w-1/4 sm:w-1/2 E-w-full">
        <div class="E-border-2 E-border-gray-800 E-px-4 E-py-6 E-rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="E-text-green-400 E-w-12 E-h-12 E-mb-3 E-inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="E-title-font E-font-medium E-text-3xl E-text-white">1.3K</h2>
          <p class="E-leading-relaxed">Users</p>
        </div>
      </div>
      <div class="E-p-4 md:w-1/4 sm:w-1/2 E-w-full">
        <div class="E-border-2 E-border-gray-800 E-px-4 E-py-6 E-rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="E-text-green-400 E-w-12 E-h-12 E-mb-3 E-inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="E-title-font E-font-medium E-text-3xl E-text-white">74</h2>
          <p class="E-leading-relaxed">Files</p>
        </div>
      </div>
      <div class="E-p-4 md:w-1/4 sm:w-1/2 E-w-full">
        <div class="E-border-2 E-border-gray-800 E-px-4 E-py-6 E-rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="E-text-green-400 E-w-12 E-h-12 E-mb-3 E-inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 class="E-title-font E-font-medium E-text-3xl E-text-white">46</h2>
          <p class="E-leading-relaxed">Places</p>
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
            id: "STats",
            title: title,
            subtitle: "COMPONENT",
            description: description,
            items: Stats
          })}
        >
          <div className="absolute inset-0">
            <img
              src={stats}
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
  
  