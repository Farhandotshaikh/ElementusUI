import { useState } from 'react'

import { CodePreview } from './components/CodePreview.jsx'
import { ComponentSection } from './components/ComponentSection.jsx'
import { FTR } from './components/FTR.jsx'

const CardDetail = ({ item, onBack }) => {
  const [activeViews, setActiveViews] = useState({})

  // Helper function to toggle view for a specific item
  const toggleView = (itemId, view) => {
    setActiveViews(prev => ({
      ...prev,
      [itemId]: view
    }))
  }

  // Helper function to render individual items
  const renderItem = (content, code, title, index) => {
    const itemId = `item-${index}`
    const currentView = activeViews[itemId] || 'preview'

    return (
      <div key={index} className="mb-8 bg-black rounded-lg shadow-md overflow-y-scroll">
        <h3 className="text-xl font-bold p-4 bg-gray-100 text-center">{title}</h3>
        
        <div className="flex gap-2 px-4">
          <button
            onClick={() => toggleView(itemId, 'preview')}
            className={`px-4 py-2 text-sm transition-colors relative
              ${currentView === 'preview' 
                ? 'text-white' 
                : 'text-white/60 hover:text-white'
              }`}
          >
            Preview
            {currentView === 'preview' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
            )}
          </button>
          <button
            onClick={() => toggleView(itemId, 'code')}
            className={`px-4 py-2 text-sm transition-colors relative
              ${currentView === 'code' 
                ? 'text-white' 
                : 'text-white/60 hover:text-white'
              }`}
          >
            Code
            {currentView === 'code' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500" />
            )}
          </button>
        </div>

        <div className="p-3">
          {currentView === 'preview' ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <CodePreview code={code} />
          )}
        </div>
      </div>
    )
  }

  return (
    
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-center">
          <button onClick={onBack} className="p-[3px] relative mb-5">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Back
            </div>
          </button>
        </div>
        
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              {item.title}
            </h1>
            
            <p className="text-lg text-black/80 mb-8">
              {item.description}
            </p>
          </div>

          {Array.isArray(item.items) ? (
            item.items.map((subItem, index) => (
              renderItem(subItem.content, subItem.code, subItem.title, index)
            ))
          ) : (
            renderItem(item.previewContent, item.codeContent, item.title, 0)
          )}
        </div>
      </div>
    
  )
}

export default function App() {
  const [activeButton, setActiveButton] = useState('minimates')
  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (item) => {
    setSelectedCard(item)
  }

  const handleBackClick = () => {
    setSelectedCard(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 from-30% via-blue-600 via-50% to-blue-700 to-100% flex flex-col invert-0">
      {/* Glassmorphism Header */}
      <header className="sticky top-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <img 
                src="./src/assets/logo1.png"
                alt="Elementus Logo"
                className="w-8 h-10 md:w-10 md:h-14"
              />
              <div className="flex items-center">
                <span className="text-black font-medium text-sm md:text-xl">Elementus</span>
              </div>
              <img 
                src="./src/assets/ui.png"
                alt="UI svg"
                className="w-6 h-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col pt-20">
        {!selectedCard ? (
          <>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto space-y-8 text-center mb-8">
                <div className="my-10 pt-10">
                  <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif tracking-tight text-black leading-tight">
                    Create Seamless User Experiences with Elementus UI
                  </h1>
                  <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto">
                    Explore Elementus&apos;s extensive library of UI components, designed to streamline your workflow and enhance your web projects.
                  </p>
                </div>
                
                <div className="inline-flex rounded-md shadow-sm w-95 h-50" role="group">
                  <button
                    type="button"
                    className={`px-4 py-2 text-sm font-medium rounded-l-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white
                      ${activeButton === 'minimates' 
                        ? 'bg-black text-white' 
                        : 'bg-white/10 backdrop-blur-sm text-black hover:bg-black/20'
                      }`}
                    onClick={() => setActiveButton('minimates')}
                  >
                    MiniMates
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 text-sm font-medium rounded-r-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white
                      ${activeButton === 'macroelements' 
                        ? 'bg-black text-white' 
                        : 'bg-white/10 backdrop-blur-sm text-black hover:bg-black/20 '
                      }`}
                    onClick={() => setActiveButton('macroelements')}
                  >
                    MacroElements
                  </button>
                </div>
              </div>
            </div>

            <ComponentSection 
              title={activeButton === 'minimates' ? "MiniMates" : "MacroElements"}
              onCardClick={handleCardClick}
              activeButton={activeButton}
            />
          </>
        ) : (
          <CardDetail 
            item={selectedCard} 
            onBack={handleBackClick}
          />
        )}
      </main>
      <FTR />
    </div>
  )
}