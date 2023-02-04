import React from "react";
import Logo from "../logo/Logo";
import PrimaryButton from "../button/primary";
import SecondaryButton from "../button/secondary";
import { MdLogin } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { useRouter } from "next/router";

const Navbar = () => {

	const router = useRouter()

	return (
		<div className="container">
			<div className="navbar">
				<div className="navbar__Right">
					<Logo />
				</div>
				<div className="navbar__Left">
					<PrimaryButton onClick={()=>router.push("/login")} startIcon={<MdLogin />}>Login</PrimaryButton>
					<SecondaryButton onClick={()=>router.push("/register")} startIcon={<AiOutlineMobile/>}>Register</SecondaryButton>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
