import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import CourseCard from "../../components/card/CourseCard";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/settings";
import Head from "next/head";
import courseData from "../../assets/data/data";

const Search = () => {
	const dispatch = useDispatch();
	
	const [search, setSearch] = useState("");

	const [data, setData] = useState([]);

	useEffect(() => {
		dispatch(setLoading(true));
		setTimeout(() => dispatch(setLoading(false)), 3000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChange = (e) => {
		if (e.target.value === "") {
			setData([]);
		} else {
			setData(
				courseData.filter((v) =>
					v.name.toLowerCase().includes(e.target.value.toLowerCase())
				)
			);
		}
		setSearch(e.target.value);
	};

	return (
		<div className="search__wrapper">
			<Head>
				<title>Search</title>
			</Head>
			<div className="container">
				<div className="form">
					<div className="row">
						<div className="col-lg-6 col-md-8 col-12">
							<form>
								<div className="input">
									<TbSearch />
									<input
										type="text"
										placeholder="Search course..."
										required
										value={search}
										onChange={handleChange}
									/>
								</div>
								<Button
									type="submit"
									className="custom__button primary__button"
								>
									<TbSearch />
								</Button>
							</form>
						</div>
					</div>
				</div>

				{data.length > 0 || search !== "" ? (
					<section>
						<h6>
							Search results for <strong>{search}</strong>{" "}
							<BsArrowRight />
						</h6>
						{data.length ? null : (
							<p>
								No course exists as <strong>{search}</strong>
							</p>
						)}
						<div className="scroller">
							<div className="row">
								{data.map((v) => (
									<div className="col-lg-4 col-md-6 col-12" key={v.id}>
										<CourseCard
											title={v.name.slice(0, 35) + "..."}
											description={
												v.subDescription.slice(0, 60) +
												"..."
											}
											isFree={v.isFree}
											isSaved={v.isSaved}
											registeredStudents={
												v.registeredStudents
											}
											image={v.coverImage}
											id={v.id}
										/>
									</div>
								))}
							</div>
						</div>
					</section>
				) : (
					<>
						<section className="most__loved">
							<h6>
								Most Loved Courses <BsArrowRight />
							</h6>
							<div className="scroller">
								<div className="row">
									{courseData.slice(0,3).map((v) => (
										<div className="col-lg-4 col-md-6 col-12" key={v.id}>
											<CourseCard
												key={v?.id}
												title={
													v?.name.slice(0, 35) + "..."
												}
												description={
													v?.subDescription.slice(
														0,
														60
													) + "..."
												}
												isFree={v?.isFree}
												isSaved={v?.isSaved}
												registeredStudents={
													v?.registeredStudents
												}
												image={v?.coverImage}
												id={v?.id}
											/>
										</div>
									))}
								</div>
							</div>
						</section>
						<section className="free">
							<h6>
								Free Course <BsArrowRight />
							</h6>
							<div className="scroller">
								<div className="row">
									{courseData.slice(1,4).map((v) => (
										<div className="col-lg-4 col-md-6 col-12" key={v.id}>
											<CourseCard
												key={v?.id}
												title={
													v?.name.slice(0, 35) + "..."
												}
												description={
													v?.subDescription.slice(
														0,
														60
													) + "..."
												}
												isFree={v?.isFree}
												isSaved={v?.isSaved}
												registeredStudents={
													v?.registeredStudents
												}
												image={v?.coverImage}
												id={v?.id}
											/>
										</div>
									))}
								</div>
							</div>
						</section>
						<section className="short__duration">
							<h6>
								Short Duration Courses <BsArrowRight />
							</h6>
							<div className="scroller">
								<div className="row">
									{courseData.slice(2,5).map((v) => (
										<div className="col-lg-4 col-md-6 col-12" key={v.id}>
											<CourseCard
												key={v?.id}
												title={
													v?.name.slice(0, 35) + "..."
												}
												description={
													v?.subDescription.slice(
														0,
														60
													) + "..."
												}
												isFree={v?.isFree}
												isSaved={v?.isSaved}
												registeredStudents={
													v?.registeredStudents
												}
												image={v?.coverImage}
												id={v?.id}
											/>
										</div>
									))}
								</div>
							</div>
						</section>
					</>
				)}
			</div>
		</div>
	);
};

export default Search;
