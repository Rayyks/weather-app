import React from "react";

function MoreInfoCard({ data }) {
  const { formattedData, degreeSymbol, main, clouds } = data;

  return (
    <div className="more-info">
      <p className="">
        <span>
          {formattedData.feels_like}
          {degreeSymbol}
        </span>
      </p>
      <p className="">
        <span>{main.humidity}%</span>
      </p>
      <p className="">
        <span>{clouds.all}%</span>
      </p>
      <p className="">
        <span>
          {formattedData.temp_min}
          {degreeSymbol}
        </span>
      </p>
      <p className="">
        <span>
          {formattedData.temp_max}
          {degreeSymbol}
        </span>
      </p>
    </div>
  );
}

export default MoreInfoCard;
