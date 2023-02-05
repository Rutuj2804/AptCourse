import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import CourseOne from "../../assets/course1.jpg";
import { RiUserFollowFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import SecondaryButton from "../../components/button/secondary";
import PrimaryButton from "../../components/button/primary";
import CourseCard from "../../components/card/CourseCard";
import { BsArrowRight } from "react-icons/bs";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Rating } from "@mui/material";

const Author = () => {
	const router = useRouter();
	// router.query.id
	return (
		<>
			<Head>
				<title>Rutuj Bokade</title>
			</Head>
			<main>
				<section className="author__header">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-12">
								<div className="image">
									<Image src={CourseOne} alt="author" />
								</div>
							</div>
							<div className="col-lg-8 col-md-6 col-12">
								<div className="author__details">
									<h1>Rutuj Jeevan Bokade</h1>
									<p>
										Create your first scene and understand
										fundamentals like cameras, geometries,
										materials, textures. Add a debug panel
										to tweak your environment and animate
										everything.
									</p>
									<div className="tags">
										<div className="tag">
											<h4>4.1</h4>
											<p>Hearts</p>
										</div>
										<div className="line"></div>
										<div className="tag">
											<h4>6</h4>
											<p>Courses</p>
										</div>
										<div className="line"></div>
										<div className="tag">
											<h4>250k</h4>
											<p>Followers</p>
										</div>
									</div>
									<div className="buttons">
										<SecondaryButton
											startIcon={<RiUserFollowFill />}
										>
											Follow
										</SecondaryButton>
										<PrimaryButton
											startIcon={<SiDiscord />}
										>
											Join Discord
										</PrimaryButton>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="courses__offered">
					<div className="container">
						<div className="row">
							<h6 className="title__tag">
								Courses offered <BsArrowRight />
							</h6>
							<div className="col-lg-4 col-md-6 col-12">
								<CourseCard />
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<CourseCard />
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<CourseCard />
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<CourseCard />
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<CourseCard />
							</div>
							<div className="col-lg-4 col-md-6 col-12">
								<CourseCard />
							</div>
						</div>
					</div>
				</section>
				<section className="rate">
					<div className="container">
						<h6 className="title__tag">Rate Author <BsArrowRight /></h6>
						<div className="hearts__div">
							<p>Whats your experience with Rutuj?</p>
							<Rating
								name="customized-color"
								defaultValue={2}
								getLabelText={(value) =>
									`${value} Heart${value !== 1 ? "s" : ""}`
								}
								precision={1}
								icon={<FavoriteIcon fontSize="inherit" />}
								emptyIcon={
									<FavoriteBorderIcon fontSize="inherit" />
								}
							/>
						</div>
					</div>
				</section>
				<section className="rate mb-5">
					<div className="container">
						<h6 className="title__tag">Follow Author <BsArrowRight /></h6>
						<div className="hearts__div">
							<p>Follow me on my social media</p>
							<div className="media">
								<IconButton className="f" size="large"><FaFacebookF /></IconButton>
								<IconButton className="i" size="large"><FaInstagram /></IconButton>
								<IconButton className="t" size="large"><FaTwitter /></IconButton>
								<IconButton className="y" size="large"><FaYoutube /></IconButton>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Author;
