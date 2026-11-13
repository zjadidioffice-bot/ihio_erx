/** @param {React.FormEvent<HTMLFormElement>} event */

function DoctorLogin({ onLogin, loading, error }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = {
      cpartyUsername: formData.get("username"),
      cpartyPassword: formData.get("password"),
    };
    onLogin(credentials);
  }
  return (
    <form onSubmit={handleSubmit} dir="rtl">
      <h2>ورود پزشک</h2>
      <div>
        <label>نام کاربری</label>
        <input type="text" name="username" required />
      </div>
      <div>
        <label>رمز عبور</label>
        <input type="password" name="password" required />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "ورود" : "در حال ورود"}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default DoctorLogin;
