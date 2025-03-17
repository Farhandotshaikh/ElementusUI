import alert from '../../assets/Alerts.png'

export const Alerts = ({ onCardClick, title, description, image }) => {
    const Alerts = [
      {
        id: "Error pop",
        title: "Error pop",
        content: `
<div class="flex justify-center items-center h-[200px]">
    <div class="flex w-full max-w-sm overflow-hidden  rounded-lg shadow-md bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-red-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
            </svg>
        </div>
        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
                <span class="font-semibold text-red-400">Error</span>
                <p class="text-sm text-gray-200">
                    Your email is already used!
                </p>
            </div>
        </div>
    </div>
</div>
        `,
        code: `
<div class="E-flex E-w-full E-max-w-sm E-overflow-hidden E-rounded-lg E-shadow-md E-bg-gray-800">
  <div class="E-flex E-items-center E-justify-center E-w-12 E-bg-red-500">
    <svg class="E-w-6 E-h-6 E-text-white E-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
    </svg>
  </div>
  <div class="E-px-4 E-py-2 -mx-3">
    <div class="E-mx-3">
      <span class="E-font-semibold E-text-red-400">Error</span>
      <p class="E-text-sm E-text-gray-200">
        Your email is already used!
      </p>
    </div>
  </div>
</div>
        `
      },
      {
        id: "Successful pop",
        title: "Successful pop",
        content: `
<div class="flex justify-center items-center h-32">
  <div class="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4" role="alert" tabindex="-1" aria-labelledby="hs-bordered-success-style-label">
    <div class="flex">
      <div class="shrink-0">
        <span class="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </span>
      </div>
      <div class="ms-3">
        <h3 id="hs-bordered-success-style-label" class="text-gray-800 font-semibold">
          Successfully updated.
        </h3>
        <p class="text-sm text-gray-500">
          You have successfully updated your email preferences.
        </p>
      </div>
    </div>
  </div>
</div>
        `,
        code: `
<div class="E-bg-green-50 E-border-t-2 E-border-green-500 E-rounded-lg E-p-4" role="alert" tabindex="-1" aria-labelledby="hs-bordered-success-style-label">
  <div class="E-flex">
    <div class="E-shrink-0">
      <span class="E-inline-flex E-justify-center E-items-center E-size-8 E-rounded-full E-border-4 E-border-green-100 E-bg-green-200 E-text-green-800">
        <svg class="E-shrink-0 E-size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      </span>
    </div>
    <div class="E-mx-3">
      <h3 id="hs-bordered-success-style-label" class="E-text-gray-800 E-font-semibold">
        Successfully updated.
      </h3>
      <p class="E-text-sm E-text-gray-500">
        You have successfully updated your email preferences.
      </p>
    </div>
  </div>
</div>
        `
      },
      {
        id: "Notification",
        title: "Notification",
        content: `
<div class="flex justify-center items-center h-[200px]">
    <div class="flex w-full max-w-sm overflow-hidden rounded-lg shadow-md bg-gray-800">
        <div class="w-2 bg-gray-700"></div>
        <div class="flex items-center px-2 py-3">
            <img class="object-cover w-10 h-10 rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div class="mx-3">
                <p class="text-gray-200">alexis chris has replied on the <a class="text-blue-300 hover:text-blue-400 hover:underline">uploaded image</a>.</p>
            </div>
        </div>
    </div>
</div>
        `,
        code: `
<div class="E-flex E-w-full E-max-w-sm E-overflow-hidden E-rounded-lg E-shadow-md E-bg-gray-800">
        <div class="E-w-2 E-bg-gray-700"></div>
        <div class="E-flex E-items-center E-px-2 E-py-3">
            <img class="E-object-cover E-w-10 E-h-10 E-rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            <div class="E-mx-3">
                <p class="E-text-gray-200">alexis chris has replied on the <a class="E-text-blue-300 hover:text-blue-400 hover:underline">uploaded image</a>.</p>
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
          id: "Alerts",
          title: title,
          subtitle: "COMPONENT",
          description: description,
          items: Alerts
        })}
        >
          <div className="absolute inset-0">
            <img
              src={alert}
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