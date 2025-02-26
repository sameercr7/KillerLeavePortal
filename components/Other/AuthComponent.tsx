import Link from "next/link";
import { AuthForm } from "./AuthForm";

const AuthComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-700 to-black">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full sm:w-[400px] flex flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Killer Leave Portal</h1>
          <p className="text-sm text-gray-500">Login with your work email to access your portal</p>
        </div>
        
        <AuthForm />

        <p className="text-center text-sm text-gray-500">
          By clicking continue, you agree to the company{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default AuthComponent;
