import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  const comments = [];

  const _array = Array.from({length: Math.floor(Math.random() * 10) + 1}, () => Math.floor(Math.random() * 40))
  for (var i in _array) {
    comments.push(
      <CommentDetail key={i}
        author={faker.name.findName()}
        sentence={faker.lorem.sentences()}
      />
    )
  }

  return (
    <div className="ui container comments">
      {comments}
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));

