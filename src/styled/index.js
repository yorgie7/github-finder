import styled from "styled-components";

export const Nav = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  height: 2 rem;
  width: 100%;
`;

export const Loader = styled.div`
  font-size: 30px;
  text-align: center;
  height: 20vh;
  padding: 7vh;
`;

export const Title = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  text-shadow: 1px 0px 0px lightgrey;
  color: black;
  margin: 10px;
  font-weight: 400;
  margin-right: auto;
`;

export const Button = styled.button`
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 5px;
  height: 30px;
  width: 150px;
  &:hover {
    border: 2px solid gray;
    font-size: 18px;
  }
`;

// user cards

export const HomeUserStyledCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 0 16px 12px;
  align-items: center;
  border: 2px solid lightgrey;
  border-radius: 5px;
  max-width: 350px;
`;


export const UserStyledCard = styled.div`
display: flex;
flex-direction: row;
padding: 5px 0 10px 10px;
align-items: center;
border: 2px solid lightgrey;
border-radius: 5px;
max-width: 350px;
`;

// search

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-right: 10px;
  width: max-content;
  height: fit-content;
  z-index: 99;
`;


export const SearchInput = styled.input`
 height:25px;
 border: 1px solid #9493dd; 
 border-radius: 5px;
 margin: -3px 0 0 0px;
 padding: 5px 10px 0 10px;
 background-color: white;
 width: 200px;
`;


export const SuggestBlock = styled.div`
overflow: display;
height: 5px;
z-index: 999;
width: 221px;
margin-top:5px;
`;


export const GitHubLinkButton = styled.button`
height:25px;
margin: 5px 0 5px 0;
border: 1px solid #7ba1ba;
padding: 2px 5px; font-size: 12px; font-weight: 300;
color: white;
background-color: cornflowerblue;
  &:hover {
    font-size: 15px;
  }
`;

export const HomeStyledGistCard = styled.div`
display: flex;
flex-direction: row;
padding: 10px 0 10px 10px;
padding-left: 10px;
border: 1px solid lightgray;
border-radius: 5px;
background-color: hsl(230, 0%, 90%);`;




//avatar image

export const AvatarUser = styled.img`
text-align: center;
border-radius: 50%;
max-width: 55px;`;