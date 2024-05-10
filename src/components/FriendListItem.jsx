import css from "./FriendListItem.module.css";

//const FriendListItem = ({ avatar, name, isOnline }) => {
function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div>
            <img src="" alt="Avatar" width="48" />
            <p>Friend name</p>
            <p>Friend status</p>
        </div>
    )
}

export default FriendListItem;
