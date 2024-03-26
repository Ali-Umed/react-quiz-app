import React from "react";
import { HiCheckCircle } from "react-icons/hi";

export default function QuestionsDetail() {
  return (
    <div className="p-2">
      <h1 className="text-2xl text-slate-100 text-center mb-2">
        Question 06/20
      </h1>
      <p className="text-slate-300 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio ?
      </p>

      <section className="flex flex-col justify-center items-center gap-3">
        <div className="unselected">
          <p>Lorem Ipsum dolor sit amet</p>
          <p className="check"></p>
        </div>
        <div className="selected">
          <p className="text-green-600">Lorem Ipsum dolor sit amet</p>
          <HiCheckCircle color="green" size={30} />
        </div>
        <div className="unselected">
          <p>Lorem Ipsum dolor sit amet</p>
          <p className="check"></p>
        </div>
        <div className="unselected">
          <p>Lorem Ipsum dolor sit amet</p>
          <p className="check"></p>
        </div>
      </section>
    </div>
  );
}
