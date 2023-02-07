import React, { useState } from "react";
import Logo from "../components/logo/Logo";
import PrimaryButton from "../components/button/primary";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const Register = () => {
	const router = useRouter();

	const [formData, setFormData] = useState({
		username: "Rutuj",
		password: "Rutuj",
		firstname: "Rutuj",
		lastname: "Bokade",
	});

	const { username, password, firstname, lastname } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push("/");
	};

	return (
		<div className="auth__Wrapper">
			<Head>
				<title>Register Account</title>
			</Head>
			<div className="box">
				<div className="titles">
					<Logo />
					<p>Register to create account</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="inputDiv">
						<input
							type="text"
							required
							name="firstname"
							value={firstname}
							onChange={handleChange}
						/>
						<label>Firstname</label>
					</div>
					<div className="inputDiv">
						<input
							type="text"
							required
							name="lastname"
							value={lastname}
							onChange={handleChange}
						/>
						<label>Lastname</label>
					</div>
					<div className="inputDiv">
						<input
							type="text"
							required
							name="username"
							value={username}
							onChange={handleChange}
						/>
						<label>Username</label>
					</div>
					<div className="inputDiv">
						<input
							type="password"
							required
							name="password"
							value={password}
							onChange={handleChange}
						/>
						<label>Password</label>
					</div>
					<div className="dialouge">
						<div  className="forget">
							By Registering you agree to our terms and conditions
						</div>
						<div className="forget"></div>
					</div>
					<div className="buttons">
						<PrimaryButton type="submit">Register</PrimaryButton>
					</div>
					<div className="outro">
						<p>
							Already have an Account?{" "}
							<Link href="/login">Login Now</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;

Register.getLayout = (page) => <>{page}</>;
