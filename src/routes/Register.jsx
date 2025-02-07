import { SignUp } from '@clerk/clerk-react';

const Register = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-5rem)]">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default Register;
