"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const val = 83528

  const [totalSeconds, setTotalSeconds] = useState<number>(val);
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
      <h1 className="text-white text-3xl mb-2">This was a joke to a friend and not actually some kind of threat. Hope you understand thanks</h1>
      
    </div>
  );
}
