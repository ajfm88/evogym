import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes are designed to help you build strength, increase muscle mass, and improve your overall fitness level.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Our Yoga classes are designed to help you improve your flexibility, reduce stress, and promote overall health and wellness.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our abdominal classes are designed to help you strengthen your core muscles, improve your posture, and achieve a leaner, more toned physique.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Our adventure classes, held in the great outdoors, offer a unique and exciting way to stay fit while exploring the beauty of nature, and are led by experienced trainers who will challenge you to push your limits and achieve your fitness goals.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Our fitness classes are designed to provide a dynamic and high-energy workout that will help you improve your cardiovascular endurance, build strength, and boost your metabolism, all while having fun and being part of a supportive fitness community.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Our training classes are designed to provide you with personalized instruction and support from our expert trainers, who will help you develop proper technique, set achievable goals, and achieve real results in a supportive and motivating environment.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              We offer a wide range of classes to help you get the most out of
              your workouts, including: Strength Training, Cardio, Yoga,
              Pilates, Spinning, Zumba, and more! No matter your fitness level
              or goals, we have a class that's right for you. Our experienced
              instructors will guide you through every step of the way, ensuring
              that you get the most out of your workout.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
