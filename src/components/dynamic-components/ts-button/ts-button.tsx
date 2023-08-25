import React, {
    ButtonHTMLAttributes, FC, MouseEventHandler, PropsWithChildren
} from 'react';

import styles from './ts-button.module.scss';
import clsx from 'clsx';

type props = ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export const Button: FC<PropsWithChildren<props>> = ({
    children, disabled=false, onClick, className
}) => {
    const handleClick : MouseEventHandler<HTMLButtonElement> = (event) => {
        if(disabled) return;
        onClick && onClick(event);
    }

    return (
        <button className={clsx(styles.button, className)}
            disabled={disabled} onClick={handleClick}
        >
            {children}
        </button>
    );
};
