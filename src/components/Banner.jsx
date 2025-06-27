import React from 'react'

const Banners = () => {
const images = [
    { src: "banner5.jpg", alt: "firstimage"},
    { src: "banner4.webp", alt: "secondimage" },
    { src: "banner3.png", alt: "secondimage" }
    
];


const [current, setCurrent] = React.useState(0);

React.useEffect(() => {
    const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
}, [images.length]);

const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
};

const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
};

return (
    <div className="banner-carousel" style={{ position: "relative", width: "100%", textAlign: "center" }}>
        <button onClick={prevImage} style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", backgroundColor:'grey',width:'20px'}}>
            {"<"}
        </button>
        <img
            src={images[current].src}
            alt={images[current].alt}
            style={{ width: "100%", height: "500px" }}
        />
        <button onClick={nextImage} style={{ position: "absolute", right: 0, top: "50%", transform: "translatey(-50%)" ,backgroundColor:'grey',width:'20px'}}>
            {">"}
        </button>
    </div>
);
}

export default Banners
