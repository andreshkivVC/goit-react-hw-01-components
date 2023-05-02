import {
    StyledItem,
    StyledSpan,
    StyledImg,
    StyledName,
} from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => (
    <StyledItem>
        <StyledSpan isOnline={friend.isOnline}>{friend.isOnline}</StyledSpan>
        <StyledImg src={friend.avatar} alt={friend.name} />
        <StyledName>{friend.name}</StyledName>
    </StyledItem>
);

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
};