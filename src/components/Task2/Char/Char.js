import React from "react";

const char = (props) => {
  const style = {
    display: 'inline-block',
    margin: '16px',
    width: '42px',
    height: '52px',
    lineHeight: '52px',
    textAlign: 'center',
    border: '1px solid black',
    cursor: 'pointer'
  };

  return (
      <div style={style} onClick={props.click}>
        {props.inputChar}
      </div>
  );
};

export default char;
