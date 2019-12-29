import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  const comments = [];
  const _array = Array.from({length: Math.floor(Math.random() * 10) + 1}, () => Math.floor(Math.random() * 40))

  for (var i in _array) {
    const timeAgo = `Today at ${faker.date.past().getHours()}:${faker.date.past().getMinutes()} PM`

    comments.push(
      <ApprovalCard>
        <CommentDetail key={i}
          author={faker.name.findName()}
          sentence={faker.lorem.sentences()}
          timeAgo={timeAgo}
        />
      </ApprovalCard>
    )
  }

  return (
    <div className="ui container comments">
      {comments}
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));

