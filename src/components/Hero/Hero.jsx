import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
  });
  
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.destination) newErrors.destination = "Destination is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform submit logic here, e.g., send to an API or console log
      console.log("Form submitted successfully:", formData);
      // Reset form and errors if needed
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        date: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-sm">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>

          {/* New Input Fields Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-sm p-3 relative"
          >
            <form onSubmit={handleSubmit}>
              {/* Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 py-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-8 p-1 border rounded-md focus:outline-none"
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-8 p-1 border rounded-md focus:outline-none"
                  />
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="phone number"
                    name="number"
                    placeholder="Phone Number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full h-8 p-1 border rounded-md focus:outline-none"
                  />
                  {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                </div>

                {/* Destination Dropdown */}
                <div className="relative">
                  <label htmlFor="destination" className="opacity-70">
                    Search your Destination
                  </label>
                  <select
                    name="destination"
                    id="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full bg-gray-100 my-2 accent-primary focus:outline-primary focus:outline outline-1 rounded-md p-2"
                  >
                    <option value="" disabled>
                      Select your destination
                    </option>
                    <option value="Maldives">Maldives</option>
                    <option value="Bali">Bali</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                  </select>
                  {errors.destination && <p className="text-red-500">{errors.destination}</p>}
                </div>

                {/* Date Input Below Destination */}
                <div className="relative">
                  <label htmlFor="date" className="opacity-70">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-md focus:outline-primary focus:outline outline-1 p-2"
                  />
                  {errors.date && <p className="text-red-500">{errors.date}</p>}
                </div>
              </div>

              {/* Submit button */}
              <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;