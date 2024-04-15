return (
  <div className="flex flex-col justify-center items-center h-screen">
    <div>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          name="otp_number"
          // maxLength="1"
          onChange={(e) => handleChange(index, e.target.value)}
          className="w-8 h-10 text-center border border-gray-300 rounded bg-Otpcolor  ml-2 "
        />
      ))}
    </div>
    <div className="mt-5">
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="bg-blue-500 text-white px-3 py-1 rounded-lg"
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </div>
    {isError && <p>Error sending OTP</p>}
    {isSuccess && <p>OTP sent successfully</p>}
  </div>
);
