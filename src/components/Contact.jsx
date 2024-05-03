// Contact.js
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_yvsscgp',
        'template_we940s5',
        {
          from_name: form.name,
          to_name: "Ndahayo Celestin",
          from_email: form.email,
          to_email: "celestin.np@gmail.com",
          message: form.message,
        },
        '_aKdVO117sWQYjWkO'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const yourWhatsAppNumber = '+250725483535'; // Replace with your actual WhatsApp number if needed
  const yourTelegramId = 'celestin04'; // Replace with your actual Telegram ID

  const handleWhatsAppClick = () => {
    const whatsAppUrl = `https://wa.me/${yourWhatsAppNumber}`;
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Version') !== -1) {
      window.open(whatsAppUrl, '_blank');
    } else {
      window.location.href = whatsAppUrl;
    }
  };

  const handleTelegramClick = () => {
    const telegramUrl = `https://t.me/${yourTelegramId}`;
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Version') !== -1) {
      window.open(telegramUrl, '_blank');
    } else {
      window.location.href = telegramUrl;
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="flex gap-4 mt-4">
          <a href="#" onClick={handleWhatsAppClick} className="contact-link">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" /> WhatsApp
          </a>
          <a href="#" onClick={handleTelegramClick} className="contact-link">
            <FontAwesomeIcon icon={faTelegram} size="lg" /> Telegram
          </a>
        </div>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
