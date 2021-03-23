import { Comment, Header } from 'semantic-ui-react';

const UserOpinion = ({opinions}) => {
  return(
    <Comment.Group className="w-50 m-auto">
      {opinions.map(obj => (
          <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>{obj.name}</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>{obj.body}</Comment.Text>
            </Comment.Content>
          </Comment>
        ))}
    </Comment.Group>
  );
}

export default UserOpinion;