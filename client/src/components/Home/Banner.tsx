import styles from "./Home.module.css";

const Banner = () => {
  return (
    <div className={`${styles.banner} flex items-center justify-end`}>
      <div className="px-24">
        <h4 className="text-secondary-light text-2xl font-bold mb-4">
          "Empower Your Body, Transform Your Life <br />
          Your Fitness Journey Starts Here."
        </h4>
        <button className="bg-secondary-light text-secondary-dark px-4 py-2 rounded-full font-bold float-end">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Banner;
