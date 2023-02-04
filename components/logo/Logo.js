import { useRouter } from "next/router";
import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";

const Logo = () => {
	const router = useRouter();
    
	return (
		<div className="logo" onClick={() => router.push("/")}>
			<BsFillTriangleFill size={40} />
			<h6>Course</h6>
		</div>
	);
};

export default Logo;
