import { FC, HTMLAttributes, PropsWithChildren } from "react"
import styles from './ts-tooltip.module.scss';
import clsx from "clsx";
type props = HTMLAttributes<HTMLDivElement> & {
    content?: React.ReactNode;
    disable?: boolean;
}

export const __Tooltip: FC<props> = ({
    className, content, children, disable=false
}) => {
    return (
        <div className={styles.container}>
            <span className={clsx(className, styles.content, disable ? styles.disabled : null)}>{content}</span>
            {children}
        </div>
    )
}