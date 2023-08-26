import styles from './ts-sidebar.module.scss';

import { Tooltip, Modal } from '../../dynamic-components/dynamic-components';
import React, {Fragment} from 'react';
import clsx from 'clsx';
import { nav, tools } from './data';
import { Link, useLocation } from 'react-router-dom';

export const __Sidebar = () => {
    const location = useLocation().pathname;
    const [closed, isClosed] = React.useState(false);
    const [openedUser, isOpenedUser] = React.useState(false);
    
    const handleToggleButtonClick = () => isClosed(!closed);
    const handleModalUserClick = () => isOpenedUser(!openedUser);

    const handleToolbarItemClick = (key: number) => {
        switch(key) {
            case 0: handleModalUserClick(); break;
        }
    }
    return (
        <section style={{display: location.search('auth') === 1 ? 'none' : ''}} className={clsx(styles.sidebar, closed ? styles.closed : undefined)}>
            <div className={styles.header}>
                <span>Navigtion</span>
                <button onClick={handleToggleButtonClick} className={styles.sidebar__toggleButton}>
                    <svg viewBox='0 0 24 24' className={styles.icon__menu}>
                        <path d='M3 5h18M3 12h18M3 19h18'/>
                    </svg>
                </button>
            </div>
            <hr />
            <main>
                <nav>
                    {
                        nav.map(elem => {
                            return (
                                <Tooltip content={elem.title} disable={!closed}>
                                    <Link to={elem.link} className={location === elem.link ? styles.active : ''}>
                                        <div className={location === elem.link ? styles.active : ''}>
                                            <svg viewBox='0 0 24 24'>
                                                <path d={elem.icon}/>
                                            </svg>
                                        </div>
                                        <span>{elem.title}</span>
                                    </Link>
                                </Tooltip>
                            )
                        })
                    }
                </nav>
            </main>
            <hr />
            <div className={styles.footer}>
                <Fragment>
                    {
                        tools.map((elem, key) => {
                            return (
                                <Tooltip content={elem.title} disable={!closed}>
                                    <button key={key} onClick={() => handleToolbarItemClick(key)}>
                                        <div>
                                            <svg viewBox='0 0 24 24'>
                                                <path d={elem.icon}/>
                                            </svg>
                                        </div>
                                        <span>{elem.title}</span>
                                    </button>
                                </Tooltip>
                            )
                        })
                    }
                </Fragment>
                <hr />
                <Tooltip content={`2023\u00a0Aritmetica.\nAll\u00a0Rights\u00a0Reserved`} disable={!closed}>
                    <div className={styles.copyright__caption}>
                        <div>
                            <svg viewBox='0 0 24 24'>
                                <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM13.5 9.17a3 3 0 100 5.659'/>
                            </svg>
                        </div>
                        <p>2023&nbsp;Aritmetica.<br/>All&nbsp;Rights&nbsp;Reserved</p>
                    </div>
                </Tooltip>
            </div>

            <Modal open={openedUser} close={handleModalUserClick}>
            </Modal>
        </section>
    )
}