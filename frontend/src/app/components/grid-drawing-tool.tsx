"use client"

import { useState } from "react"
import { ControlPanel } from "./control-panel"
import { GridOverlay } from "./grid-overlay"
import { useMobile } from "../hooks/use-mobile"

// Updated GridSettings type
export type GridSettings = {
  rows: number
  columns: number
  lineColor: string
  lineWidth: number
  showGrid: boolean
  isSquareGrid: boolean 
}

// Custom Card component
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white shadow-md ${className}`}>
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
      // ✅ Keep columns = rows if square grid is active
      if (updated.isSquareGrid) {
        updated.columns = updated.rows
      }
      return updated
    })
  }

  // ✅ Toggle grid type (square vs rectangular)
  const updateGridType = (isSquare: boolean) => {
    setGridSettings((prev) => ({
      ...prev,
      isSquareGrid: isSquare,
      columns: isSquare ? prev.rows : prev.columns,
    }))
  }

  return (
    <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-6 w-full`}>
      {/* Control Panel */}
      <div className={`${isMobile ? "w-full" : "w-1/3"}`}>
        <Card className="p-4">
          <ControlPanel
            gridSettings={gridSettings}
            updateGridSettings={updateGridSettings}
            updateGridType={updateGridType} // ✅ pass toggle handler
            onImageUpload={handleImageUpload}
          />
        </Card>
      </div>

      {/* Image and Grid Overlay */}
      <div className={`${isMobile ? "w-full" : "w-2/3"}`}>
        <Card className="p-4 flex items-center justify-center min-h-[400px]">
          {image ? (
            <GridOverlay imageUrl={image} gridSettings={gridSettings} />
          ) : (
            <div className="text-center text-gray-500">Upload an image to get started</div>
          )}
        </Card>
      </div>
    </div>
  )
}
