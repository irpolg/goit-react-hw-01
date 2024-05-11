import css from "./Profile.module.css";
//stats
function Profile({ name, tag, location, image }) {
    return (
        <div className={css.userProfile}>
            <div className={css.userData}>
                <img className={css.avatar} src={image} alt={name} />
                <p className={css.name}>{name}</p>
                <p className={css.data}>@{tag}</p>
                <p className={css.data}>{location}</p>
            </div>

            <ul className={css.info}>
                <li className={css.infoItem}>
                    <span>Followers</span>
                    <span>1000</span>
                </li>
                <li className={css.infoItem}>
                    <span>Views</span>
                    <span>2000</span>
                </li>
                <li className={css.infoItem}>
                    <span>Likes</span>
                    <span>3000</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;


// function Profile({ name, tag, location, image, stats }) {
//     return (
//         <div className={css.user}>
//             <div className={css.userData}>
//                 {/* <img 
//                     src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//                     alt="User avatar"
//                 />
//                 <p>Petra Marica</p>
//                 <p>@pmarica</p>
//                 <p>Salvador, Brasil</p>
//                                 <p>Petra Marica</p>
//                 <p>@pmarica</p>
//                 <p>Salvador, Brasil</p> */}
//             </div>

//             <ul>
//                 <li>
//                     <span>Followers</span>
//                     <span>1000</span>
//                 </li>
//                 <li>
//                     <span>Views</span>
//                     <span>2000</span>
//                 </li>
//                 <li>
//                     <span>Likes</span>
//                     <span>3000</span>
//                 </li>
//             </ul>
//         </div>
//     )
// }