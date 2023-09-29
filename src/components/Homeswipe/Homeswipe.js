import { Swiper, SwiperSlide } from "swiper/react";
//module imports
import { Navigation, Pagination } from "swiper/modules";
// photos for swiper
import coffeeMachine from "../../images/coffeeMachine.jpg";
import snackBar from "../../images/snackBar.jpg";
import photoKids from "../../images/TreehouseKids.jpg";
import counter from "../../images/treehouseCounter.jpg";

// CSS imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Homeswiper.css";

const Homeswiper = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={photoKids} alt="tree house kids" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coffeeMachine} alt="Coffee Machine" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={snackBar} alt="Snacks offered at TreeHouse" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={counter} alt="Snack counter for guest" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Homeswiper;
