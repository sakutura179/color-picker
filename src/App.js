import ColorPicker from "./Components/ColorPicker";
import Result from "./Components/Result";
import SizePicker from "./Components/SizePicker";

function App() {
	return (
		<div className="App">
			<h1>Color and Size Picker</h1>
			<div className="container">
				<ColorPicker/>
				<SizePicker />
			</div>
				<Result />
		</div>
	);
}

export default App;
