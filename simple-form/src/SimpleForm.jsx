import React, { useState } from "react";

const SimpleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Validate inputs
  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully ✅");
      console.log("Submitted Data:", form);

      // Reset form
      setForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.name && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              {errors.password}
            </span>
          )}
        </div>

        <button
          type="submit"
          style={{
            background: "blue",
            color: "white",
            padding: "10px 16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
