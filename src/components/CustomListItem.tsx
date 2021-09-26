import React from "react";
import { Link, ListItem } from "@material-ui/core";

interface CustomListItemProps {
  className: string;
  children: any;
  href?: string;
}

const CustomListItem = ({ children, href, ...rest }: CustomListItemProps) => {
  return (
    <Link href={href}>
      <ListItem {...rest}>
        {children}
      </ListItem>
    </Link>
  );
};

export default CustomListItem;
