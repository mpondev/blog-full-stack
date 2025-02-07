import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-5rem)]">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default Login;
