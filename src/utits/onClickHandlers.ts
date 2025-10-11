export const handleClickBookACallButton = () => {
    const element = document.getElementById("book-a-call");
    if (element) {
      const offset = Number(window.innerHeight * 0.2);
      console.log(window.innerHeight, offset)
      const y = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
