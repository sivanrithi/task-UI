return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex min-h-full h-screen">
      <div className="flex flex-1 flex-col w-1/2 justify-center border  ">
        <div className="mx-auto my-10 lg:w-3/5 2xl:w-3/6 lg:w-100 bg-white border rounded-2xl">
          <div className="grid grid-cols-2  ">
            <div className="self-center">
              <img src={rlog} alt="rlog" />
            </div>
            <div className=" bg-RBlue  p-12 rounded-r-2xl self-center">
              <h2 className=" textxl  font-bold text-white">REGISTER</h2>
              <p className="text-white text-xs">
                Create an account for faster and easier checkout.
              </p>
              <div className="space-y-2 mt-3">
                <div>
                  <div>
                    <label className="text-white text-xs">
                      Name <span className="text-red-700">*</span>
                    </label>

                    <div>
                      <input
                        name="name"
                        type="text"
                        className="border rounded-lg  mt-2 placeholder-RBlue w-full p-1 px-3 placeholder:text-xs focus:outline-none focus:border-blue-500"
                        placeholder="Name "
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-white text-xs">
                    E-mail <span className="text-red-700">*</span>
                  </label>

                  <div>
                    <input
                      name="email"
                      type="text"
                      className="border rounded-lg  mt-2 placeholder-RBlue w-full p-1 placeholder:text-xs px-3 focus:outline-none focus:border-blue-500 "
                      placeholder="Email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-white text-xs">
                    User name <span className="text-red-700">*</span>
                  </label>

                  <div>
                    <input
                      name="username"
                      type="text"
                      className="border rounded-lg  mt-2 placeholder-RBlue w-full p-1 placeholder:text-xs px-3 focus:outline-none focus:border-blue-500 "
                      placeholder="Username"
                      {...register("username")}
                    />
                    {errors.username && (
                      <p className="text-red-600">{errors.username.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-white text-xs">
                    Password <span className="text-red-700">*</span>
                  </label>

                  <div>
                    <input
                      name="password"
                      type="password"
                      className="border rounded-lg  mt-2 placeholder-RBlue w-full p-1 placeholder:text-xs px-3  focus:outline-none focus:border-blue-500"
                      placeholder="*********"
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-red-600">{errors.password.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-white text-xs">
                    Confirm Password <span className="text-red-700">*</span>
                  </label>

                  <div>
                    <input
                      name="cpassword"
                      type="password"
                      className="border rounded-lg  mt-2 placeholder-RBlue w-full p-1 placeholder:text-xs px-3 focus:outline-none focus:border-blue-500 "
                      placeholder="*********"
                      {...register("cpassword")}
                    />
                    {errors.cpassword && (
                      <p className="text-red-600">{errors.cpassword.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-RButton text-RText text-sm font-bold w-full py-2 px-4 rounded mt-4 "
                  >
                    REGISTER
                  </button>
                </div>

                <div className="text-white text-xs text-center">Or</div>

                <div className="text-center">
                  <a href="/" className=" text-white text-xs text-center">
                    Login to your account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
);
