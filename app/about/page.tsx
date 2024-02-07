import text from "../components/text";

export default function About() {
  return (
    <div>
      <h1 className="text-3xl">About</h1>

    {/* get my biography */}
      <p className=" normal-case pt-10">{text[0].biography}</p>
      <h1 className="text-3xl mt-10">My Practice</h1>
      <p className="py-10 normal-case">{text[0].artiststatement}</p>

    </div>
  );
}
