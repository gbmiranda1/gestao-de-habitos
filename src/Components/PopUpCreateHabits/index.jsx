import { NativeSelect, InputLabel, TextField } from "@mui/material";
import Button from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Div, Form, DivA, DivContainer } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { addHabitThunk } from "../../Store/modules/habits/thunk";

function PopUpCreateHabits({ setPopup }) {
  const formSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    category: yup.string().required("Categoria obrigatória"),
    difficulty: yup.string().required("Dificuldade Obrigatória"),
    frequency: yup.string().required("Frequência obrigatória"),
  });

  const dispatch = useDispatch();
  const [token] = useState(
    JSON.parse(localStorage.getItem("@GestaoHabitos:token")) || ""
  );

  const userID = jwt_decode(token).user_id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    data = { ...data, achieved: "false", how_much_achieved: "0", user: userID };
    dispatch(addHabitThunk(data));
    setPopup(false);
  };
  return (
    <DivA>
      <DivContainer>
        <Div>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <IoCloseCircle onClick={() => setPopup(false)} />
            <h3>Criar Hábito</h3>
            <TextField
              fullWidth
              id="login-basic"
              label="Título"
              variant="outlined"
              error={!!errors.title?.message}
              {...register("title")}
            />
            <InputLabel htmlFor="select">Selecionar a categoria:</InputLabel>
            <NativeSelect
              {...register("category")}
              error={!!errors.category?.message}
              fullWidth
              id="select"
            >
              <option defaultValue={(event) => event.target.value}>
                Alimentação
              </option>
              <option defaultValue={(event) => event.target.value}>
                Saúde
              </option>
              <option defaultValue={(event) => event.target.value}>
                Esporte
              </option>
              <option defaultValue={(event) => event.target.value}>
                Lazer
              </option>
            </NativeSelect>
            <InputLabel htmlFor="select">Selecionar a dificuldade:</InputLabel>
            <NativeSelect
              {...register("difficulty")}
              error={!!errors.difficulty?.message}
              fullWidth
              id="select"
            >
              <option defaultValue={(event) => event.target.value}>
                Fácil
              </option>
              <option defaultValue={(event) => event.target.value}>
                Médio
              </option>
              <option defaultValue={(event) => event.target.value}>
                Difícil
              </option>
            </NativeSelect>
            <InputLabel htmlFor="select">Selecionar a frequência:</InputLabel>
            <NativeSelect
              {...register("frequency")}
              error={!!errors.frequency?.message}
              fullWidth
              id="select"
            >
              <option defaultValue={(event) => event.target.value}>
                Diária
              </option>
              <option defaultValue={(event) => event.target.value}>
                Semanal
              </option>
              <option defaultValue={(event) => event.target.value}>
                Mensal
              </option>
              <option defaultValue={(event) => event.target.value}>
                Anual
              </option>
            </NativeSelect>
            <Button type="submit" text={"Adicionar"}></Button>
          </Form>
        </Div>
      </DivContainer>
    </DivA>
  );
}

export default PopUpCreateHabits;
