const domain = "https://staybooking-614092140035.us-west1.run.app";

export const login = (credential) => {
  const loginUrl = `${domain}/auth/login`;
  // first param:   url
  // second param:  request's metdata
  //                including e.g. HTTP method (GET, PUT, POST, ...)
  // return value:   promoise 承诺你这个请求一定有结果，就算出错了，也会给你个错误
  // fetch(): like sending a parcel
  // return value: like the tracking number
  const networkRequestState = fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });

  // Only call .then() when promise is "resolved"!
  networkRequestState.then((response) => {
    if (response.status >= 300) {
      throw Error("Fail to log in");
    }

    // pending, success, error/failed
    // reponse.text(), response.formData(), ...
    return response.json();
  });

  return networkRequestState;
};
