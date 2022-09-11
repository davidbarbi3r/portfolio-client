import { styled } from "@stitches/react";
import Header from "../components/Header";
import Highlight from "../components/Highlight";
import { IPageProps } from "../interfaces/page";
import { getAuth, signOut } from "firebase/auth";

const Blog: React.FunctionComponent<IPageProps> = props => {

  const auth = getAuth()

  return (
    <div>
      <Header/>
      <h1>BLOG PAGE</h1>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
}

export default Blog
