import { ReactElement } from "react";
import Profile from "./components/profile";
import AdminPanel from "./contents/admin_panel";
import LoginForm from "./contents/login_form";

function MyButton({ title }: { title: string }) {
  return (
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      {title}
    </button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}
const isLoggedIn: boolean = false;
let content: ReactElement;

if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

export default function MyApp() {
  return <main className="flex justify-center py-24">{content}</main>;
}
