import React, { useEffect } from "react";

const Theme = ({ colorTheme, setColorTheme }) => {
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);

    let background,
      secondary,
      tertiary,
      headline,
      paragraph,
      button,
      buttonText;
    switch (theme) {
      case "theme-1":
        background = "#fffffe";
        secondary = "#d1d1e9";
        tertiary = "#ff8906";
        headline = "#2b2c34";
        paragraph = "#2b2c34";
        button = "#6246ea";
        buttonText = "#fffffe";
        break;
      case "theme-2":
        background = "#faeee7";
        secondary = "#ffc6c7";
        tertiary = "#c3f0ca";
        headline = "#33272a";
        paragraph = "#594a4e";
        button = "#ff8ba7";
        buttonText = "#33272a";
        break;
      case "theme-4":
        background = "#16161a";
        secondary = "#72757e";
        tertiary = "#2cb67d";
        headline = "#fffffe";
        paragraph = "#94a1b2";
        button = "#7f5af0";
        buttonText = "#fffffe";
        break;
      default:
        break;
    }
    document
      .querySelector("body")
      .style.setProperty("--background", background);
    document.querySelector("body").style.setProperty("--secondary", secondary);
    document.querySelector("body").style.setProperty("--tertiary", tertiary);
    document.querySelector("body").style.setProperty("--headline", headline);
    document.querySelector("body").style.setProperty("--paragraph", paragraph);
    document.querySelector("body").style.setProperty("--button", button);
    document
      .querySelector("body")
      .style.setProperty("--button-text", buttonText);
  };

  useEffect(() => {
    const currentColor = localStorage.getItem("theme-color");

    if (currentColor) {
      setColorTheme(currentColor);
      handleClick(currentColor);
    }
  }, []);

  return (
    <>
      <div className="theme-options">
        <div
          className={`${colorTheme === "theme-1" ? "active" : ""}`}
          id="theme-1"
          onClick={() => handleClick("theme-1")}
        ></div>
        <div
          className={`${colorTheme === "theme-2" ? "active" : ""}`}
          id="theme-2"
          onClick={() => handleClick("theme-2")}
        ></div>
        <div
          className={`${colorTheme === "theme-4" ? "active" : ""}`}
          id="theme-4"
          onClick={() => handleClick("theme-4")}
        ></div>
      </div>
    </>
  );
};

export default Theme;
