import Link from "next/link";
import ChatBubbleOvalLeftEllipsisIcon from "@heroicons/react/24/solid/ChatBubbleOvalLeftEllipsisIcon";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="phoneNumber"
          type="number"
          placeholder="전화번호"
          required={true}
          errors={[]}
        />
        <FormInput
          name="verificationCode"
          type="number"
          placeholder="인증 코드"
          required={true}
          errors={[]}
        />
        <FormButton text="인증하기" />
      </form>
    </div>
  );
}
