import { useState, useEffect } from "react";

function useForm(initial = {}) {
	const [input, setInput] = useState(initial);
	const initialValue = Object.values(initial).join(""); // turn the object into an array and join them together into string

	useEffect(() => {
		setInput(initial);
	}, [initialValue]);

	function handleChange(e) {
		let { name, value, type } = e.target;
		if (type === "number") {
			value = Number(value);
		}

		if (type === "file") {
			[value] = e.target.file;
		}
		setInput({
			...input,
			[name]: value,
		});
	}

	function resetForm() {
		setInput(initial);
	}

	function clearForm() {
		const blankState = Object.entries(input).map(([key, value]) => [key, ""]);
		setInput(blankState);
	}

	return {
		input,
		handleChange,
		resetForm,
		clearForm,
	};
}

export default useForm;
