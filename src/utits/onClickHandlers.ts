export const handleClickBookACallButton = (percentage : number = 0.2) => {
    const element = document.getElementById("book-a-call");
    if (element) {
      const offset = Number(window.innerHeight * percentage);
      console.log(window.innerHeight, offset)
      const y = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
