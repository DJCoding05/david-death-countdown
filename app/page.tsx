"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [days,setDays] = useState(Math.floor(totalSeconds/(3600*24)));
  const [hours, setHours] = useState(Math.floor((totalSeconds/3600)%24));
  const [minutes, setMinutes] = useState(Math.floor((totalSeconds/60)%60));
  const [seconds, setSeconds] = useState(totalSeconds%60);

  useEffect(() => {
    fetch('/api/seconds')
      .then((res) => res.json())
      .then((data) => setTotalSeconds(data.seconds));
  },[])

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
      <h1 className="text-white text-3xl mb-2">David's oil rig will explode in</h1>
      <div className="flex flex-row">
        <div className="flex flex-col gap-2">
          <div className="border rounded-xl text-xl ml-2 p-2">{makeTimeVal(days)}</div>
          <div className="text-xl p-2">days</div>
        </div>
        <div className="text-xl ml-2 p-2">:</div>
        <div className="flex flex-col gap-2">
          <div className="border rounded-xl text-xl ml-2 p-2">{makeTimeVal(hours)}</div>
          <div className="text-xl p-2">hrs</div>
        </div>
        <div className="text-xl ml-2 p-2">:</div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="border rounded-xl text-xl ml-2 p-2">{makeTimeVal(minutes)}</div>
          <div className="text-xl p-2">mins</div>
        </div>
        <div className="text-xl ml-2 p-2">:</div>
        <div className="flex flex-col gap-2">
          <div className="border rounded-xl text-xl ml-2 p-2">{makeTimeVal(seconds)}</div>
          <div className="text-xl p-2">secs</div>
        </div>
      </div>
    </div>
  );
}
