"use client"

import { useRef, useEffect, useState } from "react"
import type { GridSettings } from "./grid-drawing-tool"

interface GridOverlayProps {
  imageUrl: string
  gridSettings: GridSettings
}

export function GridOverlay({ imageUrl, gridSettings }: GridOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = imageUrl

    img.onload = () => {
      setDimensions({
        width: img.width,
        height: img.height,
      })
      setIsLoading(false)
    }
  }, [imageUrl])

  useEffect(() => {
    if (!canvasRef.current || isLoading || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Draw the image
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = imageUrl

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Draw the grid if enabled
      if (gridSettings.showGrid) {
        drawGrid(ctx, canvas.width, canvas.height, gridSettings)
      }
    }
  }, [imageUrl, dimensions, gridSettings, isLoading])

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, settings: GridSettings) => {
    const { rows, columns, lineColor, lineWidth } = settings

    ctx.strokeStyle = lineColor
    ctx.lineWidth = lineWidth

    // Draw vertical lines
    const columnWidth = width / columns
    for (let i = 1; i < columns; i++) {
      const x = i * columnWidth
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    // Draw horizontal lines
    const rowHeight = height / rows
    for (let i = 1; i < rows; i++) {
      const y = i * rowHeight
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = "grid-image.png"
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  if (isLoading) {
    return <div>Loading image...</div>
  }

  return (
    <div className="relative max-w-full overflow-auto">
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div className="mt-2">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download Image
        </button>
      </div>
    </div>
  )
}
