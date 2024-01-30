import text from "../components/text";

export default function About() {
  return (
    <div>
      <h1 className="text-3xl text-center align-middle m-10">About Me</h1>

      <p className="m-10 text-center justify-normal w-64">{text[0].text}</p>

    </div>
  );
}
