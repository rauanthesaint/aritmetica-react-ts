import React, {
    ButtonHTMLAttributes, FC, MouseEventHandler, PropsWithChildren
} from 'react';

import styles from './ts-button.module.scss';
import clsx from 'clsx';

type props = ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    variant?: 'outlined' | 'filled' | 'text'; 
    status?: 'success' | 'info' | 'warning' | 'danger';
}

export const __Button: FC<PropsWithChildren<props>> = ({
    children, disabled=false, onClick, className, variant='filled', status
}) => {
    const handleClick : MouseEventHandler<HTMLButtonElement> = (event) => {
        if(disabled) return;
        onClick && onClick(event);
    }

    const defineVariant = (variant : string) => { 
        switch (variant) {
            case 'outlined': return styles.outlined;
            case 'filled': return styles.filled;
            case 'text': return styles.text; 
        }
    }

    const defineStatus = (status : string | undefined) => { 
        switch (status) {
            case 'success': return styles.success;
            case 'info': return styles.info;
            case 'warning': return styles.warning; 
            case 'danger': return styles.danger; 
        }
    }

    return (
        <button className={clsx(styles.button, className, defineVariant(variant), defineStatus(status))}
            disabled={disabled} onClick={handleClick}
        >
            {children}
        </button>
    );
};
