import React from "react";

function Topics({ topicsData, setterSelectTopic }) {
  return (
    <div className="scrollable-menu-topic rounded-3">
      <ul className="list-unstyled">
        <li className="text-center text-eighth fs-5 mb-3 fw-bold">Topics</li>
        {topicsData.map((item, index) => {
          return (
            <li
              className="topicsList fs-7 fw-bold mt-2 pb-2 ps-2 border-secondary border-bottom cursor d-flex justify-content-between px-3"
              key={index}
              onClick={() => setterSelectTopic(item.id)}
            >
              <span>{item.title}</span>
              <span className="fs-8">{item.otherUserComments.length + 1}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Topics;
