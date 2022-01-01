import clsx from 'clsx';

import styles from './ColorPicker.module.scss';
import { useColor } from "../../store";
import { changeColor } from "../Data/actions";

function ColorPicker() {
    const [state, dispatch] = useColor();
    const { colors, active } = state.colorState;

    return (
        <div className={styles.colorPicker}>
            <div className={styles.colorPickerTitle}>Color Picker</div>
            <div className={styles.colorPickerContent}>
                {colors.map((color, index) => {
                    return (
                        <span 
                            className={clsx(styles.color, {
                                [styles.active]: active === color
                            })}
                            key={index}
                            onClick={() => dispatch(changeColor(color))}
                            style={{ backgroundColor: color }}
                        >
                            {color}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default ColorPicker;