import React, { useState } from "react";
import Logo from "../components/logo/Logo";
import PrimaryButton from "../components/button/primary";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const Login = () => {
	const router = useRouter();

	const [formData, setFormData] = useState({
		username: "Rutuj",
		password: "Rutuj",
	});

	const { username, password } = formData;

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
				<title>Login Account</title>
			</Head>
			<div className="box">
				<div className="titles">
					<Logo />
					<p>Login to your account</p>
				</div>
				<form onSubmit={handleSubmit}>
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
						<div></div>
						<div className="forget">Forget Password?</div>
					</div>
					<div className="buttons">
						<PrimaryButton type="submit">Login</PrimaryButton>
					</div>
					<div className="outro">
						<p>
							Don&apos;t have an Account?{" "}
							<Link href="/register">Register Now</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

Login.getLayout = (page) => <>{page}</>;
