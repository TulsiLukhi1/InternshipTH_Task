import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./style.css";
import { getRandomColor } from "../Helpers/Helpers";

const INITIAL_COLORS = getRandomColor(5);
const ColorfulGrid = () => {
  const [color, setColor] = useState("#ffffff");
  const [colors, setColors] = useState(INITIAL_COLORS);
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  // handlers
  function onDelete(index) {
    setColors((prev) => {
      let remainColors = [];
      remainColors = prev.filter((c, i) => i !== index);
      return remainColors;
    });
  }

  function colorChanhgeHandler(index, newColor) {
    setColors((prev) => {
      let upadtedColors = [];
      upadtedColors = upadtedColors.concat(prev);
      upadtedColors[index] = newColor;
      return upadtedColors;
    });
  }
  //
  const renderGrid = () => {
    const grid = [];
    const numberOfColors = colors.length;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const randomNumber = Math.floor(Math.random() * numberOfColors);
        const randomColor = colors[randomNumber];
        grid.push(
          <div
            key={`${i}-${j}`}
            className="grid-item"
            style={{ backgroundColor: randomColor }}
          >
            
          </div>
        );
      }
    }
    return grid;
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };
  
  return (
    <div className="container">
      <div className="side-panel">
        {/* color picker */}
        <div>
          <div className="input-label-color cus-style">
            <label htmlFor="colorInput">Choose Color</label>
          </div>
          <SketchPicker
            color={color}
            onChange={handleColorChange}
            className="colorpicker"
          />
          <button
            className="cus-btn cus-style"
            onClick={() => {
              setColors([...colors, color]);
            }}
          >
            Add
          </button>
        </div>

        {/* row input */}
        <div className="flex-1">
          <div className="input-label cus-style">
            <label htmlFor="rowsInput">R</label>
          </div>
          <input
            type="number"
            id="rowsInput"
            min="1"
            value={rows}
            className="cus-input"
            placeholder="Enter no of rows"
            onChange={(e) => {
              setRows(e.target.value);
            }}
          />
        </div>

        {/* col input */}
        <div className="flex-1">
          <div className="input-label cus-style">
            <label htmlFor="columnsInput">C </label>
          </div>

          <input
            type="number"
            id="columnsInput"
            min="1"
            value={columns}
            className="cus-input"
            placeholder="Enter no of Columns"
            onChange={(e) => setColumns(e.target.value)}
          />
        </div>

        {/* color wrapper */}
        <div className="colors-wrapper">
          {colors.map((color, index) => {
            return (
              <div className="color-picker-div" key={index}>
                <input
                  
                  type="color"
                  value={color}
                  onChange={(e) => colorChanhgeHandler(index, e.target.value)}
                />{" "}
                {colors.length > 1 && (
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(index)}
                  >
                    X
                  </button>
                )}
              </div>
            );
          })}
        </div>

      
      </div>

      <div
        className="grid-container"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {renderGrid()}
      </div>
    </div>
  );
};

export default ColorfulGrid;
