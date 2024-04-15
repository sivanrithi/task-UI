return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex min-h-full h-screen">
      <div className="flex flex-1 flex-col w-1/3 justify-center border">
        <div className="mx-auto my-10 lg:w-1/4 2xl:w-3/6 lg:w-100 bg-OBlue border rounded-2xl p-5 space-y-3">
          <div className=" ">
            <div>
              <label className="text-white text-xs text-nowrap">
                Organization Name<span className="text-red-700">*</span>
              </label>

              <input
                name="orgName"
                type="text"
                className="border rounded-lg  mt-2 placeholder-RBlue w-full p-1 placeholder:text-xs px-3  focus:outline-none focus:border-blue-500"
                placeholder="RS-Techs"
                {...register("orgName")}
              ></input>
              {errors.orgName && (
                <p className="text-red-600">{errors.orgName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-white text-xs text-nowrap">
              Organization Type<span className="text-red-700">*</span>
            </label>
            <select
              name="orgType"
              className=" w-full p-1 mt-2  px-3 border text-RBlue text-xs rounded-lg"
              {...register("orgType")}
            >
              <option value="0">Select an option</option>
              <option value="1">IT / Production</option>
              <option value="2">data</option>
            </select>
            {errors.orgType && (
              <p className="text-red-700">{errors.orgType.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-RButton text-RText text-sm font-bold w-full py-2 px-4 rounded mt-4 "
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
);
