import { useState } from "react";

//1. state
//2. onChange
//3. setting values of input to reflect what's in state
function NewListing({ addListing }) {
	const [form, setForm] = useState({
		description: "",
		location: "",
		image: "",
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//addListing(form)
		fetch(`http://localhost:6001/listings`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(form),
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw Error("post went wrong");
				}
			})
			// DO NOT ADDLISTING(FORM) BECAUSE FORM DOES NOT CONTAIN THE ID ASSIGNED BY JSON-SERVER/POST
			.then((data) => {
				addListing(data);
                setForm({
                    location: '',
                    description: '',
                    image: ''
                })
			})
			.catch((err) => console.error("couldnt reach server"));
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<input
				type="text"
				name="description"
				value={form.description}
				placeholder="description"
				onChange={(e) => handleChange(e)}
			/>
			<input
				type="text"
				name="location"
				value={form.location}
				placeholder="location"
				onChange={(e) => handleChange(e)}
			/>
			<input
				type="text"
				name="image"
				value={form.image}
				placeholder="image"
				onChange={(e) => handleChange(e)}
			/>
            <input type="submit" value="add listing" />
		</form>
	);
}

export default NewListing;
