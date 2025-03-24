import css from "./FriendList.module.css"
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({friends}) => {
    return (
        <ul className={css.FriendList}>
            {friends.map(friend => (
                <li className={css.FriendListItem} key={friend.id}>
                   <FriendListItem friend={friend} /> 
                </li>
            ))}
          
        </ul>
    );
};

export default FriendList;