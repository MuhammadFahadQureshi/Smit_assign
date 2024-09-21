"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCardContext } from "@/components/CardContext";

const studentPage = () => {
  const { cards,  } = useCardContext();
  const [isEnrolled, updateButton] = useState(false)
  

  function getEnrolled(id){
    cards.filter((card)=> card.id == id).map((card)=>{
      card.enrolled = true;
      updateButton(!isEnrolled)
    })
  }

  return (
    <>
      <div className="max-w-[1100px] flex  flex-col px-6 mx-auto bg-gray-50 mt-6">
        <div className="flex flex-col lg:px-0 px-8 justify-center">
          <h1 className="text-black font-bold text-4xl mb-4">All Cources</h1>
          <p className="text-slate-500 font-bold">
            Explore the world greatest cources. Dive into a subject, learn from
            the best, and get the skills you need to succeed{" "}
          </p>
        </div>
        <div className="mt-8 flex gap-2 flex-wrap lg:justify-center md:justify-center justify-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card card-compact bg-base-100 w-11/12 md:w-6/12 lg:w-64 shadow-xl"
            >
              <figure className="h-40">
                <img
                  className="w-full h-full"
                  src={card.imageURL}
                  alt="Students"
                />
              </figure>
              <div className="card-body mt-5">
                <h2 className="card-title ">{card.name}</h2>
                <p className="text-gray-500 font-bold">{card.Teacher}</p>
                <div className="card-actions justify-center">
                  <button onClick={()=>{getEnrolled(card.id)}} className={card.enrolled? "btn btn-disabled mt-3":"btn btn-primary cardbtn mt-3"}>
                    {card.enrolled ? "Enrolled" : "Enroll now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default studentPage;
