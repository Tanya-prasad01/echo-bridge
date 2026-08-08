// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Register.css";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleRegister = (e: React.FormEvent) => {
//     e.preventDefault();

//     const user = {
//       name,
//       email,
//       password,
//     };

//     localStorage.setItem("echoBridgeUser", JSON.stringify(user));

//     alert("Registration successful! Please login.");

//     navigate("/login");
//   };

//   return (
//     <div className="register-page">

//       <div className="register-card">

//         <h1>Register</h1>

//         <form onSubmit={handleRegister}>

//           <label>Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit">
//             Register
//           </button>

//         </form>

//         <p>
//           Already have an account?
//           <Link to="/login"> Login</Link>
//         </p>

//       </div>

//     </div>
//   );
// };

// export default Register;




import "./Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    nativeLanguage: "",
    languages: "",
    learningLanguage: "",
    bio: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setStep(2);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Profile created successfully!");
  };

  return (
    <main className="register-page">

      <div className="register-card">

        {step === 1 ? (
          <>
            <h1>Create Your Account</h1>

            <p className="register-subtitle">
              Join EchoBridge and connect beyond language.
            </p>

            <form onSubmit={handleNext}>

              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="@username"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <button type="submit">
                Continue
              </button>

            </form>

            <p className="login-text">
              Already have an account?{" "}
              <Link to="/login">Log in</Link>
            </p>
          </>
        ) : (
          <>
            <h1>Complete Your Profile</h1>

            <p className="register-subtitle">
              Tell us a little about yourself.
            </p>

            <form onSubmit={handleRegister}>

              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="e.g. India"
                value={formData.country}
                onChange={handleChange}
                required
              />

              <label>Native Language</label>
              <select
                name="nativeLanguage"
                value={formData.nativeLanguage}
                onChange={handleChange}
                required
              >
                <option value="">Select language</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Punjabi</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>

              <label>Languages You Speak</label>
              <input
                type="text"
                name="languages"
                placeholder="e.g. Hindi, English"
                value={formData.languages}
                onChange={handleChange}
              />

              <label>Language You Want to Learn</label>
              <select
                name="learningLanguage"
                value={formData.learningLanguage}
                onChange={handleChange}
              >
                <option value="">Select language</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Japanese</option>
                <option>Korean</option>
              </select>

              <label>About You</label>
              <textarea
                name="bio"
                placeholder="Tell us something about yourself..."
                value={formData.bio}
                onChange={handleChange}
              />

              <div className="register-actions">

                <button
                  type="button"
                  className="back-button"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>

                <button type="submit">
                  Create Profile
                </button>

              </div>

            </form>
          </>
        )}

      </div>

    </main>
  );
};

export default Register;