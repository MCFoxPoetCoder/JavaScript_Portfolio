const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const catListSection = document.getElementById("bookmark-list-section");

const categoryDropdown = document.getElementById("category-dropdown");

const viewCatBtn = document.getElementById("view-category-button");
const addBookmarkBtn = document.getElementById("add-bookmark-button");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");

const catList = document.getElementById("category-list");
const closeListBtn = document.getElementById("close-list-button");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");

//functions

const getBookmarks = () => {
  let bookmarks = localStorage.getItem("bookmarks");
  try {
    const parsed = JSON.parse(bookmarks);
    if (Array.isArray(parsed) && parsed.every(item => typeof item === "object" && Object.hasOwn(item, "name") && Object.hasOwn(item, "category") && Object.hasOwn(item, "url"))) {
      return parsed;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  catListSection.classList.toggle("hidden");
}

const findBookmarkIndex = (arr) => {
  const selectedBookmark = catList.querySelector("input[name='cat-list']:checked")?.value
  let bookmarkIndex;
  arr.map((bookmark, index) => {
    if (bookmark.name === selectedBookmark && bookmark.category === categoryDropdown.value) {
      bookmarkIndex = index;
    }
  })
  return bookmarkIndex
}

//Event Listeners

addBookmarkBtn.addEventListener("click", () => {
    const newHeader = categoryDropdown.value[0].toUpperCase() + categoryDropdown.value.slice(1);
    formSection.querySelector(".category-name").innerText = newHeader;
    displayOrCloseForm();
  }
)

closeFormBtn.addEventListener("click", () => {
    displayOrCloseForm();
    nameInput.value = "";
    urlInput.value = "";
  }
)


addBookmarkBtnForm.addEventListener("click", () => {
    let bookmarks = getBookmarks();

    let isNameUnique = true;
    let isURLUnique = true;

    bookmarks.forEach(bookmark => {
        if (nameInput.value.trim().toLowerCase() === bookmark.name.trim().toLowerCase()) {
          isNameUnique = false;
          alert(`Bookmark name must be unique: "${nameInput.value}" is already taken.`);
        }
        if (urlInput.value.trim().toLowerCase() === bookmark.url.trim().toLowerCase()) {
          isURLUnique = false;
          alert(`URL must be unique: "${urlInput.value}" has already been bookmarked.`);
        }
      }
    )

    if (isNameUnique && isURLUnique) {
      bookmarks.push(
        {
          name: nameInput.value.trim(),
          category: categoryDropdown.value.trim(),
          url: urlInput.value.trim()
        }
      )
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    
      nameInput.value = "";
      urlInput.value = "";
      displayOrCloseForm();
    }
    
  }
)

viewCatBtn.addEventListener("click", () => {
    catList.innerHTML = ""
    const newHeader = categoryDropdown.value[0].toUpperCase() + categoryDropdown.value.slice(1);
    catListSection.querySelector(".category-name").innerText = newHeader;
    displayOrHideCategory();
    let bookmarks = getBookmarks()
    if (bookmarks.length === 0) {
      catList.innerHTML = "<p>No Bookmarks Found</p>"
    }
    
    const copiedNames = {};
    bookmarks.forEach((bookmark) => {
      if (bookmark.category === categoryDropdown.value) {
        console.log(copiedNames)
        if (!copiedNames.hasOwnProperty(bookmark.name))
        {
        copiedNames[bookmark.name] = bookmark.url;
        console.log(copiedNames)
        catList.innerHTML += `
        <input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="cat-list"><label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>`
        }
      }
      if (!catList.innerHTML) {
        catList.innerHTML = "<p>No Bookmarks Found</p>"
      }
    })
    console.log(catList.innerHTML)
  } 
)

closeListBtn.addEventListener("click", () => {
    catListSection.querySelector(".category-name").innerText = "";
    catList.innerHTML = "";
    displayOrHideCategory();
  }
)

deleteBookmarkBtn.addEventListener("click", () => {
    let bookmarks = getBookmarks()
    
    const bookmarkIndex = findBookmarkIndex(bookmarks)
    bookmarks.splice(bookmarkIndex, 1)
    const selectedRadio = catList.querySelector("input[name='cat-list']:checked");
    const selectedBookmark = catList.querySelector(`label[for='${selectedRadio?.value}']`)
    catList.removeChild(selectedRadio);
    catList.removeChild(selectedBookmark)
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } 
)