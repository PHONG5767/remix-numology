import styles from './Button.module.css'

import classNames from "classnames";
import { Link } from "@remix-run/react";

function PrimaryButton({ to, href, onClick, children, secondary, large, primary,...passProp }) {
  const classButton = classNames({
    [styles.secondary]: secondary,
    [styles.large]: large,
    [styles.primary]: primary,
    [styles.btn]: true,
  });

  const commonProps = {
    onClick,
    ...passProp,
  };

  if (to) {
    return (
      <Link to={to} className={classButton} {...commonProps}>
        <span>{children}</span>
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={classButton} {...commonProps}>
        <span>{children}</span>
      </a>
    );
  } else {
    return (
      <button className={classButton} {...commonProps}>
        <span>{children}</span>
      </button>
    );
  }
}

export default PrimaryButton;
