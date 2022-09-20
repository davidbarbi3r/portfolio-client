import { styled } from "@stitches/react";
import Header from "../components/Header";
import Highlight from "../components/Highlight";
import { getAuth, signOut } from "firebase/auth";

function Blog (){

  const auth = getAuth()

  return (
    <div>
      <Header
        scroll={() => {"any"}}
        homeRef={"any"}
        aboutRef={"any"}
        contactRef={"any"}
        projectRef={"any"}
      />
      <h1>BLOG PAGE</h1>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
}

export default Blog
