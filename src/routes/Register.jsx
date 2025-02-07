import { SignUp } from '@clerk/clerk-react';

const Register = () => {
  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default Register;
