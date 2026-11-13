function PrescriptionForm({ onLogin, loading, error }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const patinetData = {
      nationalNumber: formData.get("nationalNumber"),
      printCode: formData.get("printCode"),
    };

    onLogin(patinetData);
  }
  return (
    <form onSubmit={handleSubmit} dir="rtl">
      <h2>ورود اطلاعات نسخه</h2>
      <div>
        <label>کدملی بیمار</label>
        <input type="text" name="nationalNumber" required />
      </div>
      <div>
        <label>کدرهگیری نسخه</label>
        <input type="text" name="printCode" required />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "دریافت نسخه" : "درحال دریافت نسخه"}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default PrescriptionForm;
