import pagination from '../../assets/Pagination.png';

export const Pagination = ({ onCardClick, title, description, image }) => {
    const Pagination = [
      {
        id: "",
        title: "",
        content: `
<div class="flex h-72 items-center justify-center">
    <a href="#" class="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed  ">
        previous
    </a>
    <a href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex   hover:bg-blue-600 hover:text-white">
        1
    </a>
    <a href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex   hover:bg-blue-600 hover:text-white">
        2
    </a>
    <a href="#" class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex   hover:bg-blue-600 hover:text-white">
        3
    </a>
    <a href="#" class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md   hover:bg-blue-600 hover:text-white">
        Next
    </a>
</div>

        `,
        code: `
<div class="E-flex E-items-center E-justify-center">
    <a href="#" class="E-flex E-items-center E-px-4 E-py-2 E-mx-1 E-text-gray-500 E-bg-white E-rounded-md E-cursor-not-allowed  ">
        previous
    </a>
    <a href="#" class="E-items-center E-px-4 E-py-2 E-mx-1 E-text-gray-700 E-transition-colors E-duration-300 E-transform E-bg-white E-rounded-md sm:flex   hover:bg-blue-600 hover:text-white">
        1
    </a>
    <a href="#" class="E-items-center E-px-4 E-py-2 E-mx-1 E-text-gray-700 E-transition-colors E-duration-300 E-transform E-bg-white E-rounded-md sm:flex   hover:bg-blue-600 hover:text-white">
        2
    </a>
    <a href="#" class="E-items-center E-px-4 E-py-2 E-mx-1 E-text-gray-700 E-transition-colors E-duration-300 E-transform E-bg-white E-rounded-md sm:flex   hover:bg-blue-600 hover:text-white">
        3
    </a>
    <a href="#" class="E-flex E-items-center E-px-4 E-py-2 E-mx-1 E-text-gray-700 E-transition-colors E-duration-300 E-transform E-bg-white E-rounded-md   E-hover:E-bg-blue-600 E-hover:E-text-white">
        Next
    </a>
</div>
        `
      },
      {
        id: "Arrows",
        title: "Arrows",
        content: `
<div class="flex h-72 items-center justify-center">
    <a href="#" class="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 hover:bg-blue-500 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
    </a>
    <a href="#" class=" hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline   hover:bg-blue-600 hover:text-white">
        1
    </a>
    <a href="#" class=" hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline   hover:bg-blue-600 hover:text-white">
        ...
    </a>
    <a href="#" class=" hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline   hover:bg-blue-600 hover:text-white">
        5
    </a>
    <a href="#" class="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 hover:bg-blue-500 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
    </a>
</div>
        `,
        code: `
<div class="E-flex E-justify-center">
  <a href="#" class="E-flex E-items-center E-justify-center E-px-4 E-py-2 E-mx-1 E-text-gray-700 E-transition-colors E-duration-300 E-transform E-bg-white E-rounded-md rtl:-scale-x-100 hover:bg-blue-500 hover:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="E-w-5 E-h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
  </a>
  <a href="#" class=" E-px-4 E-py-2 E-mx-1 E-text-gray-700 E-transition-colors E-duration-300 E-transform E-bg-white E-rounded-md sm:inline hover:bg-blue-600 hover:text-white">
      1
  </a>
  <a href="#" class=" E-px-4 E-py-2 E-mx-1 E-text-gray-700 E-transition-colors E-duration-300 E-transform E-bg-white E-rounded-md sm:inline hover:bg-blue-600 hover:text-white">
      ...
  </a>
  <a href="#" class=" E-px-4 E-py-2 E-mx-1 E-text-gray-700 E-transition-colors E-duration-300 E-transform E-bg-white E-rounded-md sm:inline hover:bg-blue-600 hover:text-white">
      5
  </a>
  <a href="#" class="E-flex E-items-center E-justify-center E-px-4 E-py-2 E-mx-1 E-text-gray-700 E-transition-colors E-duration-300 E-transform E-bg-white E-rounded-md rtl:-scale-x-100 hover:bg-blue-500 hover:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="E-w-5 E-h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
  </a>
</div>
        `
      },
      {
        id: "Table",
        title: "Table",
        content: `
<div class="container h-72 flex flex-col items-center px-6 py-5 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
        <div class="-mx-2">
            <a href="#" class="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-500 transition-colors duration-300 transform bg-gray-100 rounded-lg ">
                1
            </a>
            <a href="#" class="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-500 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                2
            </a>
            <a href="#" class="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-500 transition-colors duration-300 transform rounded-lg hover:bg-gray-100">
                3
            </a>
        </div>
        <div class=" text-gray-400">
            <span class="font-medium  text-gray-100">1 - 25</span> of 77 records
        </div>
    </div>
</div>
        `,
        code: `
<div class="E-container E-flex E-flex-col E-items-center E-px-6 E-py-5 E-mx-auto E-space-y-6 sm:E-flex-row sm:justify-between sm:space-y-0 ">
  <div class="-mx-2">
      <a href="#" class="E-inline-flex E-items-center E-justify-center E-px-4 E-py-1 E-mx-2 E-text-gray-500 E-transition-colors E-duration-300 E-transform E-bg-gray-100 E-rounded-lg ">
          1
      </a>
      <a href="#" class="E-inline-flex E-items-center E-justify-center E-px-4 E-py-1 E-mx-2 E-text-gray-500 E-transition-colors E-duration-300 E-transform E-rounded-lg hover:bg-gray-100">
          2
      </a>
      <a href="#" class="E-inline-flex E-items-center E-justify-center E-px-4 E-py-1 E-mx-2 E-text-gray-500 E-transition-colors E-duration-300 E-transform E-rounded-lg hover:bg-gray-100">
          3
      </a>
  </div>
  <div class=" E-text-gray-400">
      <span class="E-font-medium  E-text-gray-100">1 - 25</span> of 77 records
  </div>
</div>
</div>    
     `
      }
    ];
  
    return (
      <>
        <div 
        className="h-[200px] sm:h-[250px] md:h-72 relative group cursor-pointer bg-white rounded-t-lg shadow-md overflow-hidden"
        onClick={() => onCardClick({
          id: "Pagination",
          title: title,
          subtitle: "COMPONENT",
          description: description,
          items: Pagination
        })}
        >
          <div className="absolute inset-0">
            <img
              src={pagination}
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
  
  