import { FC, InputHTMLAttributes, ReactNode } from 'react';
import styles from './ts-input.module.scss';
import clsx from 'clsx';

type props = InputHTMLAttributes<HTMLInputElement> & {
    icon?: ReactNode;
    success?: boolean;
    danger?: boolean;
}

export const __Input: FC<props> = ({
    type, placeholder, className, icon, success=false, danger=false
}) => {
    return (
        <div className={clsx(styles.layout, className, 
            success ? styles.success : null,
            danger ? styles.danger : null
        )}>
            <input type={type} placeholder={placeholder} />
            <div className={styles.icon_container}>
                {icon}
            </div>
        </div>
    )
}