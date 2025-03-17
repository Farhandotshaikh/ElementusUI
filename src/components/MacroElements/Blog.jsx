import blog from "../../assets/Blog.png";
export const Blog = ({ onCardClick, title, description, image }) => {
    const Blog = [
      {
        id: "Blog Card",
        title: "Blog Card",
        content: `
        <div class="relative mx-auto bg-white bg-opacity-20 bg-cover bg-center md:max-w-screen-lg"><img class="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1507373318898-766a0e260b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" /><div class="text-white lg:w-1/2"><div class="bg-blue-600 bg-opacity-95 p-5 opacity-90 backdrop-blur-lg lg:p-12"><p class="mb-4 font-serif font-light">August 03,2022</p><h2 class="font-serif text-4xl font-bold">Leading the next generation of innovators</h2><a href="#" class="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-blue-600">Read Now </a></div></div></div>
        `,
        code: `
  <div class="E-relative E-mx-auto E-bg-white E-bg-opacity-20 E-bg-cover E-bg-center md:max-w-screen">
    <img class="E-absolute E-h-full E-w-full E-object-cover" src="https://images.unsplash.com/photo-1507373318898-766a0e260b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    <div class="E-text-white lg:w-1/2">
      <div class="E-bg-blue-600 E-bg-opacity-95 E-p-5 E-opacity-90 E-backdrop-blur-lg lg:p-12">
        <p class="E-mb-4 E-font-serif E-font-light">August 03, 2022</p>
        <h2 class="E-font-serif E-text-4xl E-font-bold">Leading the next generation of innovators</h2>
        <a href="#" class="E-mt-6 E-inline-block E-rounded-xl E-border-2 E-px-10 E-py-3 E-font-semibold E-border-white hover:bg-white hover:text-blue-600"> Read Now </a>
      </div>
    </div>
</div>
      
        `
      },
      {
        id: "Single Blog Post",
        title: "Single Blog Post",
        content: `
        <section class="bg-gray-900"><div class="container px-6 py-10 mx-auto"><h1 class="text-2xl font-semibold capitalize lg:text-3xl text-white">From the blog</h1><div class="mt-8 lg:-mx-6 lg:flex lg:items-center"><img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""><div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 "><p class="text-sm text-blue-500 uppercase">category</p><a href="#" class="block mt-4 text-2xl font-semibold hover:underline text-white">All the features you want to know </a><p class="mt-3 text-sm text-gray-300 md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,laudantium quia tempore delect </p><a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a><div class="flex items-center mt-6"><img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""><div class="mx-4"><h1 class="text-sm text-gray-200">Amelia. Anderson</h1><p class="text-sm text-gray-400">Lead Developer</p></div></div></div></div></div></section>
        `,
        code: `
<section class="E-bg-gray-900">
        <div class="E-container E-px-6 E-py-10 E-mx-auto">
            <h1 class="E-text-2xl E-font-semibold E-capitalize lg:text-3xl E-text-white">From the blog</h1>
            <div class="E-mt-8 lg:-mx-6 E-lg:flex lg:items-center">
                <img class="E-object-cover E-w-full lg:mx-6 lg:w-1/2 E-rounded-xl E-h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt="">
                <div class="E-mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p class="E-text-sm E-text-blue-500 E-uppercase">category</p>
                    <a href="#" class="E-block E-mt-4 E-text-2xl E-font-semibold E-hover:underline E-text-white">
                        All the features you want to know
                    </a>
                    <p class="E-mt-3 E-text-sm E-text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>
                    <a href="#" class="E-inline-block E-mt-2 E-text-blue-500 E-underline hover:text-blue-400">Read more</a>
                    <div class="E-flex E-items-center E-mt-6">
                        <img class="E-object-cover E-object-center E-w-10 E-h-10 E-rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="">
                        <div class="E-mx-4">
                            <h1 class="E-text-sm E-text-gray-200">Amelia. Anderson</h1>
                            <p class="E-text-sm E-text-gray-400">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
        `
      },
      {
        id: "Card With Image",
        title: "Card With Image",
        content: `
        <article class="mx-2 my-10 max-w-screen-lg rounded-md border border-gray-100 text-gray-300 shadow-md md:mx-auto"><div class="flex flex-col md:flex-row"><div class="p-5 md:w-4/6 md:p-8"><span class="rounded-md bg-purple-400 px-2 py-1 text-xs uppercase text-white">Elementus</span><p class="mt-2 text-xl font-black md:mt-6 md:text-4xl">How to make comment card with Elementus?</p><p class="mt-3 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vero soluta voluptatum error non.</p><button class="mt-4 mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:bg-sky-500">Read More</button></div><div class="mx-auto hidden items-center px-5 md:flex md:p-8"><img class="rounded-md shadow-lg" src="https://images.unsplash.com/photo-1667235326880-324e1a51d40b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tbWVudHN8ZW58MHx8MHx8fDA%3D" alt="Shop image" /></div></div></article>
        `,
        code: `
  <article class="E-bg-black E-mx-2 E-my-5 E-max-w-screen-xl E-rounded-md E-border E-border-gray-100 E-text-gray-300 E-shadow-md md:mx-auto">
    <div class="E-flex E-flex-col md:flex-row">
      <div class="E-p-5 md:w-4/6 md:p-8">
        <span class="E-rounded-md E-bg-purple-400 E-px-2 E-py-1 E-text-xs E-uppercase E-text-white">Elementus</span>
        <p class="E-mt-2 E-text-xl E-font-black md:mt-6 md:text-4xl">How to make comment card with Elementus?</p>
        <p class="E-mt-3 E-text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vero soluta voluptatum error non.</p>
        <button class="E-mt-4 E-mr-2 E-flex E-items-center E-justify-center E-rounded-md E-bg-blue-400 E-px-8 E-py-2 E-text-center E-text-white E-duration-150 md:mb-4 hover:translate-y-1 hover:bg-blue-500">Read More</button>
      </div>
      <div class="E-mx-auto E-hidden E-items-center E-px-5 E-md:flex md:p-8">
        <img class="E-rounded-md E-shadow-lg  " src="https://images.unsplash.com/photo-1667235326880-324e1a51d40b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tbWVudHN8ZW58MHx8MHx8fDA%3D" alt="Shop image" />
      </div>
    </div>
</article>
      
        `
      }
    ];
  
    return (
      <>
        <div 
          className="h-52 sm:h-64 md:h-72 relative group cursor-pointer bg-white rounded-t-lg shadow-md overflow-hidden"
          onClick={() => onCardClick({
            id: "Blog",
            title: title,
            subtitle: "COMPONENT",
            description: description,
            items: Blog
          })}
        >
          <div className="absolute inset-0">
            <img
              src={blog}
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
  
  