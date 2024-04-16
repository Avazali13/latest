// import Form from "../ui/Form";
import Heading from "../ui/Heading";
import SignupForm from "./authentication/SignupForm";

function Signup() {
  return (
    <>
      <Heading as="h4"> Qeydiyyat ele brat</Heading>
      {/* <Form> */}
      <SignupForm />
      {/* </Form> */}
    </>
  );
}

export default Signup;
