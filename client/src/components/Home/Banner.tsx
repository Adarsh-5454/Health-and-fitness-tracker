import styles from "./Home.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="font-gill-sans text-white text-[30px] ml-[710px] absolute top-[150px] my-10">
        <p>
          "Empower Your Body, Transform Your Life <br />
          Your Fitness Journey Starts Here."
        </p>
        <button className="bg-[#ddd] font-gill-sans font-bold border-none text-gray-800 px-[15px] py-[5px] rounded-[30px] mt-[30px] text-lg">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Banner;
