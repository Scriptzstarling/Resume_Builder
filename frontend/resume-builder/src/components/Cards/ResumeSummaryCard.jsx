import React from "react";

const ResumeSummaryCard = ({ imgUrl, title, lastUpdated, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="h-[300px] flex flex-col gap-4 items-center justify-center bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50/10 cursor-pointer p-4 transition"
    >
      {/* Thumbnail */}
      {imgUrl ? (
        <img
          src={imgUrl}
          alt="Resume Thumbnail"
          className="w-16 h-16 object-cover rounded"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          No Image
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Last Updated */}
      <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
    </div>
  );
};

export default ResumeSummaryCard;
