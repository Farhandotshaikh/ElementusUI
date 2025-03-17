import footer from '../../assets/Footer.png';

export const Footer = ({ onCardClick, title, description, image }) => {
    const Footer = [
      {
        id: "simple Footer",
        title: "Simple",
        content: `
          <footer class="bg-black"><div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row"><a href="#"><img class="w-8 h-12" src="./src/assets/logo1.png" /></a><p class="text-sm text-white/80">© Copyright 2021. All Rights Reserved.</p><div class="flex -mx-2"><a href="#" class="mx-2 text-white transition-colors duration-300  hover:text-blue-500 " aria-label="Facebook"><svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path></svg></a><a href="#" class="mx-2 text-white transition-colors duration-300  hover:text-blue-500 " aria-label="Github"><svg class="w-5 h-5 fill-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.026 2c-4.893-6.3e-4 -9.0642 3.548-9.8476 8.3779-0.78342 4.83 2.0522 9.5151 6.6946 11.061 0.5 0.09 0.679-0.217 0.679-0.481 0-0.237-8e-3 -0.865-0.011-1.7-2.775 0.6-3.361-1.338-3.361-1.338-0.18269-0.603-0.57543-1.1207-1.107-1.459-0.9-0.619 0.069-0.605 0.069-0.605 0.64067 0.0878 1.2046 0.4675 1.527 1.028 0.27293 0.4963 0.73275 0.863 1.2773 1.0186 0.54455 0.1557 1.1287 0.0874 1.6227-0.1896 0.04642-0.506 0.27153-0.9789 0.63498-1.334-2.214-0.251-4.542-1.107-4.542-4.93-0.01229-0.9888 0.35489-1.9447 1.026-2.671-0.30365-0.86069-0.26789-1.8048 0.1-2.64 0 0 0.837-0.269 2.742 1.021 1.6339-0.44799 3.3582-0.44799 4.992 0 1.906-1.291 2.742-1.021 2.742-1.021 0.3696 0.83486 0.4054 1.7796 0.1 2.64 0.6736 0.72623 1.0405 1.6846 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922 0.4793 0.4901 0.7252 1.1623 0.675 1.846 0 1.334-0.012 2.41-0.012 2.737 0 0.267 0.178 0.577 0.687 0.479 4.6405-1.5486 7.4731-6.234 6.688-11.063-0.785-4.8286-4.9559-8.3754-9.848-8.3743z"></path></svg></a></div></div></footer>
        `,
        code: `
  <div class="E-flex E-flex-col E-h-min">
    <footer class="E-bg-gray-900 E-mt-auto">
      <div class="E-container E-flex E-flex-col E-items-center E-justify-between E-p-6 E-mx-auto E-space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#" class="E-no-underline E-text-white E-transition-colors E-duration-300 hover:text-blue-500">
          <img class="E-w-8 E-h-12" src="./src/assets/logo1.png" />
        </a>
        <p class="E-text-sm E-text-white E-mt-6 lg:mt-0">© Copyright 2021. All Rights Reserved.</p>
        <div class="E-flex -mx-2">
          <a href="#" class="E-mx-2 E-text-white E-transition-colors E-duration-300 hover:text-blue-500" aria-label="Facebook">
            <svg class="E-w-5 E-h-5 E-fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </a>
          <a href="#" class="E-mx-2 E-text-white E-transition-colors E-duration-300 hover:text-blue-500" aria-label="Github">
            <svg class="E-w-5 E-h-5 E-fill-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m12.026 2c-4.893-6.3e-4 -9.0642 3.548-9.8476 8.3779-0.78342 4.83 2.0522 9.5151 6.6946 11.061 0.5 0.09 0.679-0.217 0.679-0.481 0-0.237-8e-3 -0.865-0.011-1.7-2.775 0.6-3.361-1.338-3.361-1.338-0.18269-0.603-0.57543-1.1207-1.107-1.459-0.9-0.619 0.069-0.605 0.069-0.605 0.64067 0.0878 1.2046 0.4675 1.527 1.028 0.27293 0.4963 0.73275 0.863 1.2773 1.0186 0.54455 0.1557 1.1287 0.0874 1.6227-0.1896 0.04642-0.506 0.27153-0.9789 0.63498-1.334-2.214-0.251-4.542-1.107-4.542-4.93-0.01229-0.9888 0.35489-1.9447 1.026-2.671-0.30365-0.86069-0.26789-1.8048 0.1-2.64 0 0 0.837-0.269 2.742 1.021 1.6339-0.44799 3.3582-0.44799 4.992 0 1.906-1.291 2.742-1.021 2.742-1.021 0.3696 0.83486 0.4054 1.7796 0.1 2.64 0.6736 0.72623 1.0405 1.6846 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922 0.4793 0.4901 0.7252 1.1623 0.675 1.846 0 1.334-0.012 2.41-0.012 2.737 0 0.267 0.178 0.577 0.687 0.479 4.6405-1.5486 7.4731-6.234 6.688-11.063-0.785-4.8286-4.9559-8.3754-9.848-8.3743z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>  
        `
      },
      {
        id: "With links",
        title: "With Links",
        content: `
        <footer class="bg-black"><div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row"><a href="#"><img class="w-8 h-12" src="./src/assets/logo1.png" /></a><div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0"><a href="#" class="text-sm text-white transition-colors duration-300  hover:text-blue-500 ">Overview </a><a href="#" class="text-sm text-white transition-colors duration-300  hover:text-blue-500 ">Features </a><a href="#" class="text-sm text-white transition-colors duration-300  hover:text-blue-500 ">Pricing </a><a href="#" class="text-sm text-white transition-colors duration-300  hover:text-blue-500 ">Careers </a><a href="#" class="text-sm text-white transition-colors duration-300  hover:text-blue-500 ">Help </a><a href="#" class="text-sm text-white transition-colors duration-300  hover:text-blue-500 ">Privacy </a></div><p class="mt-6 text-sm text-gray-500 lg:mt-0 ">© Copyright 2023 Elementus. </p></div></footer>
        `,
        code: `
 <div class="E-flex E-flex-col E-h-min">
    <footer class="E-bg-gray-900 E-mt-auto">
        <div class="E-container E-flex E-flex-col E-items-center E-justify-between E-px-6 E-py-8 E-mx-auto lg:flex-row">
            <a href="#">
                <img class="E-w-8 E-h-12" src="./src/assets/logo1.png" />
            </a>
            <div class="E-flex E-flex-wrap E-items-center E-justify-center E-gap-4 E-mt-6 lg:gap-6 lg:mt-0">
                <a href="#" class="E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500 ">
                    Overview
                </a>
                <a href="#" class="E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500 ">
                    Features
                </a>
                <a href="#" class="E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500 ">
                    Pricing
                </a>
                <a href="#" class="E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500 ">
                    Careers
                </a>
                <a href="#" class="E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500 ">
                    Help
                </a>
                <a href="#" class="E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500 ">
                    Privacy
                </a>
            </div>
            <p class="E-mt-6 E-text-sm E-text-gray-500 lg:mt-0 ">© Copyright 2023 Elementus. </p>
        </div>
    </footer>
 </div>  
        `
      },
      {
        id: "Subscribe Form",
        title: "With Form",
        content: `
        <footer class="flex justify-center px-4 text-white/80 bg-black"><div class="container px-6 py-6"><h1 class="text-lg font-bold text-center lg:text-2xl">Join 31,000+other and never miss <br>out on new tips,tutorials,and more. </h1><div class="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"><input id="email" type="text" class="px-4 py-2 text-gray-700 bg-black border rounded-md focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"><button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">Subscribe </button></div><hr class="h-px border-none my-7 bg-gray-200"><div class="flex flex-col items-center justify-between md:flex-row"><a href="#"><img class="w-8 h-12" src="./src/assets/logo1.png" /></a><div class="flex mt-4 md:m-0"><div class="-mx-4"><a href="#" class="px-4 text-sm text-white transition-colors duration-300  hover:text-blue-500  hover:underline">About</a><a href="#" class="px-4 text-sm text-white transition-colors duration-300  hover:text-blue-500  hover:underline">Blog</a><a href="#" class="px-4 text-sm text-white transition-colors duration-300  hover:text-blue-500  hover:underline">News</a><a href="#" class="px-4 text-sm text-white transition-colors duration-300  hover:text-blue-500  hover:underline">Contact</a></div></div></div></div></footer>
        `,
        code: `
<div class="E-flex E-flex-col E-h-min">
    <footer class="E-flex E-justify-center E-px-4 E-text-white/80 E-bg-gray-900 E-mt-auto">
        <div class="E-container E-px-6 E-py-6">
            <h1 class="E-text-lg E-font-bold E-text-center E-text-white lg:text-2xl">
                Join 31,000+ other and never miss <br> out on new tips, tutorials, and more.
            </h1>
            <div class="E-flex E-flex-col E-justify-center E-mx-auto E-mt-6 E-my-3 md:space-y-0 md:flex-row">
                <input id="email" type="text" class="E-px-4 E-py-2 E-text-white E-bg-black E-border E-rounded-md focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address">
        
                <button class="E-w-full E-h-10 sm:h-auto sm:w-auto E-my-3 E-px-6 E-py-2.5 E-text-sm E-font-medium E-tracking-wider E-text-white E-transition-colors E-duration-300 E-transform md:mx-4 focus:outline-none E-bg-gray-800 E-rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                </button>
            </div>
            <hr class="E-h-px E-bg-gray-200 E-border-none E-my-7">
            <div class="E-flex E-flex-col E-items-center E-justify-between md:flex-row">
                <a href="#">
                    <img class="E-w-8 E-h-12 E-text-white" src="./src/assets/logo1.png" alt="Logo" />
                </a>
                <div class="E-flex E-mt-4 md:m-0">
                    <div class="E--mx-4">
                        <a href="#" class="E-px-4 E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500  hover:underline">About</a>
                        <a href="#" class="E-px-4 E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500  hover:underline">Blog</a>
                        <a href="#" class="E-px-4 E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500  hover:underline">News</a>
                        <a href="#" class="E-px-4 E-text-sm E-text-white E-transition-colors E-duration-300  hover:text-blue-500  hover:underline">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>      
        `
      },
      {
        id: "Portfolio",
        title: "Portfolio",
        content: `
        <footer class="bg-black text-white py-6"><div class="text-center"><h1 class="text-2xl font-bold text-red-500">FARHAN SHAIKH</h1><p class="text-lg mt-2">Your Complete Web Solution</p><div class="flex justify-center space-x-6 mt-4"><!-- Social Icons --><a href="https://github.com/Username" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/github.png" class="w-12 h-12 transform transition-transform duration-300 hover:scale-110" /></a><a href="https://instagram.com/Username" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" class="w-12 h-12 transform transition-transform duration-300 hover:scale-110" /></a><a href="https://www.linkedin.com/in/Username/" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" class="w-12 h-12 transform transition-transform duration-300 hover:scale-110" /></a></div><p class="text-gray-400 text-sm mt-6">Copyright © 2024 Name. All rights reserved</p></div></footer>
        `,
        code: `
   
    <footer class="E-bg-black E-text-white E-py-6 E-absolute E-bottom-0 E-w-full">
        <div class="E-text-center">
          <h1 class="E-text-2xl E-font-bold E-text-red-500">Elementus</h1>
          <p class="E-text-lg E-mt-2">Your Complete Web Solution</p>
          <div class="E-flex E-justify-center  E-mt-4">
            <!-- Social Icons -->
            <a href="https://github.com/Username" target="_blank">
                <img src="https://img.icons8.com/bubbles/100/000000/github.png" class="E-w-12 E-h-12 E-mx-3 hover:scale-150 E-transition E-duration-100 E-transform" />
            </a>
            <a href="https://instagram.com/Username" target="_blank">
                <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" class="E-w-12 E-mx-3 E-h-12 hover:scale-150 E-transition E-duration-100 E-transform"/>
            </a>
            <a href="https://www.linkedin.com/in/Username/" target="_blank">
                <img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" class="E-w-12 E-h-12 E-mx-3 hover:scale-150 E-transition E-duration-100 E-transform"/>
            </a>
          </div>
          <p class="E-text-gray-400 E-text-sm E-mt-6">Copyright &copy; 2024 Name. All rights reserved</p>
        </div>
      </footer>   
      
        `
      }
    ];
  
    return (
      <>
        <div 
        className="h-52 sm:h-64 md:h-72 relative group cursor-pointer bg-black rounded-t-lg shadow-md overflow-hidden"
        onClick={() => onCardClick({
          id: "Footer",
          title: title,
          subtitle: "COMPONENT",
          description: description,
          items: Footer
        })}
        >
          <div className="absolute inset-0">
            <img
              src={footer}
              alt={title}
              className="Object-cover h-full w-full"
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