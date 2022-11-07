import EditProfileStyle from "./editProfileStyle";
import Form from "../../styles/form";
import { iUserProfile, UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import Swal from "sweetalert2";

function EditProfile() {
  const { editProfile, image, setImage } = useContext(UserContext);
  const { register, handleSubmit } = useForm<iUserProfile>();
 
  


  async function setProfilePic() {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e.target.result);
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <EditProfileStyle>
      <section>
        <div>
          <h3>Editar Perfil</h3>
          <span>X</span>
        </div>
        <img
          onClick={() => setProfilePic()}
          src={image}
          alt="Change user icon"
        />
        <p>Trocar foto</p>
        <Form onSubmit={handleSubmit(editProfile)}>
          <label htmlFor="userName">Editar nome de usuário: </label>
          <input
            id="userName"
            type="text"
            placeholder="Digite um novo apelido"
            {...register("userName")}
          />
      
          <label htmlFor="bio">Editar bio: </label>
          <input
            id="bio"
            type="text"
            placeholder="Digite uma nova bio"
            {...register("bio")}
          />
          <label htmlFor="contact">Editar contato: </label>
          <input
            id="contact"
            type="text"
            placeholder="Digite um novo contato"
            {...register("contact")}
          />
          <label htmlFor="techs">Editar tecnologias: </label>
          <input
            id="techs"
            type="text"
            placeholder="Digite suas tecnologias"
            {...register("techs")}
          />
          <label htmlFor="level">Editar nível: </label>
          <select {...register("level")}>
            <option value={""}>Selecione um novo nível</option>
            <option value={"junior"}>Júnior</option>
            <option value={"pleno"}>Pleno</option>
            <option value={"senior"}>Sênior</option>
          </select>
        
          <button type="submit">Editar</button>
        </Form>
      </section>
    </EditProfileStyle>
  );
}
export default EditProfile;
