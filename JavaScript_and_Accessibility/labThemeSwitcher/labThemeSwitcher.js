const themes = [
  {
    name: "light",
    message: "Lights, camera, action!"
  },
  {
    name: "dark",
    message: "Night's on, lights out."
  },
  {
    name: "frost",
    message: "Time to chill."
  },
  {
    name: "forest",
    message: "Not all who wander are lost."
  }
];

const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeStatus = document.getElementById("status");

themeSwitcherBtn.addEventListener("click", () => {
    if (themeDropdown.hidden === true) {
      themeDropdown.hidden = false;
      themeSwitcherBtn.setAttribute("aria-expanded", "true");
    } else {
      themeDropdown.hidden = true;
      themeSwitcherBtn.setAttribute("aria-expanded", "false");
    }
  }
);

const themeOptions = document.querySelectorAll("li");
const docBody = document.querySelector("body");

themeOptions.forEach(option => {
  option.addEventListener("click", () =>
    {
      const themeName = option.id;
      const bodyClasses = docBody.classList;
      const optionName = option.innerText.toLowerCase();
      const msg = themes.filter(theme => theme.name === optionName)[0].message

      bodyClasses.forEach(className => {
        if (className.includes("theme-")) {
          bodyClasses.remove(className)
        }
      })
      docBody.classList.add(`${themeName}`);
      themeStatus.innerText = msg;
    }
  )
}) 