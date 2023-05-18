import React from "react";
import { socialMedia } from "./constant";

const Footer = () => {
  return (
    <footer className="ml-[220px] pb-32">
      <ul className="uppercase flex flex-row gap-8 mt-48 mb-12">
        {socialMedia.map((item, id) => (
          <li key={id} className="text-white cursor-pointer" onClick={()=>window.open(item.link)}>
            {item.title}
          </li>
        ))}
      </ul>
      <div className="text-slate-700 text-[14px] flex flex-row gap-48 ">
        <div>
          <ul>
            <li className="my-4 cursor-pointer">Audio Description</li>
            <li className="my-4 cursor-pointer">Investor Relation</li>
            <li className="my-4 cursor-pointer">Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="my-4 cursor-pointer">Help Centre</li>
            <li className="my-4 cursor-pointer">Jobs</li>
            <li className="my-4 cursor-pointer">Cookie Preferences</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="my-4 cursor-pointer">Gift Card</li>
            <li className="my-4 cursor-pointer">Terms of Use</li>
            <li className="my-4 cursor-pointer">Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="my-4 cursor-pointer">Media Centre</li>
            <li className="my-4 cursor-pointer">Privacy</li>
            <li className="my-4 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
      <p className="text-slate-700 text-[14px] py-8">&#169; Copyright 1997-2023</p>
    </footer>
  );
};

export default Footer;
