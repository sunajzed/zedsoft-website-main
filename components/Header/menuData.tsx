import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "#hero", // link to Hero section
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "#features", // link to Features section
  },
/*   {
    id: 3,
    title: "Projects",
    newTab: false,
    path: "#", // link to project section
    disabled: true,
  }, */
  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "#support", // link to Contact section
  },
];

export default menuData;
