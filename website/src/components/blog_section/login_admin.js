export const LoginAdmin = () => {
  return (
    <div className="max-w-   mx-auto">
      <p className="text-3xl text-center my-16">Admin Login</p>
      <label className="flex text-3xl ">ِAdmin Password:</label>
      <input
        className="my-5 w-full text-2xl border border-gray-300 rounded-lg p-2 focus:outline-none ring-2 ring-slate-200 focus:ring-2 focus:ring-slate-600"
        type="text"
        name="title"
        placeholder="Password"
        required
        // value={formState.title}
        // onChange={handleChange}
      />
      <button
        className="text-white text-2xl bg-customPurble rounded-xl p-3 w-full mb-10"
        type="submit"
        // disabled={formState.loading} // Disable the button when loading
      >
        Login
      </button>
    </div>
  );
};

export default LoginAdmin;
