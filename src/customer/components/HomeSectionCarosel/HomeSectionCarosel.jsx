import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from "@mui/material";
const HomeSectionCarosel = () => {

    // const responsive = {
    //     0: { items: 1 },       // 1 item cho màn hình nhỏ hơn 720px

    //     720: { items: 3 },    // 3 items cho màn hình từ 1024px đến 1279px

    //     1400: { items: 5.5 },    // 4 items cho màn hình từ 1280px trở lên
    // };
    const responsive = {
        0: { items: 1 },       // 1 item cho màn hình nhỏ hơn 720px
        300: { items: 2 },     // 2 items cho màn hình từ 720px đến 1023px
        720: { items: 3 },    // 3 items cho màn hình từ 1024px đến 1279px
        1280: { items: 4 },
        1400: { items: 5 },    // 4 items cho màn hình từ 1280px trở lên
    };
    const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
    return (
        <div className="relative px-4 lg:px-8">
            <div className="relative p-5 border border-black ">

                <AliceCarousel
                    items={items}
                    autoHeight
                    disableButtonsControls
                    disableDotsControls
                    infinite
                    responsive={responsive}

                />

                <Button variant="contained" className="z-50 bg-white" sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white" }}
                    aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
                <Button variant="contained" className="z-50 bg-white" sx={{ position: "absolute", top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(90deg)", bgcolor: "white" }}
                    aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                </Button>
            </div>
        </div>

    )
}
export default HomeSectionCarosel;