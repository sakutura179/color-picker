import clsx from 'clsx';

import styles from './SizePicker.module.scss';
import { useColor } from "../../store";
import { changeSize } from "../Data/actions";

function ColorPicker() {
    const [state, dispatch] = useColor();
    const { sizes, active } = state.sizeState;

    return (
        <div className={styles.sizePicker}>
            <div className={styles.sizePickerTitle}>size Picker</div>
            <div className={styles.sizePickerContent}>
                <h2>{active}</h2>
                <button 
                    className={clsx(styles.btn, {
                        [styles.disabled]: sizes[0] === active
                    })}
                    onClick={() => dispatch(changeSize('-'))}
                >
                    Giảm -
                </button>
                <button 
                    className={clsx(styles.btn, {
                        [styles.disabled]: sizes[sizes.length - 1] === active
                    })}
                    onClick={() => dispatch(changeSize('+'))}
                >
                    Tăng +
                </button>
            </div>
        </div>
    )
}

export default ColorPicker;