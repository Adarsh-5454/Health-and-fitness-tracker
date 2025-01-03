import Footer from "../components/Home/Footer";
import style from "../pages/Contact.module.css";
const Contact = () => {
   return (
      <div>
         <div
            className={`${style.contactBannerSection} w-full  h-96 text-6xl text-white font-medium flex justify-center items-center mx-`}
         >
            Contact us
         </div>
         <div
            className={`${style.contactDetailsSection}   px-36 w-full h-fit bg-purple-50`}
         >
            <h1 className="text-3xl font-medium text-center p-5">
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
                     1800-321-0321, 1800-3036-6303 <br /> (Available from 9 AM
                     to 6 PM)
                  </p>

                  <p className="my-3  text-base text-slate-700">
                     If you are a gym owner or fitness expert looking to
                     purchase gym equipment, connect <br /> with us at: Email:
                     <a
                        href=""
                        className="text-primary-dark no-underline hover:underline"
                     >
                        shopping@fitmaestro.com
                     </a>
                  </p>
                  <ul className="  text-base text-slate-700">
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
                  <input
                     type="text"
                     className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     placeholder="Full Name"
                  />
                  <input
                     type="text"
                     className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     placeholder="User Name"
                  />

                  <input
                     type="text"
                     className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     placeholder="Country"
                  />
                  <input
                     type="text"
                     className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     placeholder="Role"
                  />
                  <input
                     type="text"
                     className="w-full p-2 mb-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     placeholder="Comments"
                  />

                  <p className="my-2">
                     I'd like to receive more information about TUNE; I
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
                  <button className="py-2 px-5 w-fit mb-6 text-lg font-bold border-primary-dark text-white rounded-md bg-primary-light hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500">
                     Send Message
                  </button>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Contact;
