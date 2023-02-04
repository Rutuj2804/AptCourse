import Image from "next/image";
import React from "react";
import CourseOne from "../../assets/course1.jpg";
import SecondaryButton from "../../components/button/secondary";
import PrimaryButton from "../../components/button/primary";
import { FaPlay } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import { Avatar } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import LessonsCard from "../../components/card/LessonsCard";

const chaptersData = [
	{
		name: "Basics",
		duration: {
			hr: 10,
			mn: 32,
		},
		description:
			"Create your first scene and understand fundamentals like cameras, geometries, materials, textures. Add a debug panel to tweak your environment and animate everything.",
		lessons: [
			{
				name: "Introduction",
				isFree: true,
				duration: {
					hr: 0,
					mn: 32,
				},
			},
			{
				name: "What is ReactJS and why use it?",
				isFree: true,
				duration: {
					hr: 0,
					mn: 23,
				},
			},
			{
				name: "What is NodeJS and why use it?",
				isFree: true,
				duration: {
					hr: 0,
					mn: 55,
				},
			},
			{
				name: "What is MERN stack?",
				isFree: false,
				duration: {
					hr: 0,
					mn: 25,
				},
			},
			{
				name: "Prerequisite for the course",
				isFree: false,
				duration: {
					hr: 0,
					mn: 15,
				},
			},
			{
				name: "What is covered in the course",
				isFree: false,
				duration: {
					hr: 0,
					mn: 43,
				},
			},
			{
				name: "Course outcomes",
				isFree: false,
				duration: {
					hr: 1,
					mn: 43,
				},
			},
		],
	},
	{
		name: "HTML and Advance",
		duration: {
			hr: 10,
			mn: 32,
		},
		description:
			"Create your first scene and understand fundamentals like cameras, geometries, materials, textures. Add a debug panel to tweak your environment and animate everything.",
		lessons: [
			{
				name: "Introduction",
				isFree: true,
				duration: {
					hr: 0,
					mn: 32,
				},
			},
			{
				name: "What is HTML and why it is used?",
				isFree: true,
				duration: {
					hr: 0,
					mn: 23,
				},
			},
			{
				name: "Basic tags",
				isFree: false,
				duration: {
					hr: 0,
					mn: 55,
				},
			},
			{
				name: "HTML 5",
				isFree: false,
				duration: {
					hr: 0,
					mn: 25,
				},
			},
			{
				name: "HTML Structures",
				isFree: false,
				duration: {
					hr: 0,
					mn: 15,
				},
			},
			{
				name: "Tags and significance",
				isFree: false,
				duration: {
					hr: 0,
					mn: 43,
				},
			},
			{
				name: "Skeleton of a Web App",
				isFree: false,
				duration: {
					hr: 1,
					mn: 43,
				},
			},
			{
				name: "Advance HTML part 1",
				isFree: false,
				duration: {
					hr: 1,
					mn: 43,
				},
			},
			{
				name: "Advance HTML part 2",
				isFree: false,
				duration: {
					hr: 1,
					mn: 43,
				},
			},
		],
	},
	{
		name: "Cascading Style Sheet",
		duration: {
			hr: 10,
			mn: 32,
		},
		description:
			"Create your first scene and understand fundamentals like cameras, geometries, materials, textures. Add a debug panel to tweak your environment and animate everything.",
		lessons: [
			{
				name: "Introduction",
				isFree: true,
				duration: {
					hr: 0,
					mn: 32,
				},
			},
			{
				name: "What is CSS and why it is used?",
				isFree: true,
				duration: {
					hr: 0,
					mn: 23,
				},
			},
			{
				name: "Types & Selectors",
				isFree: false,
				duration: {
					hr: 0,
					mn: 55,
				},
			},
			{
				name: "SCSS/SASS",
				isFree: false,
				duration: {
					hr: 1,
					mn: 25,
				},
			},
			{
				name: "Assignment",
				isFree: false,
				duration: {
					hr: 0,
					mn: 15,
				},
			},
		],
	},
	{
		name: "Javascript and ReactJS",
		duration: {
			hr: 10,
			mn: 32,
		},
		description:
			"Create your first scene and understand fundamentals like cameras, geometries, materials, textures. Add a debug panel to tweak your environment and animate everything.",
		lessons: [
			{
				name: "Introduction",
				isFree: true,
				duration: {
					hr: 0,
					mn: 32,
				},
			},
			{
				name: "Basics of JavaScript",
				isFree: true,
				duration: {
					hr: 0,
					mn: 23,
				},
			},
			{
				name: "Variables & Loops",
				isFree: false,
				duration: {
					hr: 0,
					mn: 55,
				},
			},
			{
				name: "HTML selectors and DOM events",
				isFree: false,
				duration: {
					hr: 1,
					mn: 25,
				},
			},
			{
				name: "ReactJS Basics",
				isFree: false,
				duration: {
					hr: 1,
					mn: 15,
				},
			},
			{
				name: "Routing in React",
				isFree: false,
				duration: {
					hr: 0,
					mn: 46,
				},
			},
			{
				name: "Advance React",
				isFree: false,
				duration: {
					hr: 2,
					mn: 46,
				},
			},
		],
	},
	{
		name: "NodeJS",
		duration: {
			hr: 10,
			mn: 32,
		},
		description:
			"Create your first scene and understand fundamentals like cameras, geometries, materials, textures. Add a debug panel to tweak your environment and animate everything.",
		lessons: [
			{
				name: "Introduction",
				isFree: true,
				duration: {
					hr: 0,
					mn: 32,
				},
			},
			{
				name: "NodeJS Basics",
				isFree: true,
				duration: {
					hr: 0,
					mn: 23,
				},
			},
			{
				name: "File System in Node",
				isFree: false,
				duration: {
					hr: 0,
					mn: 55,
				},
			},
			{
				name: "Express Server",
				isFree: false,
				duration: {
					hr: 1,
					mn: 25,
				},
			},
			{
				name: "Serve HTML by Express Server",
				isFree: false,
				duration: {
					hr: 0,
					mn: 15,
				},
			},
		],
	},
	{
		name: "MERN Stack",
		duration: {
			hr: 10,
			mn: 32,
		},
		description:
			"Create your first scene and understand fundamentals like cameras, geometries, materials, textures. Add a debug panel to tweak your environment and animate everything.",
		lessons: [
			{
				name: "Introduction",
				isFree: true,
				duration: {
					hr: 0,
					mn: 32,
				},
			},
			{
				name: "MongoDB Basics",
				isFree: true,
				duration: {
					hr: 0,
					mn: 59,
				},
			},
			{
				name: "MongoDB Advance",
				isFree: false,
				duration: {
					hr: 1,
					mn: 35,
				},
			},
			{
				name: "Express and Mongoose",
				isFree: false,
				duration: {
					hr: 1,
					mn: 25,
				},
			},
			{
				name: "Connect Express with MongoDB Server",
				isFree: false,
				duration: {
					hr: 0,
					mn: 55,
				},
			},
			{
				name: "CRUD operations",
				isFree: false,
				duration: {
					hr: 1,
					mn: 15,
				},
			},
			{
				name: "Simple project on MERN stack",
				isFree: false,
				duration: {
					hr: 3,
					mn: 15,
				},
			},
			{
				name: "Assignment",
				isFree: false,
				duration: {
					hr: 0,
					mn: 54,
				},
			},
		],
	},
];

const Course = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Course</title>
			</Head>
			<div className="course__structure">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6 col-12">
							<div className="image">
								<Image src={CourseOne} alt="course" />
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-12">
							<div className="details">
								<h2>
									Web Development With ReactJS and NodeJS By
									Rutuj Bokade
								</h2>
								<p>
									A premium web development course covering
									ReactJS and NodeJS
								</p>
								<div className="author">
									<div
										className="left"
										onClick={() => router.push("/c/@rutuj")}
									>
										<Avatar />
										<div className="profile__details">
											<h6>Rutuj Bokade</h6>
											<p>250k followers</p>
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
										<h4>41</h4>
										<p>Lessons</p>
									</div>
									<div className="line"></div>
									<div className="tag">
										<h4>6</h4>
										<p>Chapters</p>
									</div>
									<div className="line"></div>
									<div className="tag">
										<h4>38 Hrs</h4>
										<p>Content Time</p>
									</div>
								</div>
								<SecondaryButton startIcon={<FaPlay />}>
									Resume Journey
								</SecondaryButton>
							</div>
						</div>
					</div>

					<section className="lessons mt-5">
						<div className="row">
							{chaptersData.map((d, i) => (
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
