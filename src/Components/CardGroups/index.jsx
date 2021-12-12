import { CardHeader, Conteiner, Content, DescriptionGroup, Details } from "./style";
import {HighlightOff} from "@mui/icons-material"
import Button from "../Button";
import LogoCardGroup from "../../assets/Icons/LogoCardGroup.png";
import { useState, useEffect } from "react";
import {subscribeGroupThunk, unsubscribeGroupThunk} from "../../Store/modules/groups/thunk"
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import groupReducer from "../../Store/modules/groups/reducer";

const CardGroups = ({item, groups}) => {
  const dispatch = useDispatch()
  
  // const [popUp, setPopUp] = useState(false);
  const [token] = useState(
      JSON.parse(localStorage.getItem("@GestaoHabitos:token")) || ""
  );

  const userID = jwt_decode(token).user_id
  const [text, setText] = useState("oi");

  
  const verificaInscrito = () => {
    if(item.users_on_group.filter((itens) => itens.id === userID).length === 0){
      return true
    }
    return false
  }
  const [change, setChange] = useState(verificaInscrito());
  const onChange = () => {
    if (change) {
      setChange(!change);
      dispatch(subscribeGroupThunk(item.id, groups, userID))
    } else {
      setChange(!change);
      dispatch(unsubscribeGroupThunk(item.id, groups, userID))
    }
  };
  return (
    <Conteiner text={verificaInscrito() ? "Junte-se" : "Inscrito"} color={verificaInscrito() ? "true" : ""}>
       <span className="icone">
            <HighlightOff />
        </span>
      <Content>
        <CardHeader>
          <figure>
            <img src={LogoCardGroup} alt="LogoCardGroup" />
          </figure>
          <DescriptionGroup>
            <h2>{item.name}</h2>
            <span> {item.category} </span>
          </DescriptionGroup>
        </CardHeader>
        <p> {item.creator.username} </p>
      </Content>
      <Details>
        <span>
          <p>Incritos</p> <p>{item.users_on_group.length}</p>
        </span>
        <span>
          <p>Metas</p> <p>{item.goals.length}</p>
        </span>
        <span>
          <p>Atividades</p> <p>{item.activities.length}</p>
        </span>
      </Details>
      <Button onclick={onChange} color={verificaInscrito() ? "true" : ""} text={verificaInscrito() ? "Junte-se" : "Inscrito"} />
    </Conteiner>
  );
};

export default CardGroups;