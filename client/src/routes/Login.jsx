import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default Login;
