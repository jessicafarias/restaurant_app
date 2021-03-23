import { Comment, Header } from 'semantic-ui-react';

const UserOpinion = () => (
  <Comment.Group className="w-50 m-auto">
    <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
);

export default UserOpinion;