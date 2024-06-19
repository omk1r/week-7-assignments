import { useRef, useState } from "react";

export const Assignment6 = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [success, setSuccess] = useState(false);
  const inputs = useRef([]);

  function handleChange(event, index) {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    if (event.target.value.length === 1) {
      const nextInput = inputs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col justify-center items-center bg-slate-400 w-2/4 h-2/4 rounded-xl">
          <h1 className="text-black text-4xl m-5">Login Via OTP</h1>
          {!success ? (
            <div className="flex flex-col justify-center items-center">
              <input
                type="text"
                name="mobile_no"
                className="w-full h-10 rounded-lg mt-2"
              />
              <button
                className=" p-1 rounded-lg bg-blue-500 m-5"
                onClick={() => setSuccess(true)}
              >
                Send OTP
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-center gap-2 mb-6">
                {otp.map((digit, index) => {
                  return (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      onChange={(e) => handleChange(e, index)}
                      ref={(el) => (inputs.current[index] = el)}
                    />
                  );
                })}
              </div>
              <button
                type="button"
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Verify
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
