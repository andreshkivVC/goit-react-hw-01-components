import { FriendListItem } from './FriendListItem/FriendListItem';
import { StyledList } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <StyledList>
            {friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))}
        </StyledList>
    );
};

FriendList.defaultProps = {
    friends: [],
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};