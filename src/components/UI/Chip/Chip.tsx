import styles from "./chip.module.css";
import type {JSX} from "react";

type ChipProps = {
    text: string;
    color?: string;
    icon?: JSX.Element;
};

const Chip = ({text, color, icon}: ChipProps) => {
    return (
        <div className={styles.chip} style={{borderColor: color ?? "hsla(0, 0%, 20%, 40%)"}}>
            {icon && icon}
            <p>{text}</p>
        </div>
    );
};

export default Chip;
