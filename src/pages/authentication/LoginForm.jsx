import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { isLoading, setIsLoading } = useState(false);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!email || !password) return;
  //   login({email,password},{
  //     onSettled:()=>{
  //       setEmail('')
  //       setPassword('')
  //     }
  //   })

  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      toast("doldur be meyahbceu");
      return;
    }
    // login({email,password})
    navigate("/dashboard");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <FormRowVertical>

        <GoogleAuth/>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
