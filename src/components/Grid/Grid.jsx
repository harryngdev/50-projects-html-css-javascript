import React from "react";
import PropTypes from "prop-types";

const Grid = (props) => {
  const style = {
    gap: props.gap ? `${props.gap}px` : "0px",
  };

  const col = props.col ? `grid-col-${props.col}` : "";
  const xlCol = props.xlCol ? `grid-col-xl-${props.xlCol}` : "";
  const lgCol = props.lgCol ? `grid-col-lg-${props.lgCol}` : "";
  const mdCol = props.mdCol ? `grid-col-md-${props.mdCol}` : "";
  const smCol = props.smCol ? `grid-col-sm-${props.smCol}` : "";

  return (
    <div
      className={`grid ${col} ${xlCol} ${lgCol} ${mdCol} ${smCol}`}
      style={style}
    >
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  col: PropTypes.number,
  xlCol: PropTypes.number,
  lgCol: PropTypes.number,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
};

export default Grid;
