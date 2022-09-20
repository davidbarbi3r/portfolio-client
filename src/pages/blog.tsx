import { styled } from "@stitches/react";
import Header from "../components/Header";
import Highlight from "../components/Highlight";
import { Auth, getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";

function Blog (){

  const auth = getAuth()
  const navigate = useNavigate()

  const signOutBtn = (auth: Auth) => {
    signOut(auth)
    navigate("/")
  }

  return (
    <div>
      <Header
        scroll={() => {""}}
        homeRef={null}
        aboutRef={null}
        contactRef={null}
        projectRef={null}
      />
      <br/><br/><br/>
      <h1>BLOG PAGE</h1>
      <h2>Bienvenue sur mon blog</h2>
      <h3>Toutes sortes d'histoires sur le dev seront racontées ici, pour l'instant c'est une histoire de zombies ☣</h3>
      <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
      <p>Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.</p>
      {auth.currentUser? <button onClick={() => signOutBtn(auth)}>Sign out</button> : ""}
    </div>
  );
}

export default Blog
