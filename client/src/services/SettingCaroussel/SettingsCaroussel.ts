export const settingsMovies = {
  className: "center",
  centerMode: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
export const settingsCaroussels = {
  className: "center",
  centerMode: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
