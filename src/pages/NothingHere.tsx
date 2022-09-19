import { styled } from "@stitches/react"

export default function NothingHere() {

    const Styled404 = styled("section", {
        height: "100vh",
        backgroundColor: "Black",
        color: "White",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    })
  return (
    <>
        <Styled404>
            <h1>404</h1>
            Nothing to see here
        </Styled404>
    </>
  )
}