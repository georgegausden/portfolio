import text from "../components/text";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="">
      <h1 className="text-3xl align-middle mt-10">George Gausden</h1>

      <div className="grid grid-cols-4 mt-10">
        <h2>Address</h2>
        <p>Montréal, Canada</p>
        <h2>Phone</h2>
        <p>{`(514)-603-4335`}</p>
      </div>
      <div className="grid grid-cols-4 mt-5">
        <h2>Email</h2>
        <Link href="mailto:george.philip.gausden@gmail.com" className="hover:font-extrabold">
          george.philip.gausden@gmail.com
        </Link>
      </div>

      <div className="mt-10">
        <h3>01 Employment History</h3>
      </div>

      <div className="grid grid-cols-2 grid-rows-4 mt-5">
        <h4>{`06/2023 - Present`}</h4>
        <div>
          <h5>Web Designer at Studio NewKid</h5>
          <ul>
            <li
              style={{ listStyleType: "square", marginLeft: "3rem" }}
            >{`Utilized HTML, CSS, and JavaScript to create visually appealing and interactive webpages`}</li>
            <li
              style={{ listStyleType: "square", marginLeft: "3rem" }}
            >{`Researched and identified the latest trends in design and implemented them to create a
modern and engaging look for the company`}</li>
          </ul>
        </div>

        <h4>{`05/2023 - 07/2023`}</h4>
        <div>
            <h5>Illustration Designer at Oxygen Publishing</h5>
        </div>
      </div>
    </div>
  );
}
