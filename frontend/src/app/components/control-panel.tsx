"use client"

import type React from "react"
import { useState } from "react"
import { Upload } from "lucide-react"
import type { GridSettings } from "./grid-drawing-tool"

interface ControlPanelProps {
  gridSettings: GridSettings
  updateGridSettings: (settings: Partial<GridSettings>) => void
  onImageUpload: (imageDataUrl: string) => void
  updateGridType: (isSquare: boolean) => void
}

export function ControlPanel({
  gridSettings,
  updateGridSettings,
  onImageUpload,
  updateGridType,
}: ControlPanelProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageUpload(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageUpload(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRowChange = (value: number) => {
    updateGridSettings({ rows: value })
    if (gridSettings.isSquareGrid) {
      updateGridSettings({ columns: value })
    }
  }

  const handleColumnChange = (value: number) => {
    updateGridSettings({ columns: value })
    if (gridSettings.isSquareGrid) {
      updateGridSettings({ rows: value })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-medium mb-4">Grid Settings</h2>

        <div className="space-y-4">
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
              isDragging ? "border-blue-500 bg-blue-100" : "border-gray-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("image-upload")?.click()}
          >
            <Upload className="mx-auto h-8 w-8 text-gray-500 mb-2" />
            <p className="text-sm text-gray-500 mb-1">Drag & drop an image or click to browse</p>
            <p className="text-xs text-gray-400">Supports JPG, PNG, GIF</p>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <div className="flex items-center space-x-2 py-2 border-t border-b my-4">
            <input
              type="checkbox"
              id="grid-type"
              checked={gridSettings.isSquareGrid}
              onChange={(e) => updateGridType(e.target.checked)}
              className="h-5 w-5 text-blue-600"
            />
            <label htmlFor="grid-type" className="text-sm">Square Grid</label>
          </div>

          <div className="grid gap-2">
            <label htmlFor="rows" className="text-sm font-medium">
              Rows: {gridSettings.rows}
            </label>
            <div className="flex items-center gap-2">
              <input
                id="rows"
                type="range"
                min={1}
                max={20}
                step={1}
                value={gridSettings.rows}
                onChange={(e) => handleRowChange(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="w-8 text-center text-sm">{gridSettings.rows}</span>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="columns" className="text-sm font-medium">
              Columns: {gridSettings.columns}
            </label>
            <div className="flex items-center gap-2">
              <input
                id="columns"
                type="range"
                min={1}
                max={20}
                step={1}
                value={gridSettings.columns}
                onChange={(e) => handleColumnChange(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="w-8 text-center text-sm">{gridSettings.columns}</span>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="lineWidth" className="text-sm font-medium">
              Line Width: {gridSettings.lineWidth}px
            </label>
            <div className="flex items-center gap-2">
              <input
                id="lineWidth"
                type="range"
                min={1}
                max={10}
                step={1}
                value={gridSettings.lineWidth}
                onChange={(e) => updateGridSettings({ lineWidth: parseInt(e.target.value) })}
                className="w-full"
              />
              <span className="w-8 text-center text-sm">{gridSettings.lineWidth}</span>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="lineColor" className="text-sm font-medium">
              Line Color
            </label>
            <div className="flex items-center gap-2">
              <input
                id="lineColor"
                type="color"
                value={gridSettings.lineColor}
                onChange={(e) => updateGridSettings({ lineColor: e.target.value })}
                className="w-12 h-8 p-1 border rounded"
              />
              <input
                type="text"
                value={gridSettings.lineColor}
                onChange={(e) => updateGridSettings({ lineColor: e.target.value })}
                className="flex-1 border rounded px-2 py-1 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="show-grid"
              checked={gridSettings.showGrid}
              onChange={(e) => updateGridSettings({ showGrid: e.target.checked })}
              className="h-5 w-5 text-blue-600"
            />
            <label htmlFor="show-grid" className="text-sm">Show Grid</label>
          </div>
        </div>
      </div>
    </div>
  )
}
