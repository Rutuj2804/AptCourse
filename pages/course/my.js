import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CourseCard from "../../components/card/CourseCard";
import { setLoading } from "../../store/settings";

const MyCourses = () => {

	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(setLoading(true))
		setTimeout(()=>dispatch(setLoading(false)), 3000)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return <div>
		<Head>
			<title>My Courses</title>
		</Head>
		<main className="container mt-5">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<CourseCard progress={90} />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<CourseCard progress={10} />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<CourseCard progress={40} />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<CourseCard progress={70} />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<CourseCard progress={5} />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<CourseCard progress={100} />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<CourseCard progress={55} />
				</div>
			</div>
		</main>
	</div>;
};

export default MyCourses;
