"use client"

import { useState } from "react"
import { ControlPanel } from "./control-panel"
import { GridOverlay } from "./grid-overlay"
import { useMobile } from "../hooks/use-mobile"

export type GridSettings = {
  rows: number
  columns: number
  lineColor: string
  lineWidth: number
  showGrid: boolean
  isSquareGrid: boolean 
}

// ✨ Enhanced Card
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white shadow-lg p-6 ${className}`}>
      {children}
    </div>
  )
}

export function GridDrawingTool() {
  const [image, setImage] = useState<string | null>(null)

  const [gridSettings, setGridSettings] = useState<GridSettings>({
    rows: 3,
    columns: 3,
    lineColor: "#ff0000",
    lineWidth: 2,
    showGrid: true,
    isSquareGrid: false,
  })

  const isMobile = useMobile()

  const handleImageUpload = (imageDataUrl: string) => {
    setImage(imageDataUrl)
  }

  const updateGridSettings = (newSettings: Partial<GridSettings>) => {
    setGridSettings((prev) => {
      const updated = { ...prev, ...newSettings }
      if (updated.isSquareGrid) {
        updated.columns = updated.rows
      }
      return updated
    })
  }

  const updateGridType = (isSquare: boolean) => {
    setGridSettings((prev) => ({
      ...prev,
      isSquareGrid: isSquare,
      columns: isSquare ? prev.rows : prev.columns,
    }))
  }

  return (
    
      <div className={`flex flex-col lg:flex-row gap-6`}>
        {/* Control Panel */}
        <div className="w-full lg:w-1/3">
         
           
            <ControlPanel
              gridSettings={gridSettings}
              updateGridSettings={updateGridSettings}
              updateGridType={updateGridType} 
              onImageUpload={handleImageUpload}
            />
          
        </div>

        {/* Image + Grid Display */}
        <div className="w-full lg:w-2/3">
          <Card className="flex items-center justify-center min-h-[400px] bg-gray-50">
            {image ? (
              <GridOverlay imageUrl={image} gridSettings={gridSettings} />
            ) : (
              <div className="text-center text-gray-400 text-lg font-medium">
                Upload an image to get started
              </div>
            )}
          </Card>
        </div>
      </div>
    
  )
}
