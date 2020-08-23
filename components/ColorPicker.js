import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = () => {
  const [customColor, setCustomColor] = useState("#000");

  const handleChangeComplete = (color) => {
    setCustomColor(color.hex);
  };

  const chromeStyles = {
    default: {
      picker: {
        // See the individual picker source for which keys to use
        boxShadow: "none",
      },
    },
  };

  return (
    <>
      <ChromePicker
        color={customColor}
        onChangeComplete={handleChangeComplete}
        disableAlpha={true}
        styles={chromeStyles}
      />
    </>
  );
};

export default ColorPicker;
