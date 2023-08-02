import db from "../../firebase/config";

export const authRegistration = ({email,password,nickname}) => async (dispatch, getState) => {
  try {
   const user = await db.auth().createUserWithEmailAndPassword(email,password);

  } catch (error) {
    console.log("error.message", error.message);
  }
};
const authLogin = () => async (dispatch, getState) => {};
export const authLogout = () => async (dispatch, getState) => {};


