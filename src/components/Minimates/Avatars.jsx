

export const Avatars = ({ onCardClick, title, description, image }) => {
    const Avatars = [
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center">
    <img class="object-cover w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
</div>
        `,
        code: `
<div class="E-flex E-justify-center">
    <img class="E-object-cover E-w-20 E-h-20 E-rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
</div>
        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center">
    <img class="object-cover w-20 h-20 rounded-full ring ring-white" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt="">
</div>
        `,
        code: `
<div class="E-flex E-justify-center">
    <img class="E-object-cover E-w-20 E-h-20 E-rounded-full E-ring E-ring-white" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt="">
</div>
        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex justify-center">
    <div class="relative">
        <img class="object-cover w-20 h-20 rounded-full" src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        <span class="absolute bottom-0 w-5 h-5 rounded-full bg-green-500 right-1 ring-1 ring-white"></span>
    </div>
</div>
        `,
        code: `
<div class="E-flex E-justify-center">
    <div class="E-relative">
        <img class="E-object-cover E-w-20 E-h-20 E-rounded-full" src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        <span class="E-absolute E-bottom-0 E-w-5 E-h-5 E-rounded-full E-bg-green-500 E-right-1 E-ring-1 E-ring-white"></span>
    </div>
</div>
        `
      },
      {
        id: "",
        title: "",
        content: `
    <div class="flex items-center justify-center gap-x-2">
        <img class="object-cover w-20 h-20 rounded-full" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        <div>
            <h1 class="text-xl font-semibold capitalize text-white">Mia John</h1>
            <p class="text-base text-gray-200">miajohn@Elementus</p>
        </div>
    </div>
        `,
        code: `
    <div class="E-flex E-justify-center E-gap-x-2">
        <img class="E-object-cover E-w-20 E-h-20 E-rounded-full" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        <div>
            <h1 class="E-text-xl E-font-semibold E-capitalize E-text-white">Mia John</h1>
            <p class="E-text-base E-text-gray-400">miajohn@Elementus</p>
        </div>
    </div>
        `
      },
      {
        id: "",
        title: "",
        content: `
<div class="flex h-[400px] items-center justify-center">
    <img class="h-16 w-16 -mx-2.5 ring ring-white/70 rounded-full object-cover" src="https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    <img class="h-16 w-16 -mx-2.5 ring ring-white/70 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80" alt="">
    <img class="h-16 w-16 -mx-2.5 ring ring-white/70 rounded-full object-cover" src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80" alt="">
    <img class="h-16 w-16 -mx-2.5 ring ring-white/70 rounded-full object-cover" src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80" alt="">
    <img class="h-16 w-16 -mx-2.5 ring ring-white/70 rounded-full object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
</div>
        `,
        code: `
     <img class="E-h-16 E-w-16 -mx-2.5 E-ring E-ring-white E-rounded-full E-object-cover" src="https://images.unsplash.com/photo-1512288094938-363287817259?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    <img class="E-h-16 E-w-16 -mx-2.5 E-ring E-ring-white E-rounded-full E-object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80" alt="">
    <img class="E-h-16 E-w-16 -mx-2.5 E-ring E-ring-white E-rounded-full E-object-cover" src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80" alt="">
    <img class="E-h-16 E-w-16 -mx-2.5 E-ring E-ring-white E-rounded-full E-object-cover" src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80" alt="">
    <img class="E-h-16 E-w-16 -mx-2.5 E-ring E-ring-white E-rounded-full E-object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        `
      }
    ];
  
    return (
      <>
        <div 
        className="h-52 sm:h-64 md:h-72 relative group cursor-pointer bg-white rounded-t-lg shadow-md overflow-hidden"
        onClick={() => onCardClick({
          id: "Avatars",
          title: title,
          subtitle: "COMPONENT",
          description: description,
          items: Avatars
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