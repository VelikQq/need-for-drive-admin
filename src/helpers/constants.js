import blogPost from "../Images/Blog Posts Icon.svg";
import orders from "../Images/Add New Post Icon.svg";
import menu from "../Images/Overview (Components) Icon.svg";
import menu1 from "../Images/Forms & Components Icon.svg";
import person from "../Images/Person Icon.svg";
import warring from "../Images/Error Icon.svg";
import pensil from "../Images/pensil.svg";

export const tokenExpire = new Date(new Date().getTime() + 240 * 60 * 1000);

export const menuItem = [
 
  { id: 2, link: "/Cars", src: blogPost, name: "Список авто" },
  { id: 3, link: "/Orders", src: orders, name: "Заказы" },
  { id: 4, link: "/Cities", src: menu, name: "Города" },
  { id: 5, link: "/Points", src: menu1, name: "Места выдачи" },
  { id: 6, link: "/Rates", src: person, name: "Тарифы" },
  { id: 7, link: "/RateType", src: blogPost, name: "Типы тарифов" },
  { id: 8, link: "/CarCategory", src: orders, name: "Категории автомобилей" },
  { id: 9, link: "/OrderStatus", src: warring, name: "Статусы заказов" },
];
