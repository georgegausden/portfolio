import text from "../components/text";

export default function About() {
  return (
    <div className="text-center">
      <h1 className="text-3xl text-center align-middle m-10">About</h1>

    {/* get my biography */}
      <p className="md:px-[10%] text-justify normal-case">{text[0].biography}</p>

      <h1 className="text-3xl text-center align-middle mt-10">My Practice</h1>
      <p className="md:px-[10%] py-10 text-justify normal-case">{text[0].artiststatement}</p>

    </div>
  );
}
