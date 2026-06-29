"use client";
import { useState } from "react";

export default function Home() {
  const daysTillTheDay = 14;
  const [totalSeconds, setTotalSeconds] = useState<number>(daysTillTheDay*86400);
  const [days,setDays] = useState(Math.floor(totalSeconds/(3600*24)));
  const [hours, setHours] = useState(Math.floor((totalSeconds/3600)%24));
  const [minutes, setMinutes] = useState(Math.floor((totalSeconds/60)%60));
  const [seconds, setSeconds] = useState(totalSeconds%60);

  const makeTimeVal = (timevar: number) => {
    if(timevar < 10) {
      return `0${timevar}`
    } else {
      return timevar
    }
  }

  const handleChange = () => {
    setDays(Math.floor(totalSeconds/(3600*24)))
    setHours(Math.floor((totalSeconds/3600)%24))
    setMinutes(Math.floor((totalSeconds/60)%60))
    setSeconds(totalSeconds%60)
    setTotalSeconds(totalSeconds-1);
  }

  const intervalId = setInterval(() => {
    handleChange();
  }, 1000);

  return (
    <div className="flex font-sans flex-col gap-2 width-full min-h-screen justify-center items-center">
      <h1 className="text-white text-xl">David's oil rig will explode in</h1>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2">
          <div className="border rounded-xl text-xl p-2">{makeTimeVal(days)}</div>
          <div className="text-xl p-2">days</div>
          </div>
        <div className="flex flex-col gap-2">
          <div className="border rounded-xl text-xl p-2">{makeTimeVal(hours)}</div>
          <div className="text-xl p-2">hrs</div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="border rounded-xl text-xl p-2">{makeTimeVal(minutes)}</div>
          <div className="text-xl p-2">mins</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="border rounded-xl text-xl p-2">{makeTimeVal(seconds)}</div>
          <div className="text-xl p-2">secs</div>
        </div>
      </div>
    </div>
  );
}
