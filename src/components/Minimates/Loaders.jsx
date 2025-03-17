

export const Loaders = ({ onCardClick, title, description, image }) => {
    const Loaders = [
      {
        id: "",
        title: "",
        content: `

      <div class="flex items-center justify-center min-h-screen">
        <div class="relative">
          <div class="relative w-20 h-2">
            <div
              class="absolute w-full h-full rounded-full border-2 border-blue-300 animate-spin border-r-cyan-400 border-b-cyan-400"
              style="animation-duration: 3s;"></div>
            <div class="absolute w-full h-full rounded-full border-2 border-blue-300 animate-spin border-t-cyan-400" style="animation-duration: 2s; animation-direction: reverse;"></div>
          </div>
          <div class="absolute inset-0 bg-gradient-to-tr from-[#0ff] via-transparent to-[#0ff] animate-spin rounded-full blur-sm"></div>
        </div>
      </div>

        `,
        code: `
  <div class="E-flex E-items-center E-justify-center E-min-h-screen">
    <div class="E-relative">
      <div class="E-relative E-w-20 E-h-2">
        <div
          class="E-absolute E-w-full E-h-full E-rounded-full E-border-2 E-border-blue-300 E-animate-spin"
          style="animation-duration: 3s;border-right-color: aqua;border-bottom-color: aqua;"></div>
        <div class="E-absolute E-w-full E-h-full E-rounded-full E-border-2 E-border-blue-300 E-animate-spin" style="animation-duration: 2s; animation-direction: reverse;border-top-color: aqua;"></div>
      </div>
      <div class="E-absolute E-inset-0  E-animate-spin E-rounded-full E-blur-sm" style="background-image: linear-gradient(to top right, rgba(0, 255, 255, 0.444), transparent, rgba(0, 255, 255, 0.553));"></div>
    </div>
  </div>
        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center items-center">
  <div class="animate-spin rounded-full h-10 w-12 border-t-2 border-b-2 border-blue-600"></div>
</div>
        `,
        code: `
<div class="E-flex E-justify-center E-items-center">
  <div class="E-animate-spin E-rounded-full E-h-10 E-w-12 E-border-t-2 E-border-b-2 E-border-blue-600"></div>
</div>
        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center space-x-2">
  <div class="animate-pulse rounded-full bg-gray-500 h-12 w-12"></div>
  <div class="space-y-2">
    <div class="animate-pulse rounded-md bg-gray-500 h-4 w-[200px]"> </div>
    <div class="animate-pulse rounded-md bg-gray-500 h-4 w-[170px]"> </div>
  </div>
</div>
        `,
        code: `
<div class="E-flex E-items-center E-px-2 E-mx-2">
  <div class="E-animate-pulse E-rounded-full E-bg-gray-500 E-h-12 E-w-12 E-mr-2"></div>
  <div class="E-py-2 E-my-2">
    <div class="E-animate-pulse E-rounded-md E-bg-gray-500 E-h-4 E-my-2 E-w-56"> </div>
    <div class="E-animate-pulse E-rounded-md E-bg-gray-500 E-h-4 E-my-2 E-w-48"> </div>
  </div>
</div>
    
        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex-col gap-4 w-full flex items-center justify-center">
  <div class="w-20 h-16 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
    <div class="w-10 h-10 border-4 border-transparent text-cyan-400 text-2xl animate-spin flex items-center justify-center border-t-cyan-400 rounded-full"></div>
  </div>
</div>
        `,
        code: `
<div class="E-flex-col E-gap-4 E-w-full E-flex E-items-center E-justify-center">
  <div class="E-w-20 E-h-16 E-border-4 E-border-transparent E-text-blue-600 E-text-4xl E-animate-spin E-flex E-items-center E-justify-center E-rounded-full" style="border-top-color: #2563eb;">
    <div class="E-w-10 E-h-10 E-border-4 E-border-transparent E-text-blue-300 E-text-2xl E-animate-spin E-flex E-items-center E-justify-center E-rounded-full" style="border-top-color: #93c5fd;"></div>
  </div>
</div>
        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center">
    <div class="flex flex-row gap-2">
    <div style="background-image: conic-gradient(from 0deg, blue, blue 30%, cyan 50%, cyan 60%, cyan 70%);" class="w-14 h-14 rounded-full bg-radial bg-gradient-to-tr animate-spin [animation-delay:.7s]"></div>
    </div>
</div>
        `,
        code: `
<div class="E-flex E-flex-row E-gap-2">
  <div style="background-image: conic-gradient(from 0deg, blue, blue 30%, cyan 50%, cyan 60%, cyan 70%);" class="E-w-14 E-h-14 E-rounded-full E-bg-radial E-bg-gradient-to-tr E-animate-spin [animation-delay:.7s]"></div>
</div>
        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center items-center h-48">
  <div
    class="p-3 animate-spin  bg-gradient-to-bl from-pink-400 via-purple-400 to-blue-600 h-20 w-20 aspect-square rounded-full" style="filter: drop-shadow(12px 12px 12px #222121);"
  >
    <div class="rounded-full h-full w-full  bg-black" style="filter: blur(2px);"></div>
  </div>
</div>

        `,
        code: `
<div
  class="E-p-3 E-animate-spin  E-bg-gradient-to-bl E-from-pink-400 E-via-purple-400 E-to-blue-600 E-h-20 E-w-20 E-aspect-square E-rounded-full" style="filter: drop-shadow(12px 12px 12px #222121);"
>
  <div class="E-rounded-full E-h-full E-w-full  E-bg-black" style="filter: blur(2px);"></div>
</div>
        `
      }
    ];
  
    return (
      <>
        <div 
        className="h-52 sm:h-64 md:h-72 relative group cursor-pointer bg-white rounded-t-lg shadow-md overflow-hidden"
        onClick={() => onCardClick({
          id: "Loaders",
          title: title,
          subtitle: "COMPONENT",
          description: description,
          items: Loaders
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