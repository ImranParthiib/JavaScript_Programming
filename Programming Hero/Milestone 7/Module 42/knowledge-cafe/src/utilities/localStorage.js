const storeBookmarks = (bookmarks) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};
const getStoredBookmarks = () => {
  const storedBookmarks = localStorage.getItem("bookmarks");
  return storedBookmarks ? JSON.parse(storedBookmarks) : [];
};


const storeReadTime = (time) => {
  localStorage.setItem("readingTime", time);
};  

export { storeBookmarks, getStoredBookmarks, removeStoredBookmarks };
