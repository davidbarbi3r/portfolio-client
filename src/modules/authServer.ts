import axios from "axios";
import {
  getAuth,
  AuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import IUser from "../interfaces/user";
import config from "../config/config"
import logging from "../config/logging";

const auth = getAuth();

// generic function to sign in with social media, just add provider like (GoogleAuthProvider())
export const signInWithSocialMedia = (provider: AuthProvider) =>
  new Promise<UserCredential>((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });

//for backend authentication
export const authenticate = async (
  uid: string,
  name: string,
  fire_token: string,
  callback: (error: string | null, user: IUser | null) => void
) => {
    try {
        const response = await axios({
            //we send to backend users data to validate
            method: "POST",
            url: `${config.server.url}/users/login`,
            data: {
                uid,
                name,
            },
            headers: {Authorization: `Bearer ${fire_token}`}
        })

        if (response.status === 200 || 201 || 304) {
            logging.info("Successfuly authenticated")
            callback(null, response.data.user)
        } else {
            logging.warn("Unable to authenticate, warn block")
            callback("Unable to authenticate", null)
        }
    } catch (error) {
        logging.error("Unable to authenticate, error block")
        callback("Unable to authenticate", null)
    }
};

export const validate = async (
    fire_token: string,
    callback: (error: string | null, user: IUser | null) => void
  ) => {
      try {
          const response = await axios({
              //we send to backend users data to validate
              method: "GET",
              url: `${config.server.url}/users/validate`,
              headers: {Authorization: `Bearer ${fire_token}`}
          });
  
          if (response.status === 200 || 304) {
              logging.info("Successfuly validated")
              callback(null, response.data.user)
          } else {
              logging.warn("Unable to validate, warn block")
              callback("Unable to validate", null)
          }
      } 
      catch (error) {
          logging.error("Unable to validate, error block")
          callback("Unable to validate", null)
      }
  };
