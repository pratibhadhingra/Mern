import { useForm } from "react-hook-form";


export interface ProfileFormValues {
  email: string;
  password: string;
}

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>();


  const onsubmit = async () => {

  };

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)} className="login_form">
        <h2>Login</h2>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            {...register("email")}
          />
          <span style={{ color: "red" }}> {errors.email?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="password"
            placeholder="Your Password"
            {...register("password")}
          />
          <span style={{ color: "red" }}>{errors.password?.message}</span>
        </div>
        <br />

        <button
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Profile;

