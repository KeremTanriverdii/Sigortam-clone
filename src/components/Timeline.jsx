import React from "react";
export default function Timeline({ items, points, onPointClick }) {
    return (
        <div className="timeline">
            <div className="timeline-items">
                {items.map((item, index) => (
                    <div
                        key={index}
                        id={`timeline-item-${index}`}
                        className="timeline-item"
                    >
                        <div className="year">{item.year}</div>
                        <div className="text">{item.text}</div>
                    </div>
                ))}
            </div>
            <div className="timeline-points">
                {points.map((point) => (
                    <div
                        key={point}
                        className="timeline-point"
                        onClick={() => onPointClick(point)}
                    >
                        {point}
                    </div>
                ))}
            </div>
        </div>
    )
}