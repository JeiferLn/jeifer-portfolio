import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactContent() {
  const [formSend, setFormSend] = useState(false);
  const [formError, setFormError] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const sendEmail = async () => {
    const data = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_ssfcbfg",
        "template_fuiuu3b",
        data,
        "yN1dDya2MkgbU0v8b"
      );
      setFormSend(true);

      setTimeout(() => {
        setFormSend(false);
      }, 2000);
    } catch (error) {
      setFormError(true);
      console.error("Error: ", error);

      setTimeout(() => {
        setFormError(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full lg:w-[70%] bg-container rounded-lg mb-6 px-5 lg:px-10 pt-8 pb-2">
      <h1 className="text-secondary text-4xl">Let's work together</h1>
      <p className="mt-4 text-primary-description">
        I am excited to collaborate with you on unique and challenging projects.
        Together we can achieve great things and bring your ideas to life. Let's
        talk soon!
      </p>

      <div
        className={`grid lg:grid-cols-2 mt-4 gap-4 [&>*]:p-3 [&>*]:rounded-md [&>*]:outline-none [&>*:not(:last-child)]:border-2 ${
          formSend
            ? "[&>*]:border-[#00ff00]"
            : formError
            ? "[&>*]:border-[#ff0000]"
            : "[&>*]:border-background"
        } [&>*:not(:last-child)]:bg-background`}
      >
        <input
          type="text"
          placeholder="First Name"
          autoComplete="off"
          value={formData.firstName}
          onChange={(e) => {
            setFormData({
              ...formData,
              firstName: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          autoComplete="off"
          value={formData.lastName}
          onChange={(e) => {
            setFormData({
              ...formData,
              lastName: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Email Address"
          autoComplete="off"
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Phone Number"
          autoComplete="off"
          value={formData.phone}
          onChange={(e) => {
            setFormData({
              ...formData,
              phone: e.target.value,
            });
          }}
        />

        <textarea
          className="lg:col-span-2 min-h-[200px] resize-none"
          placeholder="Type your message here."
          autoComplete="off"
          value={formData.message}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: e.target.value,
            });
          }}
        />

        <div className="lg:col-span-2 -mt-2">
          <button
            className={`px-8 py-3 ${
              formSend
                ? "bg-[#00ff00]"
                : formError
                ? "bg-[#ff0000]"
                : "bg-secondary"
            } rounded-full text-background hover:bg-secondary-hover duration-200`}
            onClick={(e) => {
              e.preventDefault();
              sendEmail();
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
