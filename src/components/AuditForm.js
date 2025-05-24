"use client";
import React, { useState } from "react";
import PhoneField from "./PhoneField";
import { toast } from "react-toastify";
import { enviroment } from "@/utils/enviroment";

const AuditForm = ({ page }) => {
  const tempData = {
    name: "",
    email: "",
    phoneNumber: "",
    websiteUrl: "",
    message: "",
    tip: false,
  };

  const { MODE, API_URL_PROD, API_URL_DEV } = enviroment;
  const host = MODE === "dev" ? API_URL_DEV : API_URL_PROD;
  const country = page.includes("florida") ? "USA" : "PAK";

  const [formData, setFormData] = useState(tempData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const updatedData = { ...formData, country: country };

    const response = await fetch(`${host}/audit-request`, {
      method: "POST",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .catch((err) => {
        setLoading(false);
        return err;
      });

    if (response && response.success) {
      toast.success(response.message);
    } else if (response && !response.success) {
      toast.error(response.message);
    } else {
      toast.error("something went wrong!");
    }

    setFormData(tempData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name*"
        required
        name="name"
        value={formData?.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email*"
        required
        name="email"
        value={formData?.email}
        onChange={handleChange}
      />
      <PhoneField country={page} state={formData} setState={setFormData} />
      <input
        type="text"
        placeholder="Website*"
        required
        name="websiteUrl"
        value={formData?.websiteUrl}
        onChange={handleChange}
      />
      <textarea
        placeholder="Message*"
        required
        name="message"
        value={formData?.message}
        onChange={handleChange}
      ></textarea>
      <div className="checkbox">
        <input
          type="checkbox"
          id="updates"
          name="tip"
          value={formData?.tip}
          onChange={() => {
            setFormData({ ...formData, tip: !formData?.tip });
          }}
        />
        <label htmlFor="updates">
          I would like to receive expert digital growth tips from Marketing
          Shore
        </label>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="custom-btn primary-btn"
      >
        {loading ? `SUBMITITING....` : "SUBMIT"}
      </button>
    </form>
  );
};

export default AuditForm;
