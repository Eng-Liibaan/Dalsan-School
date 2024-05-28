import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { endpoint } from "./api/endpoint";
import axios from "axios";
import Cliploader from "react-spinners/ClipLoader";
export const Login = () => {
  const [LogIn, setLogIn] = useState({ Email: "", Password: "" });
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    let { data } = await axios.post(endpoint, LogIn);
    let User = data.isAdmin === "false";
    if (data.status) {
      localStorage.setItem("access_token", data.access_token);
      toast.success(data.message);
      if (User) {
        setTimeout(() => {
          navigate("/UserDashboard");
        }, 2000);
      } else {
        setTimeout(() => {
          navigate("/AdminDashboard");
        }, 2000);
      }
    } else {
      toast.error(data);
    }
    setloading(false);
  };
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 text-center">
      <div
        className="card bg-dark mt-5"
        style={{ width: "390px", height: "350px" }}
      >
        <div className="card-title text-light mt-2">
          <h1>Login</h1>
        </div>
        <div className="card-body">
          <form onSubmit={HandleSubmit}>
            <div className="row gap-4">
              <div className="col-6 mx-auto" style={{ width: "300px" }}>
                <input
                  type="text"
                  className="form-control"
                  value={LogIn.Email}
                  placeholder="Enter Your E-mail"
                  onChange={(e) =>
                    setLogIn({
                      Email: e.target.value,
                      Password: LogIn.Password,
                    })
                  }
                />
              </div>
              <div className="col-6 mx-auto" style={{ width: "300px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Password"
                  value={LogIn.Password}
                  onChange={(e) =>
                    setLogIn({ Password: e.target.value, Email: LogIn.Email })
                  }
                />
              </div>
              <div className="col-6 mx-auto" style={{ width: "300px" }}>
                <button className="btn btn-primary">
                  <strong>
                    {loading ? (
                      <Cliploader
                        // color={color}
                        loading={loading}
                        // cssOverride={override}
                        size={40}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      "Login"
                    )}
                  </strong>
                </button>
              </div>
              <div className="col-6 mx-auto" style={{ width: "300px" }}>
                <Link to={"/forgetpassword"}>ForgetPassword</Link>
              </div>
            </div>
          </form>

          <Toaster />
        </div>
      </div>
    </div>
  );
};

export const Change = () => {
  let navigate = useNavigate();
  const [Change, setChange] = useState({
    Email: "",
    NewPassword: "",
    Confirm: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let { data } = await axios.post(endpoint + "/change", Change);
    if (data.status) {
      toast.success(data.message);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      toast.error(data);
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 text-center">
      <div
        className="card bg-dark mt-5"
        style={{ width: "390px", height: "390px" }}
      >
        <div className="card-title text-light mt-2">
          <h1>Change Password</h1>
        </div>
        <div className="card-body">
          <form onSubmit={HandleSubmit}>
            <div className="row gap-4">
              <div className="col-6 mx-auto" style={{ width: "300px" }}>
                <input
                  type="text"
                  className="form-control"
                  value={Change.Email}
                  placeholder="Enter Your E-mail"
                  onChange={(e) =>
                    setChange({
                      Email: e.target.value,
                      NewPassword: Change.NewPassword,
                      Confirm: Change.Confirm,
                    })
                  }
                />
              </div>

              <div className="col-6 mx-auto" style={{ width: "300px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Password"
                  value={Change.NewPassword}
                  onChange={(e) =>
                    setChange({
                      NewPassword: e.target.value,
                      Email: Change.Email,
                      Confirm: Change.Confirm,
                    })
                  }
                />
              </div>
              <div className="col-6 mx-auto" style={{ width: "300px" }}>
                <input
                  type="text"
                  className="form-control"
                  value={Change.Confirm}
                  placeholder="Enter Your Confirm"
                  onChange={(e) =>
                    setChange({
                      Confirm: e.target.value,
                      NewPassword: Change.NewPassword,
                      Email: Change.Email,
                    })
                  }
                />
              </div>
              <div className="col-6 mx-auto" style={{ width: "300px" }}>
                <button className="btn btn-primary">Change</button>
              </div>
            </div>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export const Register = () => {
  let navigate = useNavigate();
  const [User, setUser] = useState({
    UserName: "",
    Email: "",
    Password: "",
    Profile: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("UserName", User.UserName);
    formdata.append("Email", User.Email);
    formdata.append("Password", User.Password);
    formdata.append("Profile", User.Profile);
    let { data } = await axios.post(endpoint + "/user", formdata);
    if (data.status) {
      toast.success(data.message);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      toast.error(data);
    }
  };
  return (
    <div>
      <div
        className="container  d-flex justify-content-center mt-4 align-items-center  text-center"
        style={{ height: "500px" }}
      >
        <div
          className="card bg-dark mt-5"
          style={{ width: "490px", height: "430px" }}
        >
          <div className="card-title text-light mt-2">
            <h1>Create User</h1>
          </div>
          <div className="card-body">
            <form onSubmit={HandleSubmit}>
              <div className="row gap-4">
                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                  <input
                    type="text"
                    className="form-control"
                    value={User.UserName}
                    placeholder="Enter Your UserName"
                    onChange={(e) =>
                      setUser({
                        UserName: e.target.value,
                        Email: User.Email,
                        Password: User.Password,
                        Profile: User.Profile,
                      })
                    }
                  />
                </div>
                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                  <input
                    type="text"
                    className="form-control"
                    value={User.Email}
                    placeholder="Enter Your Email"
                    onChange={(e) =>
                      setUser({
                        Email: e.target.value,
                        UserName: User.UserName,
                        Password: User.Password,
                        Profile: User.Profile,
                      })
                    }
                  />
                </div>
                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                  <input
                    type="text"
                    className="form-control"
                    value={User.Password}
                    placeholder="Enter Your Password"
                    onChange={(e) =>
                      setUser({
                        Password: e.target.value,
                        Email: User.Email,
                        UserName: User.UserName,
                        Profile: User.Profile,
                      })
                    }
                  />
                </div>
                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Enter Your UserName"
                    onChange={(e) =>
                      setUser({
                        Profile: e.target.files[0],
                        Email: User.Email,
                        Password: User.Password,
                        UserName: User.UserName,
                      })
                    }
                  />
                </div>

                <div className="col-6 mx-auto" style={{ width: "300px" }}>
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};
