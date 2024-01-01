import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Join EvoGym today and start your journey towards a healthier,
            happier you. Contact us to learn more about our facilities, classes,
            and membership options. Evolve Your Fitness, Evolve Yourself.
          </p>
          <p>© Evogym — All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Facebook</p>
          <p className="my-5">Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Don't hesitate to contact us for any questions or inquiries you may
            have. Our friendly staff are always here to help you on your fitness
            journey.
          </p>
          <p>(818) 951-5222</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
