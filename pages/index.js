import Head from "next/head";
import Image from "next/image";
import React from "react";
import HomeImage from "../assets/home.svg";
import SecondaryButton from "../components/button/secondary";
import { BiNavigation } from "react-icons/bi";
import { useRouter } from "next/router";

const Index = () => {
	const router = useRouter();

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
									Find best <span>courses</span> by <br />
									best <span>tutors</span> from all around
									<br /> the world
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
							<div className="image">
								<Image
									src={HomeImage}
									alt="home"
									height={400}
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Index;
