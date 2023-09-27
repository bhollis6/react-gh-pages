/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Form() {
	return (
		<form
			method="POST"
			action="https://getform.io/f/19869f0a-6c2a-40a4-a1db-657b3a828de7"
            className="App-form"
		>
			<label>
				Name
				<input type="text" name="name" />
			</label>
			<label>
				Email
				<input type="email" name="email" />
			</label>
			<label>
				Keyword
				<select name="keyword">
					<option value="option-1">option 1</option>
					<option value="option-2">option 2</option>
					<option value="option-3">option 3</option>
				</select>
			</label>
			<button type="submit">Send</button>
		</form>
	);
}
