import styles from './Result.module.scss';
import { useColor } from "../../store";
import { changeColor, changeSize } from "../Data/actions";

function Result() {
    const [state, dispatch] = useColor();
    const { active: colorActive} = state.colorState;
    const { active: sizeActive} = state.sizeState;

    const handleReset = () => {
        dispatch(changeColor('red'));
        dispatch(changeSize('RESET'));
    }

    return (
        <div className={styles.resultContainer}>
            <div className={styles.title}>
                <p>{`Color: ${colorActive} - Size: ${sizeActive}`}</p>
                <button onClick={handleReset}>Reset</button>
            </div>
            <p 
                className={styles.demo}
                style={{ 
                    color: colorActive,
                    fontSize: sizeActive
                 }}
            >
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            </p>
        </div>
    )
}

export default Result;