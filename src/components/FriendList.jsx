import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

//const FriendList = ({ friends }) => {
function FriendList({friends}) {
    return (
        <ul>
            {/* Кількість li залежить від кількості об'єктів в масиві */}
            <li>
                <FriendListItem />
            </li>
        </ul>
    )
}

export default FriendList;