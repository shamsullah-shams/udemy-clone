import React, { useEffect } from "react";
import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar/Navbar";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import NavImage from "./NavImage/NavImage";
import StarIcon from '@mui/icons-material/Star';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Category from "../UI/Category/Category";
import Cat1 from "../../assets/cat1.jpg";
import Cat2 from "../../assets/cat2.jpg";
import Cat3 from "../../assets/cat3.jpg";
import Cat4 from "../../assets/cat4.jpg";
import Cat5 from "../../assets/cat5.jpg";
import Cat6 from "../../assets/cat6.jpg";
import "./Home.css";
import Courses from "./CourseComponent/Courses/Courses";

const Home = () => {


    return (
        <React.Fragment>
            <Header />
            <div>
                <NavImage />
                <div className="HomeDiv">
                    <h1>A broad selection of courses</h1>
                    <span>Choose from 185,000 online video courses with new additions published every month </span>
                    <Navbar />
                    <div className="HomeSecondDiv">
                        <h2>Expand your career opportunities with Python</h2>
                        <button className="ExplorePython">Explore python</button>
                        <p>
                            Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...
                        </p>
                        <Courses />
                    </div>
                    <div className="CourseComponent">
                        <div className="IconDiv">
                            <PlayCircleOutlineIcon className="Icon" />
                            <span>Learn in-demand skills with over 185,000 video courses</span>
                        </div>
                        <div className="IconDiv">
                            <StarIcon className="Icon" />
                            <span>Choose courses taught by real-world experts</span>
                        </div>
                        <div className="IconDiv">
                            <AllInclusiveIcon className="Icon" />
                            <span>Learn at your own pace, with lifetime access on mobile and desktop</span>
                        </div>
                    </div>
                    <h2>Student are viewing</h2>
                    <Courses />
                    <h1>Top Categories</h1>
                    <div className="CourseComponent">
                        <Category imageUrl={Cat1} title="Design" />
                        <Category imageUrl={Cat2} title="Web" />
                        <Category imageUrl={Cat3} title="Programming" />
                    </div>
                    <div className="CourseComponent">
                        <Category imageUrl={Cat4} title="Music" />
                        <Category imageUrl={Cat5} title="Personal Development" />
                        <Category imageUrl={Cat6} title="PhotoGraphy" />
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;