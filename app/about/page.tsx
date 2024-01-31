import text from "../components/text";

export default function About() {
  return (
    <div className="text-center">
      <h1 className="text-3xl text-center align-middle m-10">About</h1>

    {/* get my biography */}
      <p className="px-64 text-justify">{text[0].biography}</p>
      <p className="px-64 py-10 text-justify">{text[0].artiststatement}</p>

    </div>
  );
}
