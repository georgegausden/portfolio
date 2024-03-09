import text from "../components/text";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <div className=" grid grid-cols-6">
      <div className="col-span-4">
      <h2 className="mt-0">Biography</h2>

    {/* get my biography */}
      <p>{text[0].biography}</p>
      <h2>My Practice</h2>
      <p>{text[0].artiststatement}</p>
      </div>
      <div className="col-span-1 col-start-6">
      <Navbar />
      </div>
      

    </div>
  );
}
