import { FC, HTMLAttributes, PropsWithChildren, MouseEventHandler } from 'react';
import styles from './ts-modal.module.scss';
import clsx from 'clsx';

type props = HTMLAttributes<HTMLDivElement> & {
    open: boolean;
    close?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}

export const __Modal: FC<PropsWithChildren<props>> = ({
    className, open, children, close
}) => {
    return (
        <div onClick={close} className={clsx(styles.modal, open ? null : styles.disabled)}>
            <section className={clsx(styles.content, className)}>
                <button onClick={close}>
                    <svg>
                        <path d='M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243'/>
                    </svg>
                </button>
                {children}
            </section>
        </div>
    )
} 