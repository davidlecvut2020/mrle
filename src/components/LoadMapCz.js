const LoadMapCz = callback => {
  const existingScript = document.getElementById("mapCz");

  if (!existingScript) {
    // const script = document.createElement("script");
    // script.src = "https://api.mapy.cz/loader.js";
    // script.id = "mapCz";
    // document.body.appendChild(script);
    const scriptLoad = document.createElement("script");
    scriptLoad.text = "Loader.load();";
    document.body.appendChild(scriptLoad);

    scriptLoad.onload = () => {
      if (callback) callback();
      console.log("mapy component loaded:", scriptLoad);
    };
  }

  if (existingScript && callback) callback();
};

export default LoadMapCz;
