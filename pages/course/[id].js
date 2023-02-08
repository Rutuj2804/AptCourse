import Image from "next/image";
import React, { useEffect } from "react";
import SecondaryButton from "../../components/button/secondary";
import PrimaryButton from "../../components/button/primary";
import { FaPlay } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import { Avatar } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import LessonsCard from "../../components/card/LessonsCard";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/settings";
import data from "../../assets/data/data";

const Course = () => {
	const router = useRouter();

	const dispatch = useDispatch();

	const id = router.query.id;

	const courseData = data.filter((v) => v.id == id)[0];

	useEffect(()=>{
		if(!courseData) router.push("/")
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [courseData])

	useEffect(() => {
		dispatch(setLoading(true));
		setTimeout(() => dispatch(setLoading(false)), 3000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Head>
				<title>{courseData?.name}</title>
			</Head>
			<div className="course__structure">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-12">
							<div className="image">
								<Image
									src={courseData?.coverImage}
									alt="course"
								/>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<div className="details">
								<h2>{courseData?.name}</h2>
								<p>{courseData?.subDescription}</p>
								<div className="author">
									<div
										className="left"
										onClick={() => router.push("/c/@rutuj")}
									>
										<Avatar />
										<div className="profile__details">
											<h6>{courseData?.user.name}</h6>
											<p>
												{courseData?.user.followers}{" "}
												followers
											</p>
										</div>
									</div>
									<PrimaryButton
										startIcon={<RiUserFollowFill />}
									>
										Follow
									</PrimaryButton>
								</div>
								<div className="tags">
									<div className="tag">
										<h4>
											{courseData?.information.lessons}
										</h4>
										<p>Lessons</p>
									</div>
									<div className="line"></div>
									<div className="tag">
										<h4>
											{courseData?.information.chapters}
										</h4>
										<p>Chapters</p>
									</div>
									<div className="line"></div>
									<div className="tag">
										<h4>
											{
												courseData?.information
													.contentTime
											}{" "}
											Hrs
										</h4>
										<p>Content Time</p>
									</div>
								</div>
								<SecondaryButton
									startIcon={<FaPlay />}
									onClick={() =>
										router.push(`/watch/${courseData?.id}`)
									}
								>
									Resume Journey
								</SecondaryButton>
							</div>
						</div>
					</div>

					<section className="lessons mt-5">
						<div className="row">
							{courseData?.chapters.map((d, i) => (
								<div
									className="col-lg-4 col-md-6 col-12"
									key={i}
								>
									<LessonsCard data={d} i={i + 1} />
								</div>
							))}
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Course;
