import React from "react";
import {
  ClockImage,
  LocationImage,
  Logo,
  MailImage,
  PhoneImage,
} from "./assets";
const Navbar = () => {
  return (
    <nav className="container py-5 shadow px-20 flex justify-between">
      <a href="#" className="flex items-center gap-2">
        <img src={Logo} alt="logo" />
        <h3 className="text-xl font-bold">BuhOne</h3>
      </a>
      <div>
        <ul className="flex gap-7 items-center">
          <li>
            <a href="tel: 81112223344" className="flex items-center gap-2">
              <img src={PhoneImage} alt="phone" />
              <span>8 (111) 222-33-44</span>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <img src={ClockImage} alt="Clock" />
            <span>Пн-Пт 10:00-18:00</span>
          </li>
          <li>
            <a href="mail: order@buhone.ru" className="flex items-center gap-2">
              <img src={MailImage} alt="Mail" />
              <span>order@buhone.ru</span>
            </a>
          </li>
          <li>
            <a
              href="https://maps.google.com"
              className="flex items-center gap-2"
            >
              <img src={LocationImage} alt="Location" />
              <span>Невский пр. 130</span>
            </a>
          </li>
        </ul>
        <ul className="flex gap-7 items-center justify-between mt-4">
          <li>
            <a className="uppercase font-bold" href="#">
              Главная
            </a>
          </li>
          <li>
            <a className="uppercase font-bold" href="#">
              услуги
            </a>
          </li>
          <li>
            <a className="uppercase font-bold" href="#">
              кейсы
            </a>
          </li>
          <li>
            <a className="uppercase font-bold" href="#">
              о компании
            </a>
          </li>
          <li>
            <a className="uppercase font-bold" href="#">
              контакты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
