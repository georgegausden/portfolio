'use client'
import text from "../components/text";
import Navbar from "../components/navbar";
import {motion, AnimatePresence} from "framer-motion";

export default function About() {
  return (
    <AnimatePresence>
    <motion.div className=" grid grid-cols-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ ease: "easeInOut", duration: 1 }}
    >
      <div className="md:col-span-4 sm:col-span-6">
      <h2 className="mt-0">Biography</h2>

    {/* get my biography */}
      <p>{text[0].biography}</p>
      <h2>My Practice</h2>
      <p>{text[0].artiststatement}</p>
      </div>
      <div className="md:col-span-1 md:col-start-6 md:visible sm:collapse">
      <Navbar />
      </div>
      

    </motion.div>
    </AnimatePresence>
  );
}
