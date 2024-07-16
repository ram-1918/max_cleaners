const status_percent_mapper = {
  placed: -1,
  processing: 33.33,
  completed: 66.66,
  delivered: 100,
};

const active_ball_div =
  "z-10 absolute w-5 h-5 flex justify-center items-center rounded-full";
const active_ball = "w-3 h-3 rounded-full bg-white";
const progress_ball = "absolute w-4 h-4 rounded-full";
const progress_text = "absolute w-28";
const active = "bg-blue-500";
const normal = "bg-gray-200";

export default function BarWithStatus({ height = 15, status }) {
  const buffered_height = height + 3;
  return (
    <div
      style={{ height: `${buffered_height}rem` }}
      className="border-r w-fit px-2"
    >
      <div
        style={{ height: `${height}rem` }}
        className="w-fit flex justify-between items-center space-x-4 p-2"
      >
        <ProgressBar status={status} />
        <div className="w-2 h-full"></div>
        <DisplayStatus />
      </div>
    </div>
  );
}

const DisplayStatus = () => {
  return (
    <div className="relative flex flex-col justify-between items-center w-20 h-full">
      <DisplayStatusSpan pos={-2} text="Order Placed" date="July 7, 2:30PM" />
      <DisplayStatusSpan pos={32.33} text="Processing" date="July 7, 3:30PM" />
      <DisplayStatusSpan pos={65.66} text="completed" date="July 7, 6:30PM" />
      <DisplayStatusSpan pos={99} text="Delivered" date="July 7, 7:30PM" />
    </div>
  );
};

const DisplayStatusSpan = ({ text, date, pos }) => {
  return (
    <div
      style={{ top: `${pos}%` }}
      className={`${progress_text} flex flex-col justify-start items-start space-y-1`}
    >
      <span className="text-md font-medium capitalize leading-6 tracking-wide">
        {text}
      </span>
      <span className="text-sm font-light capitalize">{date}</span>
    </div>
  );
};

function ProgressBar({ status = "completed" }) {
  return (
    <div className="relative flex flex-col justify-between items-center w-1.5 h-full bg-gray-200 shadow">
      <Bar status={status} />
      <ActiveBall status={status} />
      <Ball1 status={status} />
      <Ball2 status={status} />
      <Ball3 status={status} />
      <Ball4 status={status} />
    </div>
  );
}

const Bar = ({ status }) => (
  <div
    style={{ height: `${status_percent_mapper[status]}%` }}
    className={`w-1.5 ${active}`}
  ></div>
);

const ActiveBall = ({ status }) => (
  <div
    className={`top-[${status_percent_mapper[status]}%] ${active_ball_div} ${active}`}
  >
    <div className={`${active_ball}`}></div>
  </div>
);

const Ball1 = ({ status }) => (
  <div
    className={`${progress_ball} ${
      status_percent_mapper[status] >= 33.33 ? active : normal
    } top-[-1%]`}
  ></div>
);
const Ball2 = ({ status }) => (
  <div
    className={`${progress_ball} ${
      status_percent_mapper[status] >= 66.66 ? active : normal
    } top-[33.33%]`}
  ></div>
);
const Ball3 = ({ status }) => (
  <div
    className={`${progress_ball} ${
      status_percent_mapper[status] >= 100 ? active : normal
    } top-[66.66%]`}
  ></div>
);
const Ball4 = ({ status }) => (
  <div
    className={`${progress_ball} ${
      status_percent_mapper[status] === 100 ? active : normal
    } top-[100%]`}
  ></div>
);
