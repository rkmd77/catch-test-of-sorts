function FormPage() {
  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <form className="catch-form" onSubmit={handleOnSubmit}>
      <div className="catch-form__title">Form title</div>
      <div className="catch-form__inputs">
        <input
          type="text"
          className="catch-form__input"
          placeholder="First name"
        />
        <input
          type="text"
          className="catch-form__input"
          placeholder="Last name"
        />
        <input
          type="text"
          className="catch-form__input email-adress"
          placeholder="Email address"
        />
        <div className="catch-form__select">
          <select defaultValue="0">
            <option value="0" disabled defaultValue="0">
              City
            </option>
            <option value="1">Auckland</option>
          </select>
          <span className="select-arrow"></span>
        </div>
      </div>
      <button
        className="catch-form__button"
        type="submit"
        data-testid="submit-button"
      >
        Submit
      </button>
    </form>
  );
}

export default FormPage;
