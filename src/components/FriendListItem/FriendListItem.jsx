import css from './FriendListItem.module.css'
import clsx from 'clsx'
const FriendListItem = ({ friend }) => {
    return (
        <div>
            <img className={css.friendImg} src={friend.avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{friend.name}</p>
            <p className={clsx(css.status, friend.isOnline && css.online)}>{friend.isOnline ? 'isOnline' : 'isOfline'}</p>
        </div>
    );
};

export default FriendListItem;
