import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { TbSearch } from "react-icons/tb";
import CourseCard from "../../components/card/CourseCard";
import { BsArrowRight } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/settings";
import Head from "next/head";

const Search = () => {

	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(setLoading(true))
		setTimeout(()=>dispatch(setLoading(false)), 3000)
	}, [])

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
				<section className="most__loved">
					<h6>Most Loved Courses <BsArrowRight/></h6>
					<div className="scroller">
						<div className="row">
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
				<section className="free">
                    <h6>Free Course <BsArrowRight/></h6>
					<div className="scroller">
						<div className="row">
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
				<section className="short__duration">
                    <h6>Short Duration Courses <BsArrowRight/></h6>
					<div className="scroller">
						<div className="row">
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
			</div>
		</div>
	);
};

export default Search;
