import React from 'react';
import Article from './Article.jsx';

const ArticleList = ({ trend, storyPoint }) => {
  let articles;

  if (storyPoint.hasOwnProperty('stories') && storyPoint.stories[0] === null) {
    articles = (
      <div>
        <h6>No stories on this trend found for {storyPoint.formattedTime}.</h6>
      </div>
    );
  } else if (storyPoint.hasOwnProperty('stories')) {
    articles = (
      <div className="row">
        <div className="col-12">
          <div className="row mb-4">
            <div className="col-12"><h4>Top <span className="text-lowercase">"{trend}"</span> stories {storyPoint.formattedTime}</h4></div>
          </div>
          <div className="row">
            {storyPoint.stories.map(story => {
              return <Article key={story.url} story={story}/>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    articles = <div></div>;
  }
  return articles;
};

export default ArticleList;
