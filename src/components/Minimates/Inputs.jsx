
export const Inputs = ({ onCardClick, title, description, image }) => {
    const Inputs = [
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center">
  <input
    class="input h-[34px] text-[14px] text-white/60 w-[240px] bg-[#09090b] text-[#f4f4f5] px-3 py-1 rounded-lg border border-white/80 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out" name="text"
    type="text"
    placeholder="Enter your name..." />
</div>
        `,
        code: `
  <input
  class="E-h-9 E-text-3.5 E-text-white/60 E-w-60 E-bg-black E-text-white E-px-3 E-py-1 E-rounded-lg E-border E-border-white/80 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] E-transition-all E-duration-150 E-ease-in-out"
  name="text"
  type="text"
  placeholder="Enter your name..." />
        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center">
  <div class="flex h-[34px] text-[14px] text-white/60">
    <input
      class="input w-[200px] bg-[#09090b] text-[#f4f4f5] px-3 py-1 rounded-l-lg border border-white/80 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
      name="text"
      type="text"
      placeholder="Email"
    />
    <button
      class="text-[#f4f4f5] px-3 py-1 rounded-r-lg border-y border-r border-r-white/80 border-y-white/80 hover:bg-zinc-800/40 transition-all duration-150 easy-in-out"
    >
      Send
    </button>
  </div>
</div>
        `,
        code: `
    <div class="E-flex E-h-12 E-text-6 text-white/60">
        <input
          class="E-input E-w-48 E-bg-black E-text-white E-px-3 E-py-1 E-rounded-l-lg E-border E-border-white focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-900 E-transition-all E-duration-150 E-ease-in-out"
          name="text"
          type="text"
          placeholder="Email"
        />
        <button
          class="E-text-white E-px-3 E-py-1 E-rounded-r-lg E-border E-border-white  hover:bg-gray-700 E-transition-all E-duration-150 easy-in-out"
        >
          Send
        </button>
      </div>
      

        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center">
  <div class="flex flex-col">
    <span class="text-white/70 font-sans text-[14px] my-1">Password</span>
    <input
      placeholder="Enter your password..."
      class="px-3 w-[240px] text-[14px] bg-[#171616] text-white p-2 border border-white/80 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
      name="text"
      type="password"
    />
  </div>
</div>
        `,
        code: `
    <div class="E-flex E-flex-col">
        <span class="E-text-gray-400 E-font-sans E-text-3 E-my-1">Password</span>
        <input
          placeholder="Enter your password..."
          class="E-px-3 E-w-60 E-text-3 E-bg-gray-900 E-text-white E-p-2 E-border E-border-gray-600 E-rounded-md E-outline-none E-ring-1 E-ring-gray-300 focus:ring-blue-500"
          name="text"
          type="password"
        />
      </div>

        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center"><div class="bg-black p-4 rounded-lg max-w-[400px] border-2 border-gray-300"><label class="text-blue-400 text-lg font-semibold">URL </label><div class="relative mt-2 max-w-xs text-white"><div class="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2"><select class="text-md outline-none rounded-lg h-full px-2 cursor-pointer font-semibold tracking-wide bg-transparent"><option value="https://" label="https://" class="cursor-pointer bg-transparent text-gray-500 hover:text-white font-semibold tracking-wide"></option><option value="http://" label="http://" class="cursor-pointer bg-white text-gray-500 hover:text-white font-semibold"></option></select></div><input class="font-semibold tracking-wide w-full pl-[8rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-blue-400 focus:ring-1 focus:ring-inset focus:ring-blue-400 shadow-sm rounded-lg text-white" placeholder="example.com" type="text" /></div></div></div>
        `,
        code: `
  <div class="E-bg-black E-p-4 E-rounded-lg E-max-w-28 E-border-2 E-border-gray-300">
    <label class="E-text-blue-400 E-text-lg E-font-semibold"> URL </label>
    <div class="E-relative E-mt-2 E-max-w-xs E-text-white">
      <div class="E-absolute E-inset-y-0 E-left-3 E-my-auto E-h-6 E-flex E-items-center E-border-r E-pr-2">
        <select class="E-text-md E-outline-none E-rounded-lg E-h-full E-px-2 E-cursor-pointer E-font-semibold E-tracking-wide E-bg-transparent">
          <option
            value="https://"
            label="https://"
            class="E-cursor-pointer E-bg-transparent E-text-gray-500 hover:text-white E-font-semibold E-tracking-wide"></option>
          <option
            value="http://"
            label="http://"
            class="E-cursor-pointer E-bg-white E-text-gray-500 hover:text-white E-font-semibold"></option>
        </select>
      </div>
      <input
        class="E-font-semibold E-tracking-wide E-w-full E-pl-32 E-pr-3 E-py-2 E-appearance-none E-bg-transparent E-outline-none E-border E-focus:border-blue-400 focus:ring-1 focus:ring-inset focus:ring-blue-400 E-shadow-sm E-rounded-lg E-text-white"
        placeholder="example.com"
        type="text" />
    </div>
  </div>
        `
      }
    ];
  
    return (
      <>
        <div 
          className="h-[200px] sm:h-[250px] md:h-[300px] relative group cursor-pointer bg-white rounded-t-lg shadow-md overflow-hidden"
          onClick={() => onCardClick({
            id: "Inputs",
            title: title,
            subtitle: "COMPONENT",
            description: description,
            items: Inputs
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
  
  