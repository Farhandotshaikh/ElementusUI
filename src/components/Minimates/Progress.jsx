

export const Progress = ({ onCardClick, title, description, image }) => {
    const Progress = [
      {
        id: "simple",
        title: "Simple",
        content: `
<div class="flex justify-center items-center h-20">
    <div class="flex w-1/2 bg-gray-400 h-3 rounded-full overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: 25%"></div>
    </div>
</div>
        `,
        code: `
  <div class="E-flex E-w-72 E-bg-gray-400 E-h-3 E-rounded-full E-overflow-hidden" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="E-flex E-flex-col E-justify-center E-rounded-full E-overflow-hidden E-bg-blue-600 E-text-xs E-text-white E-text-center E-whitespace-nowrap E-transition E-duration-500" style="width: 25%"></div>
</div>
        `
      },
      {
        id: "Label at end",
        title: "Label at end",
        content: `
<div class="text-center h-20">
  <div class="flex justify-center items-center gap-x-5 m-2">
    <div class="flex w-1/2 h-3 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
      <div class="flex flex-col justify-center rounded-full overflow-hidden bg-red-500 text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: 80%"></div>
    </div>
    <span class="sr-only">80%</span>
    <div class="w-10 text-end">
      <span class="shrink-0  size-4 flex justify-center items-center rounded-full bg-red-500 text-white">
        <svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </span>
    </div>
  </div>
  <div class="flex justify-center items-center gap-x-5 m-2">
    <div class="flex w-1/2 h-3 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
      <div class="flex flex-col justify-center rounded-full overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: 100%"></div>
    </div>
    <span class="sr-only">100%</span>
    <div class="w-10 text-end">
      <span class="shrink-0 size-4 flex justify-center items-center rounded-full bg-teal-500 text-white">
        <svg class="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    </div>
  </div>
</div>
        `,
        code: `
<div class="E-flex E-flex-wrap E-justify-center E-items-center">
  <!-- Progress Bar 1 -->
  <div class="E-flex E-flex-col sm:flex-row E-items-center E-gap-x-5 E-m-2 E-w-full sm:w-auto">
    <div class="E-flex E-w-full sm:w-48 E-h-3 E-bg-gray-200 E-rounded-full E-overflow-hidden" 
         role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
      <div class="E-bg-red-500 E-text-xs E-text-white E-text-center E-whitespace-nowrap E-transition E-duration-500"
           style="width: 80%">
      </div>
    </div>
    <span class="E-sr-only">80%</span>
    <div class="E-w-10 E-text-center sm:text-left">
      <span class="E-size-4 E-flex E-justify-center E-items-center E-rounded-full E-bg-red-500 E-text-white E-my-2">
        <svg class="E-size-2 E-my-2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" 
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </span>
    </div>
  </div>
  <!-- Progress Bar 2 -->
  <div class="E-flex E-flex-col sm:flex-row E-items-center E-gap-x-5 E-m-2 E-w-full sm:w-auto">
    <div class="E-flex E-w-full sm:w-48 E-h-3 E-bg-gray-200 E-rounded-full E-overflow-hidden"
         role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
      <div class="E-bg-green-500 E-text-xs E-text-white E-text-center E-whitespace-nowrap E-transition E-duration-500"
           style="width: 100%">
      </div>
    </div>
    <span class="E-sr-only">100%</span>
    <div class="E-w-10 E-text-center sm:text-left">
      <span class="E-size-4 E-flex E-justify-center E-items-center E-rounded-full E-bg-green-500 E-text-white E-my-2">
        <svg class="E-size-3 E-my-2" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    </div>
  </div>
</div>
        `
      },
      {
        id: "Text Inside",
        title: "Text Inside",
        content: `
<div class="flex justify-center items-center h-20">
  <div class="flex w-1/2 h-4 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: 50%">50%</div>
  </div>
</div>
        `,
        code: `
  <div class="E-flex E-w-48 E-h-4 E-bg-gray-200 E-rounded-full E-overflow-hidden" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="E-flex E-flex-col E-justify-center E-rounded-full E-overflow-hidden E-bg-blue-600 E-text-xs E-text-white E-text-center E-whitespace-nowrap E-transition E-duration-500" style="width: 50%">50%</div>
  </div>
        `
      },
      {
        id: "Multi bar",
        title: "Multi bar",
        content: `
<div class="flex justify-center items-center h-20">
  <div class="flex w-1/2 h-3 bg-gray-200 rounded-full overflow-hidden">
    <div class="flex flex-col justify-center overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap" style="width: 25%" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="flex flex-col justify-center overflow-hidden bg-blue-700 text-xs text-white text-center whitespace-nowrap" style="width: 15%" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap" style="width: 30%" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="flex flex-col justify-center overflow-hidden bg-orange-600 text-xs text-white text-center whitespace-nowrap" style="width: 5%" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
        `,
        code: `
  <div class="E-flex E-w-48 E-h-3 E-bg-gray-200 E-rounded-full E-overflow-hidden">
    <div class="E-flex E-flex-col E-justify-center E-overflow-hidden E-bg-blue-400 E-text-xs E-text-white E-text-center E-whitespace-nowrap" style="width: 25%" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="E-flex E-flex-col E-justify-center E-overflow-hidden E-bg-blue-700 E-text-xs E-text-white E-text-center E-whitespace-nowrap" style="width: 15%" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="E-flex E-flex-col E-justify-center E-overflow-hidden E-bg-gray-800 E-text-xs E-text-white E-text-center E-whitespace-nowrap" style="width: 30%" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    <div class="E-flex E-flex-col E-justify-center E-overflow-hidden E-bg-red-500 E-text-xs E-text-white E-text-center E-whitespace-nowrap" style="width: 5%" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
        `
      },
      {
        id: "Vertical Bars",
        title: "Vertical Bars",
        content: `
<div class="flex gap-x-8 justify-center items-center">
  <div class="flex flex-col flex-nowrap justify-end w-3 h-32 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="rounded-full overflow-hidden bg-blue-500" style="height: 50%"></div>
  </div>
  <div class="flex flex-col flex-nowrap justify-end w-3 h-32 bg-gray-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="rounded-full overflow-hidden bg-purple-500" style="height: 75%"></div>
  </div>
</div>
        `,
        code: `
<div class="E-flex E-gap-x-8 E-justify-center E-items-center">
  <div class="E-flex E-flex-col E-flex-nowrap E-justify-end E-w-3 E-h-32 E-bg-gray-200 E-rounded-full E-overflow-hidden" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="E-rounded-full E-overflow-hidden E-bg-blue-500" style="height: 50%"></div>
  </div>
  <div class="E-flex E-flex-col E-flex-nowrap E-justify-end E-w-3 E-h-32 E-bg-gray-200 E-rounded-full E-overflow-hidden" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="E-rounded-full E-overflow-hidden E-bg-purple-500" style="height: 75%"></div>
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
          id: "Progress",
          title: title,
          subtitle: "COMPONENT",
          description: description,
          items: Progress
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
  
  