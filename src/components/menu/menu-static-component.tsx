import { Link, useLocation } from 'react-router-dom';
import styles from './menu-static-component.module.scss';
import { Button } from '../dynamic-components/ts-button/ts-button';
import { Svg3DSelectFace, HalfMoon } from 'iconoir-react';
import React, {FC} from 'react'
import clsx from 'clsx'
import { __major_menu_data } from './data';
const Menu: FC<{}> = () => {
    const [closed, isClosed] = React.useState(true);

    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
    const handleToggleButtonClick = () => isClosed(!closed); 
    return (
        <section className={clsx(styles.container, closed ? styles.closed : null)}>
            <header className={styles.header}>
                <Button onClick={handleToggleButtonClick} className={styles.toggle_button}>
                    <svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                        {/* <!-- First Line --> */}
                        <line x1="3" y1="5" x2={closed ? '11' : '21'} y2="5" stroke="#F6F6F6" strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'/>
                        {/* <!-- Second Line --> */}
                        <line x1="3" y1="12" x2={closed ? '16' : '21'} y2="12" stroke="#F6F6F6" strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'/>
                        {/* <!-- Third Line --> */}
                        <line x1="3" y1="19" x2="21" y2="19" stroke="#F6F6F6" strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'/>
                    </svg>
                </Button>
                <span className={styles.heading}><Svg3DSelectFace className={styles.logo}/> Aritmetica</span>
            </header>

            <main className={styles.content}>
                <section className={clsx(styles.menu__major, styles.group)}>
                    {
                        __major_menu_data.map(index => {
                            return (
                                <Link to={index.link} className={styles.link} >
                                    <Button className={clsx(styles.item, pathname === index.link ? styles.active : null)}>
                                        <div className={styles.icon__container}>
                                            <index.icon className={styles.icon}/>
                                        </div>
                                        <span className={styles.item__title}>{index.title}</span>
                                    </Button>
                                </Link>
                            )
                        })
                    }
                </section>

                <section className={clsx(styles.menu_minor, styles.group)}>
                    <Button className={clsx(styles.item, styles.minor)}>
                        <div className={styles.icon__container}>
                            <HalfMoon className={styles.icon}/>
                        </div>
                        <span className={styles.item__title}>Change&nbsp;Theme</span>
                    </Button>

                    <p style={{display: closed ? 'none' : 'block'}} className={styles.caption}>Aritmetica, Workshop!,<br/>2023, Almaty<br/>All right reserved</p>
                </section>
            </main>
        </section>
    );
};

export default Menu;