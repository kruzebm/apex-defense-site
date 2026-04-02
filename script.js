const quoteForm = document.querySelector("[data-quote-form]");

if (quoteForm) {
  const note = quoteForm.querySelector("[data-form-note]");

  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const target = formData.get("target") || "Apexdsolutionsllc@gmail.com";
    const name = (formData.get("name") || "").toString().trim();
    const company = (formData.get("company") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const division = (formData.get("division") || "").toString().trim();
    const details = (formData.get("details") || "").toString().trim();

    const subject = encodeURIComponent(`Quote Request - ${division || "Apex Defense Solutions"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company || "N/A"}`,
        `Email: ${email}`,
        `Division: ${division || "N/A"}`,
        "",
        "Project Details:",
        details
      ].join("\n")
    );

    if (note) {
      note.textContent = "Opening your default email app with your request details.";
    }

    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
  });
}
