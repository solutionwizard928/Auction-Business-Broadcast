import { useState } from "react";
import { useNavigate   } from "react-router-dom";
import auctionLogo from "../../assets/img/logo_black.png";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username == "auction") {
      if (password == "123456") {
        navigate("/home");
      } else {
        toast.error("Password is not correct!");
      }
    } else {
      toast.error("Username is not correct!");
    }
  };

  return (
    <div
      className="p-4 h-screen flex items-center justify-center"
      style={{
        background: 'url("/bg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center min-w-[28em] mx-auto">
        <div className="w-full p-6 rounded-xl shadow-md overflow-hidden bg-[#333232] bg-clip-padding backdrop-filter backdrop-blur-lg">
          <div className="flex justify-center">
            <img src={auctionLogo} alt="logo" />
          </div>
          <h2 className="text-slate-200 text-2xl font-semibold text-left my-4">
            Log in
          </h2>

          <form onSubmit={handleSubmit} className="pb-2">
            <div>
              <label className="label">
                <span className="text-base label-text text-white">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-white">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                className="btn btn-block btn-md mt-6 text-[0.975rem]"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner "></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
