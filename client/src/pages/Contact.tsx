import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Input from "../components/Inputbox/Input";
import style from "../pages/Contact.module.css";
const Contact = () => {
  return (
    <div>
      <div
        className={`${style.contactBannerSection} w-full  h-96 text-6xl text-white font-medium flex justify-center items-center mx-`}
      >
        <h1 className="mt-10">Contact us</h1>
      </div>
      <div
        className={`${style.contactDetailsSection}   px-36 w-full h-fit bg-purple-50`}
      >
        <h1 className="text-3xl font-medium text-center p-5 ">
          Let's Start a Conversation
        </h1>

        <div className="grid grid-cols-2 gap-4 text-cenetr">
          <div className={`${style.contactDetails}`}>
            <h3 className="text-xl font-medium text-center p-5">
              Ask how we can help you:
            </h3>
            <p className="my-2  font-medium">
              For general inquiries, feel free to contact us at:
            </p>
            <p className="my-3 p-5   text-base text-slate-700">
              Email: hello@fitmaestro.com <br /> Phone: +91-9876543210,
              1800-321-0321, 1800-3036-6303 <br /> (Available from 9 AM to 6 PM)
            </p>

            <p className="my-3  text-base text-slate-700 p-5">
              If you are a gym owner or fitness expert looking to purchase gym
              equipment, connect with us at: Email:
              <a
                href=""
                className="text-primary-dark no-underline hover:underline"
              >
                shopping@fitmaestro.com
              </a>
            </p>
            <ul className="  text-base text-slate-700 p-5">
              <li>Fitmaestro</li>
              <li>Trivandrum,</li>
              <li>Kerala,</li>
              <li>012345,</li>
            </ul>
          </div>
          <div
            className={`${style.newsLetterSubscriptionForm} flex flex-col items-center`}
          >
            <h3 className="text-xl font-medium text-center p-5 mb-5">
              Please note: all fields are required.
            </h3>

            <Input placeholder={"Full Name"} type={"text"} />
            <Input placeholder={"User Name"} type={"text"} />
            <Input placeholder={"Country"} type={"text"} />
            <Input placeholder={"Role"} type={"text"} />
            <Input placeholder={"Comments"} type={"text"} />
            <p className="my-2">
              I'd like to receive more information about Fitmaestro; I
              understand and agree to the
              <a
                href=""
                className="text-primary-dark no-underline hover:underline"
              >
                privacy policy
              </a>
              .
            </p>
            <p className="my-2">
              This site is protected by reCAPTCHA and the Google
              <a
                href=""
                className="text-primary-dark no-underline hover:underline"
              >
                privacy policy
              </a>{" "}
              and
              <a
                href=""
                className="text-primary-dark no-underline hover:underline"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
            <Button label={"Send Message"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
