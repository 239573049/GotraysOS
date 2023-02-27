import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Icon, ToolBar, LazyComponent } from "../../../utils/general";

import WidgetBot from "@widgetbot/react-embed";

export const DScord = () => {
  const wnapp = useSelector((state) => state.apps.discord);
  const [url, setUrl] = useState(null);
  const servers = [
    {
      src: "arrtective.png",
      link: "https://discord.io/arttective",
    },
    {
      src: "mimi.png",
      link: "https://discord.gg/AGSCfjgDMc",
    },
    {
      src: "narjiday.png",
      link: "https://discord.gg/K9wcgZJfXS",
    },
    {
      src: "aliyss.png",
      link: "https://discord.gg/zAypMTH",
    },
  ];

  useEffect(() => {
    if (url == null) {
      setUrl(
        "https://e.widgetbot.io/channels/868499076432408627/868499076432408631"
      );
      // setUrl("https://emerald.widgetbot.io/channels/299881420891881473/450428756855750666/?api=e2f9b64f-5292-43f5-a0d8-26fa43447eeb")
    }
  });

  return (
    <div
      className="discordWn floatTab dpShad"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name="Discord"
        bg="#282a2f"
        invert
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="restWindow flex-grow flex">
          <div className="dsbar w-18">
            <div className="servCont noscroll">
              <Icon
                className="dsIcon"
                src="./img/asset/discord.png"
                ext
                width={26}
                click="EXTERNAL"
                payload="https://discord.gg/9jtcVZ3tWm"
              />
              <hr />
              <Icon
                className="wnServer svIcon"
                src="./img/asset/server.gif"
                width={48}
                click="EXTERNAL"
                payload="https://discord.gg/9jtcVZ3tWm"
                ext
              />
              {servers.map((server, i) => (
                <Icon
                  key={i}
                  className="svIcon"
                  src={"./img/asset/" + server.src}
                  click="EXTERNAL"
                  payload={server.link}
                  ext
                  width={48}
                />
              ))}
            </div>
            <div className="joincont">
              <a
                href="https://discord.gg/9jtcVZ3tWm"
                target="_blank"
                rel="noreferrer"
              >
                Join
              </a>
            </div>
          </div>
          <div className="flex-grow overflow-hidden">
            <LazyComponent show={!wnapp.hide}>
              <WidgetBot className="w-full h-full" shard={url || ""} />
            </LazyComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
