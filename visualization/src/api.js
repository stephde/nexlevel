// Installs fetch as global function (can be mocked)
import "isomorphic-fetch";

// const API_URL = "https://nexlevel-server.herokuapp.com/routing/";
const API_URL = "https://inquisitive-witness.glitch.me/routing/";

// Similar to:
// http://stackoverflow.com/questions/29473426/fetch-reject-promise-with-json-error-object
const fetchJson = (
  url: string,
  request: { body?: Object, headers?: Object } & RequestOptions
): Promise<*> => {
  const finalRequest = request
    ? {
        ...request,
        body: JSON.stringify(request.body),
        credentials: "same-origin",
        headers: {
          ...request.headers,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    : {
        method: "GET",
        credentials: "same-origin",
        headers: {
          Accept: "application/json"
        }
      };
  return fetch(url, finalRequest).then(
    (response: Response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json().catch(() => ({}));
      }
      // Reject other status
      return response.json().then(Promise.reject.bind(Promise));
    },
    (error: Error) => {
      if (
        window.navigator.userAgent.indexOf("Edge") > -1 &&
        error.name === "TypeMismatchError"
      ) {
        return Promise.reject({ msg: "not logged in" });
      }
      return Promise.reject(error); // Network or connection failure
    }
  );
};

export const getRequestedLocations = () => fetchJson(API_URL + "requests");
