import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";
import { Formik } from "formik";
import FormikForm from "./components/formikForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormikForm />
    </>
  );
}

export default App;
