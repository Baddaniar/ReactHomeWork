import { FC } from "react";
import IStore from "../../types";

const TableItem: FC<IStore> = (props) => {
    return(
    <tr>
        <td>{props.name}</td>
        <td>{props.openTime}</td>
        <td>{props.closeTime}</td>
    </tr>
  );
};

export default TableItem;
