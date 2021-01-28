import style from "./NavItems.module.css";
import NavItem from '../NavItem/NavItem';

const navItems = (props) => {
  const links = [
    { link: "/", name: "Dashboard" },
    { link: "/about", name: "About" },
    { link: "/products", name: "Products" },
  ];

  const items = links.map((navElement) => {
    return <NavItem key={navElement.name} link={navElement.link}>{navElement.name}</NavItem>;
  });    
  return <ul className={style.NavItems}>{items}</ul>;
};
export default navItems;
