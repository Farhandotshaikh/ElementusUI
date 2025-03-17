

export const Card = ({ onCardClick, title, description, image }) => {
  const cards = [
    {
      id: "simple-card",
      title: "Simple Card",
      content: `
      <div class="flex justify-center">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Simple Card</div>
            <p class="text-gray-700 text-base">
              A basic card with title and content.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a doloribus eveniet minima, repudiandae officia in alias possimus, 
            </p>
          </div>
        </div>
      </div>
      `,
      code: `
  <div class="E-max-w-sm E-rounded E-overflow-hidden E-shadow-lg E-bg-white E-m-5">
    <div class="E-px-6 E-py-4">
      <div class="E-font-bold E-text-xl E-mb-2">Simple Card</div>
      <p class="E-text-gray-700 E-text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a doloribus eveniet minima, repudiandae officia in alias possimus, inventore voluptatibus provident odit, soluta recusandae! Aliquam rerum possimus illo nam, modi soluta veniam!
      </p>
    </div>
  </div>
      `
    },
    {
      id: "image-card",
      title: "Image Card",
      content: `
      <div class="flex justify-center">
        <div class="max-w-sm rounded-lg overflow-hidden bg-white">
          <img class="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Image Card</div>
            <p class="text-gray-700 text-base">
              A card featuring an image and content.
            </p>
          </div>
        </div>
      </div>
      `,
      code: `
        <div class="E-max-w-sm E-rounded E-overflow-hidden E-bg-white E-m-5">
          <img class="E-w-full E-h-48 E-object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image">
          <div class="E-px-6 E-py-4">
            <div class="E-font-bold E-text-xl E-mb-2">Image Card</div>
            <p class="E-text-gray-700 E-text-base">
              A card featuring an image and content.
            </p>
          </div>
        </div>
      `
    },
    {
      id: "image-card",
      title: "Image Card",
      content: `
<div class="flex justify-center items-center h-96">
        <div class="max-w-sm overflow-hidden rounded-xl hover:shadow-lg hover:shadow-white bg-white">
          <img class="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1696733585001-868eb49cbfa6?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Card Title</div>
            <p class="text-gray-700 text-base">
              A card featuring an image and content.
            </p>
          </div>
        </div>
</div>
      `,
      code: `
  <div class="E-max-w-sm E-overflow-hidden E-rounded-xl hover:shadow-lg  E-bg-white E-m-5" style="box-shadow: none; transition: box-shadow 0.3s ease;"
  onmouseover="this.style.boxShadow='0 0 10px white'"
  onmouseout="this.style.boxShadow='none'">
    <img class="E-w-full E-h-full E-object-cover hover:scale-110 E-transition-transform E-duration-500 E-ease-in-out" src="https://images.unsplash.com/photo-1696733585001-868eb49cbfa6?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image">
    <div class="E-px-6 E-py-4">
      <div class="E-font-bold E-text-xl E-mb-2">Card Title</div>
      <p class="E-text-gray-700 E-text-base">
        A card featuring an image and content.
      </p>
    </div>
  </div>
      `
    },
    {
      id: "Background Image Card",
      title: "Background Image Card",
      content: `
<div class="flex justify-center items-center h-64">
  <div class="relative max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
    <img class="w-full h-auto rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image">
    <div class="absolute top-0 start-0 end-0">
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800">
          Card title
        </h3>
        <p class="mt-1 text-gray-800">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <p class="mt-5 text-xs text-gray-600">
          Last updated 5 mins ago
        </p>
      </div>
    </div>
  </div>
</div>
      `,
      code: `
  <div class="E-relative E-max-w-sm E-rounded-xl E-overflow-hidden E-shadow-lg E-bg-white E-m-5">
    <img class="E-w-full E-h-auto E-rounded-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image">
    <div class="E-absolute E-top-0 E-start-0 E-end-0">
      <div class="E-p-4 E-md:p-5">
        <h3 class="E-text-lg E-font-bold E-text-gray-800">
          Card title
        </h3>
        <p class="E-mt-1 E-text-gray-800">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <p class="E-mt-5 E-text-xs E-text-gray-600">
          Last updated 5 mins ago
        </p>
      </div>
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
        id: "cards",
        title: title,
        subtitle: "COMPONENT",
        description: description,
        items: cards
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

