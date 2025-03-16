import { useState, useEffect } from "react";
import { Bot } from "lucide-react";
import BotChat from "./botChat";

export default function BotIcon() {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransparent(true);
    }, 7000); // 7 seconds delay

    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <>
      <div
        className={`${
          isClicked
            ? "hidden"
            : "flex items-center justify-center p-4 md:p-6 text-white rounded-l-full transition-colors duration-300 "
        } ${
          isTransparent ? "bg-blue-500/40" : "bg-blue-500"
        } hover:bg-blue-500`}
        onMouseEnter={() => {
          setIsTransparent(false);
          setIsHovered(!isHovered);
        }}
        onClick={() => setIsClicked(true)} // Open chat when clicked
        style={{ cursor: "pointer" }}
      >
        <Bot size={26} />
      </div>

      {isClicked && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <BotChat onClose={() => setIsClicked(false)} />
        </div>
      )}
    </>
  );
}
