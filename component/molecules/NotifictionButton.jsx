import React, { useState } from "react";
import Notification from "./Notification";
import Watch from "./Watch";
import Notificationoffer from "../organisms/Notificationoffer";

function NotifictionButton({ off, offf, offer, Wach, watch }) {
  return (
    <div className="flex flex-col gap-[10px] w-[950px] rounded-[10px]">
      <button onClick={off}>
        <Notification />
      </button>
      <button onClick={Wach} >
        <Watch />
      </button>
      <button onClick={watch} >
        <Watch />
      </button>
      <button onClick={offf}>
        <Notification />
      </button>
      <button onClick={offer}>
        <Notification />
      </button>
    </div>
  );
}

export default NotifictionButton;
