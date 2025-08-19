import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 gap-10 p-6">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
