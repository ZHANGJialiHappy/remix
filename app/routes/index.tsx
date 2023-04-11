import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="flex justify-center items-center text-center">
      <div>
      <h1>A better way of keeping track of your notes!</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <Link to="/notes"><button className="btn">Try now</button></Link>
      </div>
    </main>
  );
}
