"use client";

import type React from "react";
import { useState } from "react";
import { Upload } from "lucide-react";
import type { GridSettings } from "./grid-drawing-tool";

interface ControlPanelProps {
  gridSettings: GridSettings;
  updateGridSettings: (settings: Partial<GridSettings>) => void;
  onImageUpload: (imageDataUrl: string) => void;
  updateGridType: (isSquare: boolean) => void;
}

export function ControlPanel({
  gridSettings,
  updateGridSettings,
  onImageUpload,
  updateGridType,
}: ControlPanelProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageUpload(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file?.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageUpload(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRowChange = (value: number) => {
    updateGridSettings({ rows: value });
    if (gridSettings.isSquareGrid) updateGridSettings({ columns: value });
  };

  const handleColumnChange = (value: number) => {
    updateGridSettings({ columns: value });
    if (gridSettings.isSquareGrid) updateGridSettings({ rows: value });
  };

  return (
    <div className="bg-base rounded-2xl p-6 md:p-8 shadow-md border border-secondary space-y-6">
      <h2 className="text-2xl font-semibold text-primary mb-4">
        Control Panel
      </h2>

      <div
        className={`border-2 bg-white border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer ${
          isDragging ? "border-primary bg-primary/10" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("image-upload")?.click()}
      >
        <Upload className="mx-auto h-8 w-8 text-primary mb-2" />
        <p className="text-sm text-primary mb-1">
          Drag & drop or click to upload
        </p>
        <p className="text-primaryText mb-1">or</p>
        

        {/* Browse Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); 
            document.getElementById("image-upload")?.click();
          }}
          className="inline-block px-4 py-2 mb-3 bg-primary text-white text-sm font-medium rounded-md shadow hover:bg-primary/90 transition"
        >
          Browse Files
        </button>

        <p className="text-xs  text-primaryTimary mb-3">Supports JPG, PNG, GIF</p>

        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="grid-type"
          checked={gridSettings.isSquareGrid}
          onChange={(e) => updateGridType(e.target.checked)}
          className="accent-primary w-5 h-5"
        />
        <label htmlFor="grid-type" className="text-sm text-primaryText">
          Square Grid
        </label>
      </div>

      {/* Sliders */}
      <div className="space-y-4">
        {/* Row 1: Rows and Columns */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Rows */}
          <div className="space-y-1">
            <label
              htmlFor="rows"
              className="text-sm font-medium text-primaryText"
            >
              Rows: {gridSettings.rows}
            </label>
            <div className="flex items-center gap-3">
              <input
                id="rows"
                type="range"
                min={1}
                max={20}
                value={gridSettings.rows}
                onChange={(e) => handleRowChange(+e.target.value)}
                className="w-full accent-primary"
              />
              <span className="text-sm w-6 text-center">
                {gridSettings.rows}
              </span>
            </div>
          </div>

          {/* Columns */}
          <div className="space-y-1">
            <label
              htmlFor="columns"
              className="text-sm font-medium text-primaryText"
            >
              Columns: {gridSettings.columns}
            </label>
            <div className="flex items-center gap-3">
              <input
                id="columns"
                type="range"
                min={1}
                max={20}
                value={gridSettings.columns}
                onChange={(e) => handleColumnChange(+e.target.value)}
                className="w-full accent-primary"
              />
              <span className="text-sm w-6 text-center">
                {gridSettings.columns}
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Line Width */}
        <div className="space-y-1">
          <label
            htmlFor="lineWidth"
            className="text-sm font-medium text-primaryText"
          >
            Line Width: {gridSettings.lineWidth}px
          </label>
          <input
            id="lineWidth"
            type="range"
            min={1}
            max={10}
            value={gridSettings.lineWidth}
            onChange={(e) => updateGridSettings({ lineWidth: +e.target.value })}
            className="w-full accent-primary"
          />
        </div>

        {/* Row 3: Line Color */}
        <div className="space-y-1">
          <label
            htmlFor="lineColor"
            className="text-sm font-medium text-primaryText"
          >
            Line Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={gridSettings.lineColor}
              onChange={(e) =>
                updateGridSettings({ lineColor: e.target.value })
              }
              className="w-10 h-10 rounded-md border border-gray-300 shadow-sm cursor-pointer"
            />
            <input
              type="text"
              value={gridSettings.lineColor}
              onChange={(e) =>
                updateGridSettings({ lineColor: e.target.value })
              }
              className="flex-1 px-3 py-2 rounded-md border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Show Grid Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="show-grid"
          checked={gridSettings.showGrid}
          onChange={(e) => updateGridSettings({ showGrid: e.target.checked })}
          className="accent-primary w-5 h-5"
        />
        <label htmlFor="show-grid" className="text-sm text-primaryText">
          Show Grid
        </label>
      </div>
    </div>
  );
}
