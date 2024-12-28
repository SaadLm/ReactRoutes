import {useEffect, useState} from "preact-hooks";
import FormTest from "../components/FormTest.jsx";

function AddPersonne(){
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');

    const hundleChangeNom=(e)=>{
        setNom(e.target.value)
    }
    const hundleChangePrenom=(e)=>{
        setPrenom(e.target.value)
    }

    useEffect(() => {
            console.log("App monté")

        }
        , [nom,prenom]);


    return<>
        <h1>Ajout Personne</h1>
        <FormTest
            nom={nom}
            prenom={prenom}
            hundleChangeNom={hundleChangeNom}
            hundleChangePrenom={hundleChangePrenom}
            // onChange={(e)=>setPrenom(e.target.value)}
        />
        <br/>
        <p>Personne Saisie : {nom} {prenom}</p>
    </>
}
export default AddPersonne