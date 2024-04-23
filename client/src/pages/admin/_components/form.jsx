import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `http://localhost:5000/setadmin`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                }),
            }
        );

        const data = await response.json();
        if (response.status === 200) {
            console.log(data);
            setMessage("* Status:  New admin credentials added!");
        } else {
            console.error(`Failed with status code ${response.status}`);
        }
    };

    return (
        <div className="form-container">
            <center>
                <fieldset className="fieldset">
                    <legend>Admin Registration</legend>

                    <form className="form" onSubmit={handleSubmit}>
                        <label className="label">Enter your Email Address: </label>
                        <input className="input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="xyz@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <label>Enter your Name: </label>
                        <input className="input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Admin name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <br />
                        <label>Enter Password: </label>
                        <input className="input"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="New password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <span className="status">
                            {message && <span>{message}</span>}{" "}
                        </span>
                        <button className="button" type="submit">Submit</button>
                    </form>
                </fieldset>
            </center>
        </div>
    );
}
export default Form;
