import { FC } from "react";
import './user.css'

const UserBlock: FC<IUserBlockProps> = ({
  name,
  statusText,
  avatar,
  onlineStatus,
}) => {
  return (
    <div className="user-block">
      <h1>{name}</h1>
      <h2>{statusText}</h2>
      <img src={avatar} alt="user avatar" />
      <h3>Пользователь {onlineStatus ? 'онлайн' : 'Офлайн'}</h3>
    </div>
  );
};

export default UserBlock;

interface IUserBlockProps {
  name: string;
  statusText: string;
  avatar: string;
  onlineStatus: Boolean;
}
