import { useCallback, useContext, useEffect, useMemo, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import { AppContext } from "../../../context/AppContext";
import { mapValidationToState } from "./validation";

const isStateEmpty = (state) => {
  return Object.keys(state).some((key) => !state[key]);
};

const url = "http://localhost:8080/api";

export default function Signup() {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [userData, setUSerData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
        date: "",
        month: "",
        year: "",
        gender: "",
    });
        
  const navigate = useNavigate();

  const signUp = useCallback(
    (user, navigate) => {
      localStorage.setItem("auth", JSON.stringify(user));
      setUser(user);
      navigate("/");
    },
    [user]
  );

  useEffect(() => {
    const authUser = localStorage.getItem("auth");
    if (authUser) {
      setUser(JSON.parse(authUser));
    }
  }, []);
  
  useEffect(() => {
    if (!isStateEmpty(userData) && !errors) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userData, errors]);

  const handleChange = useCallback(
    (e) => {
      const errorsObject = mapValidationToState({
        ...userData,
        [e.target.name]: e.target.value,
      });
      setErrors(errorsObject);
      setUSerData({ ...userData, [e.target.name]: e.target.value });
    },
    [userData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
  
    try {
      const response = await axios.post(`${url}/auth/signup`, {
        ...userData, // Spread operator to include name, email, and password
      });
  
      if (response.status === 200) {
        signUp(response.data.data, navigate); // Sign up the user and navigate
        console.log('response.data');
        console.log(response.data);
        console.log('response');
        console.log(response);
        
      }
    } catch (error) {
        console.error('Error Creating User:', error);
    }
  };

  const inputsData = useMemo(
    () => [
      {
        label: "Name",
        value: userData.name,
        name: "name",
        type: "text",
        className:
          "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",
        placeholder: "Enter Name",
        error: errors?.name,
        onChange: handleChange,
      },
      {
        label: "Email",
        value: userData.email,
        name: "email",
        type: "email",
        className:
          "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",
        placeholder: "Enter Email",
        error: errors?.email,
        onChange: handleChange,
      },
      {
        label: "Password",
        value: userData.password,
        name: "password",
        type: "password",
        className:
          "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",
        placeholder: "Enter Password",
        error: errors?.password,
        onChange: handleChange,
      },
      {
        label: "Cofirm Password",
        value: userData.confirmPass,
        name: "confirmPass",
        type: "password",
        className:
          "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",
        placeholder: "Renter password",
        error: errors?.confirmPass,
        onChange: handleChange,
      },
      {
        label: "date",
        value: userData.date,
        name: "date",
        type: "text",
        className:
          "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",
        placeholder: "Enter Date",
        error: errors?.date,
        onChange: handleChange,
      },
      {
        label: "month",
        value: userData.month,
        name: "month",
        type: "text",
        className:
          "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",
        placeholder: "Enter Month",
        error: errors?.month,
        onChange: handleChange,
      },
      {
        label: "year",
        value: userData.year,
        name: "year",
        type: "text",
        className:
          "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",
        placeholder: "Enter Year",
        error: errors?.year,
        onChange: handleChange,
      },
    ],
    [
      userData.name,
      userData.password,
      userData.email,
      userData.confirmPass,
      userData.date,
      userData.month,
      userData.year,
      errors,
      handleChange,
    ]
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started with Podvibe today!</h1>

        <p className="mt-4 text-gray-500">

        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        {inputsData.map((input) => (
          <AppInput key={input.name} {...input} />
        ))}

        <select 
            name="gender" 
            onChange={handleChange} 
            value={userData.gender} 
            required 
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm" 
        >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>

        <div className="flex items-center justify-between">
          <button
            disabled={disabled}
            type="submit"
            className="disabled:opacity-50  disabled:cursor-not-allowed inline-block rounded-lg bg-green-800 px-5 py-3 text-sm font-medium text-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}


function AppInput({
  label,
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  icon,
  error,
}) {
  const [isErrorShow, setIsErrorShow] = useState(false);

  return (
    <div>
      <label htmlFor="email" className="sr-only">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
          onBlur={() => setIsErrorShow(true)}
          onFocus={() => setIsErrorShow(false)}
        />
        {icon}
      </div>

      {error && isErrorShow && value && (
        <div
          className="p-4 my-4  text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
}
