const getStoredApp = () => {
  const storedAppStr = localStorage.getItem("appList");
  if (storedAppStr) {
    const storedAppData = JSON.parse(storedAppStr);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();

  storedAppData.push(id);
  const setData = JSON.stringify(storedAppData);
  localStorage.setItem("appList", setData);
  // console.log(storedAppData);
};

export { addToStoredDB, getStoredApp };
