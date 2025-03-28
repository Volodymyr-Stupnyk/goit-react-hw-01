import css from './Profile.module.css';

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={css.profileBox}>
            <div>
                <img className={css.profileImg}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
    
            <ul className={css.statsList}>
                <li className={css.statsItem}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;