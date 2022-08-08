import React, { useEffect } from "react";
import Header from "../../components/UI/Header/Header";
import Navbar from "../../components/UI/Navbar/Navbar";
import CourseComponent from "../../components/CourseComponent/CourseComponent";
import image2 from "../../assets/python1.jpeg";
import image3 from "../../assets/js.png";
import image4 from "../../assets/c++.png";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from '@mui/icons-material/Star';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Category from "../../components/Category/Category";
import Cat1 from "../../assets/cat1.jpg";
import Cat2 from "../../assets/cat2.jpg";
import Cat3 from "../../assets/cat3.jpg";
import Cat4 from "../../assets/cat4.jpg";
import Cat5 from "../../assets/cat5.jpg";
import Cat6 from "../../assets/cat6.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic1 from "../../assets/pic1.jpg";
import "./Home.css";

const Home = () => {

    useEffect(() => {
        document.getElementById("imagechanger").style.backgroundImage = `url(${pic1})`
    }, []);

    const changeBackgroundImage = (event) => {

        event.preventDefault(event);
        const divElement = document.getElementById('imagechanger').style.backgroundImage;
        if (divElement === `url("${pic1}")`) {
            document.getElementById('imagechanger').style.backgroundImage = `url("${pic2}")`
        } else {
            document.getElementById('imagechanger').style.backgroundImage = `url("${pic1}")`
        }
    }

    return (
        <React.Fragment>
            <Header />
            <div>
                <div onClick={changeBackgroundImage} className="BackgroundImage" id="imagechanger">
                    <div>
                        <div className="PictureComponent">
                            <span>Learning that gets you</span>
                            <p>Skills for your present (and your future). Get started with us.</p>
                        </div>
                        <ArrowBackIosIcon className="LeftArrow Arrow" />
                    </div>
                    <ArrowForwardIosIcon className="RightArrow Arrow" />
                </div>
                <div className="HomeDiv">
                    <h1>A broad selection of courses</h1>
                    <span>Choose from 185,000 online video courses with new additions published every month </span>
                    <Navbar />
                    <div className="HomeSecondDiv">
                        <h2>Expand your career opportunities with Python</h2>
                        <p>
                            Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...
                        </p>
                        <div className="CourseComponent">
                            <CourseComponent
                                redirect="/"
                                imageUrl={image2}
                                title="python"
                                content="Maxmillian Schwarsmuler"
                            />
                            <CourseComponent
                                redirect="/"
                                imageUrl={image3}
                                title="js"
                                content="Maxmillian Schwarsmuler"
                            />
                            <CourseComponent
                                redirect="/"
                                imageUrl={image4}
                                title="c++"
                                content="Maxmillian Schwarsmuler"
                            />
                            <CourseComponent
                                redirect="/"
                                imageUrl={image2}
                                title="python"
                                content="Maxmillian Schwarsmuler"
                            />
                            <CourseComponent
                                redirect="/"
                                imageUrl={image3}
                                title="js"
                                content="Maxmillian Schwarsmuler"
                            />
                            <CourseComponent
                                redirect="/"
                                imageUrl={image4}
                                title="c++"
                                content="Maxmillian Schwarsmuler"
                            />
                        </div>
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
                    <div className="CourseComponent">
                        <CourseComponent
                            redirect="/"
                            imageUrl={image2}
                            title="python"
                            content="Maxmillian Schwarsmuler"
                        />
                        <CourseComponent
                            redirect="/"
                            imageUrl={image3}
                            title="js"
                            content="Maxmillian Schwarsmuler"
                        />
                        <CourseComponent
                            redirect="/"
                            imageUrl={image4}
                            title="c++"
                            content="Maxmillian Schwarsmuler"
                        />
                        <CourseComponent
                            redirect="/"
                            imageUrl={image2}
                            title="python"
                            content="Maxmillian Schwarsmuler"
                        />
                        <CourseComponent
                            redirect="/"
                            imageUrl={image3}
                            title="js"
                            content="Maxmillian Schwarsmuler"
                        />
                        <CourseComponent
                            redirect="/"
                            imageUrl={image4}
                            title="c++"
                            content="Maxmillian Schwarsmuler"
                        />
                    </div>
                    <h1>Top Categories</h1>
                    <div className="CourseComponent">
                        <Category imageUrl={Cat1} title="Design" />
                        <Category imageUrl={Cat2} title="Web" />
                        <Category imageUrl={Cat3} title="Programming" />
                    </div>
                    <div className="CourseComponent">
                        <Category imageUrl={Cat4} title="Design" />
                        <Category imageUrl={Cat5} title="Design" />
                        <Category imageUrl={Cat6} title="Design" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;