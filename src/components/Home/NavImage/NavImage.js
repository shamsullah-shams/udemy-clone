import React, { useEffect } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import pic2 from "../../../assets/pic2.jpg";
import pic1 from "../../../assets/pic1.jpg";




const NavImage = props => {


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
    );
};


export default NavImage;