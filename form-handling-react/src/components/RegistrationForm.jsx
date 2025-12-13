import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <form>
      <h2>User Registration</h2>
    </form>
  );
}

export default RegistrationForm;
