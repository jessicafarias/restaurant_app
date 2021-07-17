import { Comment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const UserOpinion = ({ opinions }) => {
  const ListOpinions = opinions;
  return (
    <Comment.Group className="w-50 m-auto">
      {ListOpinions.map(obj => (
        <Comment key={obj.id}>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">{obj.name}</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>{obj.body}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  );
};

UserOpinion.propTypes = {
  opinions: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default UserOpinion;
