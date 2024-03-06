import text from "../components/text";

export default function About() {
  return (
    <div className="col-span-4">
      <h2>Biography</h2>

    {/* get my biography */}
      <p>{text[0].biography}</p>
      <h2>My Practice</h2>
      <p>{text[0].artiststatement}</p>

    </div>
  );
}
