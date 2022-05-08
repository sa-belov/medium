import { appRoutes } from '../../../router/routes';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.sass';
import { ReactComponent as ProfileIcon } from '../../../assets/svg/profile.svg';
import { ReactComponent as LogoIcon } from '../../../assets/svg/logo.svg';

const NavBar = () => {
  const renderLinks = () => {
    return appRoutes.map(({ id, path, name: Component }) => (
      <NavLink key={id} to={path} className={styles.link}>
        <Component className={styles.icon} />
      </NavLink>
    ));
  };

  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.container}>
          <LogoIcon className={styles.logoIcon} />
          <div className={styles.links}>{renderLinks()}</div>
          <ProfileIcon className={styles.profileIcon} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
