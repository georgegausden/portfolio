
'use client'
import text from "../components/text";
import Link from "next/link";
import {motion} from "framer-motion";


const MotionLi = ({ children }: { children: React.ReactNode }) => (
  <motion.li
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 2 }}
    variants={{
      visible: { color: "black", opacity: 1 },
      hidden: { color: "gray", opacity: 0.}
    }}
  >
    {children}
  </motion.li>
);



export default function Resume() {
  return (
    <div className="text-justify md:px-10 md:pr-[200px] normal-case">
      <h1 className="text-3xl align-middle mt-10"></h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-10">
        <div className="flex">
        <h2>Address</h2>
        <p className="pl-5 text-gray-400">Montréal, Canada</p>
        </div>

        <div className="flex">
        <h2>Phone</h2>
        <p className="pl-5 text-gray-400">{`(514)-603-4335`}</p>
        </div>
      </div>


      <div className="flex md:mt-2">
        <h2>Email</h2>
        <Link
          href="mailto:george.philip.gausden@gmail.com"
          className="hover:font-extrabold hover:text-black transition-all ease-in-out duration-500 pl-5 text-gray-400"
        >
          george.philip.gausden@gmail.com
        </Link>
      </div>

      <div className="mt-10">
        <h3>01 Employment History</h3>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 md:grid-rows-4 mt-5">
        <h4>{`06/2023 - Present`}</h4>
        <div>
          <h5>Web Designer at Studio NewKid</h5>
          <ul>
            <MotionLi>{`Utilized HTML, CSS, and JavaScript to create visually appealing and interactive webpages`}</MotionLi>
            <MotionLi>{`Researched and identified the latest trends in design and implemented them to create a
modern and engaging look for the company`}</MotionLi>
          </ul>
        </div>

        <h4>{`05/2023 - 07/2023`}</h4>
        <div>
          <h5>Illustration Designer at Oxygen Publishing</h5>
          <ul>
            <MotionLi>{`Researched and designed a book cover for a newly published author`}</MotionLi>
            <MotionLi>{`Created multiple iterations of an approved design`}</MotionLi>
            <MotionLi>{`Successfully met the expectations of the author and delivered a final product`}</MotionLi>
          </ul>
        </div>

        <h4>{`01/2018 - 07/2021`}</h4>
        <div>
          <h5>Educator at Paper</h5>
          <ul>
            <MotionLi>{`Researched and designed a book cover for a newly published author`}</MotionLi>
            <MotionLi>{`Created multiple iterations of an approved design`}</MotionLi>
            <MotionLi>{`Successfully met the expectations of the author and delivered a final product`}</MotionLi>
          </ul>
        </div>

        <h4>{`09/2018 - 01/2020`}</h4>
        <div>
          <h5>Tutor at Oxford Learning Center</h5>
          <ul>
            <MotionLi>{`Adapted instruction to meet the needs of students with diverse backgrounds, learning styles, and abilities`}</MotionLi>
            <MotionLi>{`Established positive relationships with students to create a safe and supportive learning environment`}</MotionLi>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h3>02 Internships</h3>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-5">
        <h4>{`Jul 2022 - Sep 2022`}</h4>
        <div>
          <h5>Artist Assistant</h5>
          <ul>
            <MotionLi>{`Digitized a whole body of work for a local Montreal artist working on a Canada Council
            grant project`}</MotionLi>
            <MotionLi>{`Collaborated with the artist on representing some of her work in a digital space using 3D
            mapping software`}</MotionLi>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h3>03 Education</h3>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-5">
        <h4>{`Sep 2021 - Present`}</h4>
        <div>
          <h5>Concordia University</h5>
          <h6>BFA Specialization in Computation Arts</h6>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-5">
        <h4>{`Sep 2020 - Apr 2021`}</h4>
        <div>
          <h5>McGill University</h5>
          <h6>B.Sc. Computer Science</h6>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-5">
        <h4>{`Sep 2017 - Dec 2019`}</h4>
        <div>
          <h5>John Abbott College</h5>
          <h6>DEC Sciences</h6>
        </div>
      </div>

      <div className="mt-10">
        <h3>04 Skills</h3>
      </div>

      <div className="grid grid-cols-4 mt-5">
        <h2>Javascript</h2>
        <div className="flex">
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="emptyCircle"></div>
        </div>
        <h2>React</h2>
        <div className="flex">
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="emptyCircle"></div>
          <div id="emptyCircle"></div>
        </div>
        <h2>HTML</h2>
        <div className="flex">
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="emptyCircle"></div>
        </div>
        <h2>CSS</h2>
        <div className="flex">
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="emptyCircle"></div>
        </div>
        <h2>Blender</h2>
        <div className="flex">
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="emptyCircle"></div>
        </div>
        <h2>Touch Designer</h2>
        <div className="flex">
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="emptyCircle"></div>
          <div id="emptyCircle"></div>
          <div id="emptyCircle"></div>
        </div>
      </div>

      <div className="mt-10">
        <h3>05 References</h3>
      </div>

      <div>
        <div id="references" className="grid sm:grid-cols-1 md:grid-cols-2">
          <div></div>
          <h2>Asma Khan</h2>
          <div></div>
          <p>Local Artist</p>
          <div></div>
          <Link
            href={`mailto:asmameister@gmail.com`}
            id = "emailLink"
          >
            asmameister@gmail.com
          </Link>
          <div></div>
          <p>{`(514)-937-3444`}</p>
        </div>
      </div>

      <div id="references" className="grid sm:grid-cols-1 md:grid-cols-2">
        <div></div>
        <h2>Ali Zangana</h2>
        <div></div>
        <p>Studio NewKid</p>
        <div></div>
        <Link
          href={`mailto:studionewkid@gmail.com`}
          id = "emailLink"
        >
          studionewkid@gmail.com
        </Link>
        <div></div>
        <p>{`(514)-703-9922`}</p>
      </div>

      <div id="references" className="grid sm:grid-cols-1 md:grid-cols-2">
        <div></div>
        <h2>Adam Kinsinger</h2>
        <div></div>
        <p>Paper</p>
        <div></div>
        <Link
          href={`mailto:adamkinsinger@paper.co`}
          id="emailLink"
        >
          adamkinsinger@paper.co
        </Link>
        
      </div>

      <div className="mt-10">
        <h3>06 Languages</h3>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 mt-10">
        <div>English</div>
        <div className="flex">
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
        </div>
        <div>French</div>
        <div className="flex">
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
        </div>
        <div>Arabic</div>
        <div className="flex">
          <div id="fullCircle"></div>
          <div id="fullCircle"></div>
          <div id="emptyCircle"></div>
          <div id="emptyCircle"></div>
          <div id="emptyCircle"></div>
        </div>

      </div>



    </div>
  );
}
