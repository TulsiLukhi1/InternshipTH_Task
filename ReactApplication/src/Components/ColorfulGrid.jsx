import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./style.css";
import { getInitialRandomColor } from "../Helpers";
import GridItem from "./GridItem";

const INITIAL_COLORS = getInitialRandomColor(5);

const ColorfulGrid = () => {
  const [color, setColor] = useState("#ffffff");
  const [colors, setColors] = useState(INITIAL_COLORS);
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  // handlers
  const onDelete = (index) => {
    setColors((prev) => {
      let remainColors = [];
      remainColors = prev.filter((c, i) => i !== index);
      return remainColors;
    });
  };

  const colorChangeHandler = (index, newColor) => {
    setColors((prevColors) => {
      const updatedColors = [...prevColors];
      updatedColors[index] = newColor;
      return updatedColors;
    });
  };

  const getRandomColor = () => {
    const numberOfColors = colors.length;
    const randomNumber = Math.floor(Math.random() * numberOfColors);
    const randomColor = colors[randomNumber];
    return randomColor;
  };

  //Dynamic Grid
  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const randomColor = getRandomColor();
        grid.push(<GridItem key={`${i}-${j}`} backgroundColor={randomColor} />);
      }
    }
    return grid;
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div className="container">
      <section className="side-panel">
        {/* color picker */}
        <article>
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
        </article>

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
        <section className="colors-wrapper">
          {colors.map((color, index) => {
            return (
              <div className="color-picker-div" key={index}>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => colorChangeHandler(index, e.target.value)}
                />
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
        </section>
      </section>

      {/* Dynamic Grid */}
      <main
        className="grid-container"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {renderGrid()}
      </main>
    </div>
  );
};

export default ColorfulGrid;
