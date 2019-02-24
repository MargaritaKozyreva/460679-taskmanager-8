export default (type, caption, isChecked = false, isDisabled = false, random) => {
  const filterTitle = caption.split(`__`)[1];

  return `
  <input
    type="${type}"
    id="${caption}"
    class="filter__input visually-hidden"
    name="filter"
    ${isDisabled ? `disabled` : ``}
    ${isChecked ? `checked` : ``}
    />
    <label for="${caption}" class = "filter__label">
    ${filterTitle} <span class="${caption}-count">${random}</span></label>
     `;
};
