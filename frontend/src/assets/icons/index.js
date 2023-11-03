import {
  MdDelete,
  MdOutlineKeyboardBackspace,
  MdManageAccounts,
} from "react-icons/md";
import { TfiPencil } from "react-icons/tfi";
import { FaRegEye } from "react-icons/fa";

export const Icons = {
  MdDelete: <MdDelete style={{ fontSize: "22px", marginRight: "5px" }} />,
  TfiPencil: <TfiPencil style={{ fontSize: "22px", marginRight: "8px" }} />,
  MdOutlineKeyboardBackspace: (
    <MdOutlineKeyboardBackspace
      style={{ fontSize: "22px", marginRight: "5px" }}
    />
  ),
  FaRegEye: <FaRegEye style={{ fontSize: "22px", marginRight: "5px" }} />,
  MdManageAccounts: (
    <MdManageAccounts style={{ fontSize: "30px", marginRight: "5px" }} />
  ),
};
