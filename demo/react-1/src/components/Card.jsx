import { Calendar, Clipboard, Clock, DollarSign } from "lucide-react";

const Card = ({ heading, para, icon, bgColor }) => {
  const iconMap = {
    Clipboard: Clipboard,
    Clock: Clock,
    Calendar: Calendar,
    DollarSign: DollarSign,
  };

  const IconComponent = iconMap[icon];

  return (
    <div className="h-[300px] w-[240px] bg-zinc-300 rounded-md text-black flex flex-col items-center justify-around">
      <div
        className={`img mt-16 ${bgColor} h-14 w-14 rounded-full flex items-center justify-center`}
      >
        {<IconComponent/> }
      </div>

      <div className="content text-center">
        <h1 className="font-bold">{heading}</h1>
        <p className="text-sm">{para}.</p>
      </div>
    </div>
  );
};

export default Card;
