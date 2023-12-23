import { useState } from "react";

const Faq = () => {
  const [toggleFaq, setToggleFaq] = useState(false);

  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2">
      <div className="bg-[#fff] p-6 rounded-xl max-w-[40rem] m-6">
        <div className="flex items-center mb-6">
          <img src="../../public/images/icon-star.svg" alt="star icon" />
          <h1 className="ml-6 font-bold text-[45px]">FAQs</h1>
        </div>

        <div>
          <div className="mb-2">
            <div className="flex justify-between mb-3 items-center">
              <h3 className="font-medium">
                What is Frontend Mentor, and how it will help me?
              </h3>
              <img
                src={
                  toggleFaq
                    ? "../../public/images/icon-minus.svg"
                    : "../../public/images/icon-plus.svg"
                }
                alt="toggle icon"
              />
            </div>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              ipsum, minus dolore saepe quisquam dolor cupiditate iure fugit
              unde consectetur consequuntur cumque, voluptate debitis labore.
            </p>
          </div>

          <div className="mb-2">
            <div className="flex justify-between mb-3 items-center">
              <h3 className="font-medium">Is Frontend Mentor Free?</h3>
              <img
                src={
                  toggleFaq
                    ? "../../public/images/icon-minus.svg"
                    : "../../public/images/icon-plus.svg"
                }
                alt="toggle icon"
              />
            </div>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              ipsum, minus dolore saepe quisquam dolor cupiditate iure fugit
              unde consectetur consequuntur cumque, voluptate debitis labore.
            </p>
          </div>

          <div className="mb-2">
            <div className="flex justify-between mb-3 items-center">
              <h3 className="font-medium">
                Can I use Frontend Mentor Projects in my Portfolio?
              </h3>
              <img
                src={
                  toggleFaq
                    ? "../../public/images/icon-minus.svg"
                    : "../../public/images/icon-plus.svg"
                }
                alt="toggle icon"
              />
            </div>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              ipsum, minus dolore saepe quisquam dolor cupiditate iure fugit
              unde consectetur consequuntur cumque, voluptate debitis labore.
            </p>
          </div>

          <div>
            <div className="flex justify-between mb-3 items-center">
              <h3 className="font-medium">
                How Can I get help if I'm stuck on a challenge?
              </h3>
              <img
                src={
                  toggleFaq
                    ? "../../public/images/icon-minus.svg"
                    : "../../public/images/icon-plus.svg"
                }
                alt="toggle icon"
              />
            </div>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              ipsum, minus dolore saepe quisquam dolor cupiditate iure fugit
              unde consectetur consequuntur cumque, voluptate debitis labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
