import { HeaderDashboard, ButtonsDashboard, UserBox, Container, Div } from "./style"
import { useState } from "react"
import Header from "../../Components/Header"
import { useDispatch } from "react-redux";
import {logOutThunk} from "../../Store/modules/user/thunk"
import { FiLogOut } from "react-icons/fi";

import GroupsImg from '../../assets/img/groups.png'
import HabitsImg from '../../assets/img/habits.png'
import CardUsuario from "../../Components/CardUsuario";
import Habits from "../../Components/Habits";
import GroupViewer from "../../Components/CardGroupViewer";
import Groups from "../../Components/Groups";

const Dashboard = () => {
  
  const [isHabits,setIsHabits] = useState(true)
  const [isGroup,setIsGroup] = useState(false)
  const [isGroupCard, setIsgroupCard] = useState(false)
  const [group, setGroup] = useState({})
  const dispatch = useDispatch()

  const groups = () => {
    setIsGroup(true)
    setIsHabits(false)
    setIsgroupCard(false)
  } 

  const habits = () => {
    setIsGroup(false)
    setIsHabits(true)
    setIsgroupCard(false)
  } 
  const groupViewer = () => {
    console.log("oi")
    setIsGroup(false)
    setIsHabits(false)
    setIsgroupCard(true)
  } 
  
  const logout = () => {
    dispatch(logOutThunk())
  }

  return (

    <Div>
      <HeaderDashboard>
        
        <Header/>

        
        <ButtonsDashboard>
          <ul>
            <li onClick={() => habits()}><img src={HabitsImg} alt=''/><span>Seus Hábitos</span></li>
            <li onClick={() => groups()}><img src={GroupsImg} alt=''/><span>Seus Grupos</span></li>
          </ul>
        </ButtonsDashboard>
        <UserBox>
          
          <CardUsuario/>
          
        </UserBox>

        <FiLogOut className="cursor" onClick={logout}/>
        
      </HeaderDashboard>
      <Container>
            {isHabits && <Habits></Habits> }
            {isGroup && <Groups setGroup={setGroup} groupViewer={groupViewer}/> }
            {isGroupCard && <GroupViewer group={group}/>}
      </Container>
      
    </Div>

  )
}
export default Dashboard;