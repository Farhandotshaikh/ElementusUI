import button from "../../assets/Button.png";
export const Button = ({ onCardClick, title, description, image }) => {
  const buttons = [
    {
      id: "gradient-button",
      title: "Gradient Button",
      content: `
      <div class="flex justify-center">
        <button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Gradient Button
        </button>
      </div>
      `,
      code: `
  <button class="E-bg-gradient-to-r E-from-purple-500 E-to-pink-500 hover:from-purple-600 hover:to-pink-600 E-text-white E-font-bold E-py-2 E-px-4 E-rounded E-transition E-duration-300">
    Gradient Button
  </button>
      `
    },
    {
      id: "outline-button",
      title: "Outline Button",
      content: `
      <div class="flex justify-center">
        <button class="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded transition duration-300">
          Outline Button
        </button>
      </div>
      `,
      code: `
  <button class="E-border-2 E-border-blue-500 E-text-blue-500 hover:bg-blue-500 hover:text-white E-font-bold E-py-2 E-px-4 E-rounded E-transition E-duration-300">
    Outline Button
  </button>

      `
    },
    {
      id: "icon-button",
      title: "Icon Button",
      content: `
      <div class="flex justify-center">
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
          <span>Icon Button</span>
        </button>
      </div>
      `,
      code: `
<button class="E-bg-green-500 hover:bg-green-600 E-text-white E-font-bold E-py-2 E-px-4 E-rounded E-inline-flex E-items-center E-transition E-duration-300">
  <svg xmlns="http://www.w3.org/2000/svg" class="E-h-5 E-w-5 E-mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
  </svg>
  <span>Icon Button</span>
</button>
      `
    },
    {
      id: "Bouncy Button",
      title: "Bouncy Button",
      content: `
<div class="flex justify-center">
  <button class="btn animate-bounce rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-bold text-blue-900 transition-colors duration-300 hover:from-blue-400 hover:to-teal-500 hover:text-white hover:shadow-lg">Hover Me</button>
</div>
      `,
      code: `
<button class="E-animate-bounce E-rounded-full E-bg-gradient-to-r E-from-green-400 E-to-blue-500 E-px-4 E-py-2 E-font-bold E-text-blue-900 E-transition-colors E-duration-300 hover:from-blue-400 hover:to-teal-500 hover:text-white hover:shadow-lg">Hover Me</button>
      `
    },
    {
      id: "Bouncy Button #2",
      title: "Bouncy Button #2",
      content: `
<div class="flex justify-center">
  <button class="hover:animate-bounce relative overflow-hidden bg-cyan-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:scale-105 active:bg-gray-300 focus:outline-none">
    <span class="absolute inset-0 flex items-center justify-center">
    </span>
    Button
  </button>
</div>
      `,
      code: `
<button class="hover:animate-bounce E-relative E-overflow-hidden E-bg-cyan-500 E-text-black E-font-semibold E-py-2 E-px-4 E-rounded-lg E-shadow-md hover:scale-105 active:bg-gray-300 focus:outline-none">
  <span class="E-absolute E-inset-0 E-flex E-items-center E-justify-center">
  </span>
  Button
</button>
      `
    },
    
  ];

  return (
    <>
      <div 
        className="h-[200px] sm:h-[250px] md:h-[300px] relative group cursor-pointer bg-white rounded-t-lg shadow-md overflow-hidden"
        onClick={() => onCardClick({
          id: "buttons",
          title: title,
          subtitle: "COMPONENT",
          description: description,
          items: buttons
        })}
      >
        <div className="absolute inset-0">
          <img
            src={button}
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

