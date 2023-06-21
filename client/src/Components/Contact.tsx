import { useForm } from "react-hook-form";

export interface ProfileFormValues {
  name: string;
  email: string;
  phoneNo: string;
  message: string;
}

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>();

  const onsubmit = async () => {};

  return (
    <div>
     <div className="contacts">
     <p>Phone :- 9888676767</p>
      <p>Email :- priya20@gmail.com</p>
      <p>Address :- 20, Malviya Nagar</p>
     </div>

      <form onSubmit={handleSubmit(onsubmit)} className="contact_form">
        <h3>Get in Touch</h3>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          <span style={{ color: "red" }}> {errors.name?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          <span style={{ color: "red" }}> {errors.email?.message}</span>
        </div>
        <br />

        <div>
          <input
            type="tel"
            placeholder="Enter your phone number"
            {...register("phoneNo")}
          />
          <span style={{ color: "red" }}> {errors.phoneNo?.message}</span>
        </div>
        <br />

        <div>
          <textarea
            placeholder="Message"
            {...register("message")}
            className="contact_mes"
          />
          <span style={{ color: "red" }}>{errors.message?.message}</span>
        </div>
        <br />


        <div>
          <button
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
