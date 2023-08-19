import {
  TbAntennaBars1,
  TbAntennaBars2,
  TbAntennaBars3,
  TbAntennaBars4,
  TbAntennaBars5,
} from "react-icons/tb";
import { LiaTimesCircle } from "react-icons/lia";
import { MdTimelapse, MdCancel, MdCheckCircle } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import { TbCircleDashed } from "react-icons/tb";
import { StatusId } from "../contants";

export const getPriorityIcon = (priority: number) => {
  switch (priority) {
    case 0:
      return <TbAntennaBars1 style={{ fontSize: "15px" }} />;
    case 1:
      return <TbAntennaBars2 style={{ fontSize: "15px" }} />;
    case 2:
      return <TbAntennaBars3 style={{ fontSize: "15px" }} />;
    case 3:
      return <TbAntennaBars4 style={{ fontSize: "15px" }} />;
    case 4:
      return <TbAntennaBars5 style={{ fontSize: "15px" }} />;
    default:
      return <TbAntennaBars1 style={{ fontSize: "15px" }} />;
  }
};

export const getStatusIcon = (status: StatusId) => {
  switch (status) {
    case "Backlog":
      return (
        <TbCircleDashed
          style={{
            marginTop: "2px",
            marginRight: "5px",
            fontSize: "12px",
            color: "gray",
          }}
        />
      );
    case "In progress":
      return (
        <MdTimelapse
          style={{
            marginTop: "2px",
            marginRight: "5px",
            fontSize: "12px",
            color: "#F0C94B",
          }}
        />
      );
    case "Todo":
      return (
        <BsCircle
          style={{
            marginTop: "2px",
            marginRight: "5px",
            fontSize: "10px",
            color: "gray",
          }}
        />
      );
    case "Cancelled":
      return (
        <MdCancel
          style={{
            marginTop: "2px",
            marginRight: "5px",
            fontSize: "12px",
            color: "#93A1B2",
          }}
        />
      );
    case "Done":
      return (
        <MdCheckCircle
          style={{
            marginTop: "2px",
            marginRight: "5px",
            fontSize: "12px",
            color: "#5E6AD2",
          }}
        />
      );
    default:
      return (
        <LiaTimesCircle
          style={{
            marginTop: "2px",
            marginRight: "5px",
            fontSize: "12px",
            color: "#F0C94B",
          }}
        />
      );
  }
};


export const getPriorityIconColumn = (priority: number) => {
  switch (priority) {
    case 0:
      return <TbAntennaBars1 style={{ fontSize: "15px" }} />;
    case 1:
      return <TbAntennaBars2 style={{ fontSize: "15px" }} />;
    case 2:
      return <TbAntennaBars3 style={{ fontSize: "15px" }} />;
    case 3:
      return <TbAntennaBars4 style={{ fontSize: "15px" }} />;
    case 4:
      return <TbAntennaBars5 style={{ fontSize: "15px" }} />;
    default:
      return <TbAntennaBars1 style={{ fontSize: "15px" }} />;
  }
};
export const getStatusIconColumn = (status: StatusId) => {
  switch (status) {
    case "Backlog":
      return <TbCircleDashed style={{ fontSize: "17px", color: "gray" }} />;
    case "In progress":
      return <MdTimelapse style={{ fontSize: "17px", color: "#F0C94B" }} />;
    case "Todo":
      return <BsCircle style={{ fontSize: "15px", color: "gray" }} />;
    case "Cancelled":
      return <MdCancel style={{ fontSize: "17px", color: "#93A1B2" }} />;
    case "Done":
      return <MdCheckCircle style={{ fontSize: "17px", color: "#5E6AD2" }} />;
    default:
      return <LiaTimesCircle style={{ fontSize: "17px", color: "#F0C94B" }} />;
  }
};
