import React, { useEffect } from "react";

export default function Login() {
  // This use effect loads the content of module to the container after re-render this container.
  // However, the problem is that each time when we enter to the container we download the module *.js file.
  // This needs to be optimize somehow

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://127.0.0.1:5500/build/login-module.js";
    script.id = "login-module-script";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="login-module"></div>;
}
