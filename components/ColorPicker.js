import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = () => {
  const [customColor, setCustomColor] = useState("#000");

  const handleChangeComplete = (color) => {
    setCustomColor(color.hex);
  };

  const sketchPickerStyles = {
    default: {
      picker: {
        // See the individual picker source for which keys to use
        boxShadow: "none",
      },
    },
  };

  return (
    <>
      {/* <p style={{ color: customColor }}>React Color Picker Component</p> */}
      {/* <div>
        <button onClick={ this.handleClick }>Pick Color</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <ChromePicker />
        </div> : null }
      </div> */}
      <ChromePicker
        color={customColor}
        onChangeComplete={handleChangeComplete}
        disableAlpha={true}
        styles={sketchPickerStyles}
        // boxShadow={"none"}
        // style={  input: {
        //   boxShadow: "none"
        // }}
        // style={{
        //   label: {
        //     boxShadow: "none",
        //   },
        //   //   label: {
        //   //     fontSize: "12px",
        //   //     color: "#999",
        //   //   },
        // }}
      />
    </>
  );
};

export default ColorPicker;
