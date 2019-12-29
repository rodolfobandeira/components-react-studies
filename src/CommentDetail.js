import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
  let hrefLink = '#';

  return (
    <div className="comment">
      <a href={hrefLink} className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">
            Today at 6:00PM
          </span>
        </div>
        <div className="text">
          {props.sentence}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
