import { SidebarSearch } from "@app/components/sidebar-search/SidebarSearch";
import i18n from "@app/utils/i18n";
import { MenuItem } from "@components";
import { PfImage } from "@profabric/react-components";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface IMenuItem {
  name: string;
  icon?: string;
  path?: string;
  children?: Array<IMenuItem>;
}

export const MENU: IMenuItem[] = [
  {
    name: i18n.t("menusidebar.label.dashboard"),
    icon: "fas fa-tachometer-alt nav-icon",
    path: "/",
  },
//   {
//     name: i18n.t("menusidebar.label.blank"),
//     icon: "fas fa-wrench nav-icon",
//     path: "/blank",
//   },
  {
    name: i18n.t("Landing Page"),
    icon: "far fa-caret-square-down nav-icon",
    children: [
      {
        name: i18n.t("Banners"),
        icon: "fas fa-hammer nav-icon",
        path: "/banner",
      },
      {
        name: i18n.t("Specials"),
        icon: "fas fa-cogs nav-icon",
        path: "/specials",
      },
      {
        name: i18n.t("Contact Details"),
        icon: "fas fa-hammer nav-icon",
        path: "/contact-details",
      },
      {
        name: i18n.t("About"),
        icon: "fas fa-cogs nav-icon",
        path: "/about",
      },
    ],
  },
  {
    name: i18n.t("Product Section"),
    icon: "far fa-caret-square-down nav-icon",
    children: [
      {
        name: i18n.t("Categories"),
        icon: "fas fa-hammer nav-icon",
        path: "/categories",
      },
      {
        name: i18n.t("Sub Categories"),
        icon: "fas fa-cogs nav-icon",
        path: "/sub-categories",
      },
      {
        name: i18n.t("Products"),
        icon: "fas fa-hammer nav-icon",
        path: "/products",
      },
      {
        name: i18n.t("Accessories"),
        icon: "fas fa-cogs nav-icon",
        path: "/accessories",
      },
    ],
  },
  {
    name: i18n.t("Order Management"),
    icon: "far fa-caret-square-down nav-icon",
    children: [
      {
        name: i18n.t("Orders"),
        icon: "fas fa-hammer nav-icon",
        path: "/orders",
      },
      {
        name: i18n.t("Coupons"),
        icon: "fas fa-cogs nav-icon",
        path: "/coupons",
      },
      {
        name: i18n.t("Average Order Details"),
        icon: "fas fa-hammer nav-icon",
        path: "/average-order-details",
      },
    ],
  },
  {
    name: i18n.t("User Management"),
    icon: "far fa-caret-square-down nav-icon",
    children: [
      {
        name: i18n.t("User List"),
        icon: "fas fa-hammer nav-icon",
        path: "/user-list",
      },
      {
        name: i18n.t("User Notification"),
        icon: "fas fa-cogs nav-icon",
        path: "/user-notification",
      },
    ],
  },
  {
    name: i18n.t("Link Management"),
    icon: "far fa-caret-square-down nav-icon",
    children: [
      {
        name: i18n.t("Footer"),
        icon: "fas fa-hammer nav-icon",
        path: "/footer",
      },
      {
        name: i18n.t("Social Media"),
        icon: "fas fa-cogs nav-icon",
        path: "/social-media",
      },
    ],
  },
  {
    name: i18n.t("News Section"),
    icon: "far fa-caret-square-down nav-icon",
    children: [
      {
        name: i18n.t("Upcoming"),
        icon: "fas fa-hammer nav-icon",
        path: "/news-section",
      },
      {
        name: i18n.t("Top Deals"),
        icon: "fas fa-cogs nav-icon",
        path: "/top-deals",
      },
      {
        name: i18n.t("Ratings"),
        icon: "fas fa-hammer nav-icon",
        path: "/ratings",
      },
      {
        name: i18n.t("Best Sellers"),
        icon: "fas fa-cogs nav-icon",
        path: "/best-sellers",
      },
    ],
  },
];

const StyledBrandImage = styled(PfImage)`
  float: left;
  line-height: 0.8;
  margin: -1px 8px 0 6px;
  opacity: 0.8;
  --pf-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23) !important;
`;

const StyledUserImage = styled(PfImage)`
  --pf-box-shadow: 0 3px 6px #00000029, 0 3px 6px #0000003b !important;
`;

const MenuSidebar = () => {
  const authentication = useSelector((state: any) => state.auth.authentication);
  const sidebarSkin = useSelector((state: any) => state.ui.sidebarSkin);
  const menuItemFlat = useSelector((state: any) => state.ui.menuItemFlat);
  const menuChildIndent = useSelector((state: any) => state.ui.menuChildIndent);

  return (
    <aside className={`main-sidebar elevation-4 ${sidebarSkin}`}>
      <Link to="/" className="brand-link">
        <StyledBrandImage
          src="/img/logo.png"
          alt="AdminLTE Logo"
          width={33}
          height={33}
          rounded
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <StyledUserImage
              src={authentication.profile.picture}
              fallbackSrc="/img/default-profile.png"
              alt="User"
              width={34}
              height={34}
              rounded
            />
          </div>
          <div className="info">
            <Link to="/profile" className="d-block">
              {authentication.profile.email}
            </Link>
          </div>
        </div>

        <div className="form-inline">
          <SidebarSearch />
        </div>

        <nav className="mt-2" style={{ overflowY: "hidden" }}>
          <ul
            className={`nav nav-pills nav-sidebar flex-column${
              menuItemFlat ? " nav-flat" : ""
            }${menuChildIndent ? " nav-child-indent" : ""}`}
            role="menu"
          >
            {MENU.map((menuItem: IMenuItem) => (
              <MenuItem
                key={menuItem.name + menuItem.path}
                menuItem={menuItem}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default MenuSidebar;
