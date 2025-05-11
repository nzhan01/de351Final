import styled from "styled-components";


const StyledContainer = styled.div`

    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 20px;
    align-content: center;
    width: 75%;
`

const StyledH3 = styled.h3`
padding: 20px;
    font-size: 1.6rem;

`

const StyledH4 = styled.h4`
    padding: 20px;

    font-size: 1.6rem;
`

const StyledParagraph = styled.p`
    padding: 20px;
    font-size: 1.4rem;

`
export default function About() {

    return(

        <StyledContainer>


            <StyledH3>
                Stories define us. We cannot imagine an existence without them. They shape everything.
                They are deeply mysterious. They can be uncertain and yet they hold the power
                for hope and endless possibilities.
            </StyledH3>

        <StyledParagraph>
            I chose prompt 1 regarding the power of stories. I created a website that holds images from many
            of the places I have visited in my life. I think images and photographs can be stories themselves.
            They say a picture is worth a thousand words and while I don’t know if that’s always the case,
            I think oftentimes the picture tells a different story than what may have actually happened.
            Similar to my Midterm project <a href={"https://memory-box-alpha.vercel.app/"}>website</a> ,
            I chose pictures that I thought would be a good representation of
            what happened. I subscribe to the notion of choosing to remember memories in a positive light.
            All of the pictures and locations I included were places where I remember having fun, and
            I wanted that to be the theme that I depicted with my project. I want all these memories to
            provide hope and a sense of optimism for me to continue to seek adventure and make new memories
            with those that I love.
        </StyledParagraph>





            <StyledH4>
                Thanks for a great semester!
                <br/>
                <br/>

                Nicholas Zhang

            </StyledH4>

            <br/>
            <StyledParagraph>

                This website was made using React, which is a higher level version of the
                html, css, javascript tech stack. This site was deployed using github and vercel.
            </StyledParagraph>


        </StyledContainer>
    )
}