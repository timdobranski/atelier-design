const helpers = {
  // Function to determine and set the orientation
  checkOrientation: (setter) => {
    if (window.innerWidth > window.innerHeight) {
      setter("landscape");
    } else {
      setter("portrait");
    }
  }
}

export default helpers;