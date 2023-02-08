import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import HomeImage from "../assets/home.svg";
import SecondaryButton from "../components/button/secondary";
import { BiNavigation } from "react-icons/bi";
import { useRouter } from "next/router";
import animationData from "../assets/data/a.json";
import Lottie from "lottie-web";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/settings";

const Index = () => {
	const router = useRouter();

	const container = useRef();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setLoading(true));
		setTimeout(() => dispatch(setLoading(false)), 3000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		Lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: animationData,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<main className="container">
				<section className="header">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-12">
							<div className="titles">
								<h1>
									Find best <span>courses</span> by best{" "}
									<span>tutors</span> from all around the
									world
								</h1>
								<p>
									We provide courses on various skills which
									are in demand in market at very affordable
									rates
									<br /> by best tutors in the respective
									fields. Checkout our courses by loginin into
									your account or
									<br /> by registering a account.
								</p>
								<SecondaryButton
									startIcon={<BiNavigation />}
									onClick={() => router.push("search")}
								>
									Checkout
								</SecondaryButton>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<div className="image svg-disable" ref={container}>
								{/* <Image
									src={HomeImage}
									alt="home"
									height={400}
								/> */}
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Index;
