import React, { useState } from "react";
import { assets } from "../assets/assets";

export const InputField = ({
  type,
  placeholder,
  name,
  handleChange,
  address,
}) => {
  return (
    <input
      className="w-full px-2 py-2.5 border border-gray-500/30 rouded outline-none text-gray-500 focus:border-primary transition"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      address={address}
      value={address[name]}
      required
    />
  );
};

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  const onSubmitHandler = () => {};
  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shipping <span className="font-semibold text-primary"></span>{" "}
      </p>

      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="flex-1 max-w-md">
          <form
            action=""
            onSubmit={onSubmitHandler}
            className="space-y-3 mt-6 text-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                type={"text"}
                placeholder={"First Name"}
                name={"firstName"}
              />
              <InputField
                handleChange={handleChange}
                address={address}
                type={"text"}
                placeholder={"Last Name"}
                name={"lastName"}
              />
            </div>

            <InputField
              handleChange={handleChange}
              address={address}
              type={"email"}
              placeholder={"Email Address"}
              name={"email"}
            />

            <InputField
              handleChange={handleChange}
              address={address}
              type={"text"}
              placeholder={"street"}
              name={"street"}
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                type={"text"}
                placeholder={"City"}
                name={"city"}
              />
              <InputField
                handleChange={handleChange}
                address={address}
                type={"text"}
                placeholder={"State"}
                name={"state"}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                type={"number"}
                placeholder={"Zip Code"}
                name={"zipcode"}
              />
              <InputField
                handleChange={handleChange}
                address={address}
                type={"text"}
                placeholder={"Country"}
                name={"country"}
              />
            </div>
            <InputField
              handleChange={handleChange}
              address={address}
              type={"text"}
              placeholder={"Phone"}
              name={"phone"}
            />

            <button className="w-full t-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase">
              Save address
            </button>
          </form>
        </div>
        <img
          src={assets.add_address_iamge}
          alt=""
          className="md:mr-16 mb-16 md:mmt-0"
        />
      </div>
    </div>
  );
};

export default AddAddress;
