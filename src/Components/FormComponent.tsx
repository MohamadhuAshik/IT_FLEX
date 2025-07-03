import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    agreed: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = { name: "", email: "", phone: "", agreed: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
      isValid = false;
    }

    if (!formData.agreed) {
      newErrors.agreed = "You must agree to terms";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        agreed: false,
      });
    }
  };

  return (
    <div className="bg-white text-black rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-900 mb-1 text-center sm:text-left">
        Get Consultations
      </h2>
      <p className="text-sm text-gray-500 mb-6 text-center sm:text-left">
        Ready to Register Our Landsio Services
      </p>

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="agreed"
            id="terms"
            checked={formData.agreed}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
          />
          <label htmlFor="terms">
            I’ve Read and agreed to{" "}
            <a href="#" className="text-violet-600 underline font-medium">
              Terms & Conditions
            </a>
          </label>
        </div>
        {errors.agreed && (
          <p className="text-sm text-red-500 mt-1">{errors.agreed}</p>
        )}

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Get Started Now <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
