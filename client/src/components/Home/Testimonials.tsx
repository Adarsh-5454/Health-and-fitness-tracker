// Import testimonial images
import test1 from "../../assets/home/test1.jpg";
import test2 from "../../assets/home/test2.jpg";
import test3 from "../../assets/home/test4.png";

// Define types for testimonials
type Testimonial = {
  id: string;
  imgUrl: string;
  name: string;
  description: string;
};

// Testimonials array
const testimonials: Testimonial[] = [
  {
    id: "test1",
    imgUrl: test1,
    name: "Shink Mink",
    description: "This is a fantastic service! Highly recommend to everyone.",
  },
  {
    id: "test2",
    imgUrl: test2,
    name: "Jay Cutler",
    description: "Amazing experience! Will definitely use it again.",
  },
  {
    id: "test3",
    imgUrl: test3,
    name: "Nigga Bob",
    description: "A game changer! I can't believe how easy it was.",
  },
];

const Testimonials = () => {
  return (
    <div>
      <h2 className="font-gill-sans text-white text-center mt-[50px] font-bold">
        TESTIMONIALS
      </h2>
      <div className="flex justify-around flex-wrap my-[20px] px-[20px]">
        {testimonials.map(({ id, imgUrl, name, description }) => (
          <div
            key={id}
            className="bg-[#a294f9] rounded-[10px] shadow-md w-[240px] m-[10px] p-[20px] text-center"
          >
            <img
              src={imgUrl}
              alt={name}
              className="w-[200px] h-[200px] mb-[10px] rounded-full"
            />
            <h3 className="font-gill-sans my-[5px] font-bold text-lg">
              {name}
            </h3>
            <p className="font-gill-sans text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
