import { useNavigate } from "@remix-run/react";

export default function Index() {
  const navigate = useNavigate();

  return (
    <main className="flex m-5 justify-center items-center text-center">
      <div>
      <p className="text-2xl m-5">A better way of keeping track of your notes!</p>
      <p>Try our early beta and never lose track of your notes again!</p>
      <button className="btn btn-warning my-5" onClick={()=>{navigate("/notes")}}>Try now</button>
      </div>
    </main>
  );
}
