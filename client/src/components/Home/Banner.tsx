import styles from "./Home.module.css";

const Banner = () => {
  return (
    <div className={`${styles.banner} flex items-center`}>
      <div className="container flex flex-col items-end gap-8">
        <h4 className="text-secondary-light text-2xl font-bold">
          "Empower Your Body, Transform Your Life <br />
          Your Fitness Journey Starts Here."
        </h4>
        <button className="bg-secondary-light text-secondary-dark px-4 py-2 rounded-full font-bold">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Banner;
