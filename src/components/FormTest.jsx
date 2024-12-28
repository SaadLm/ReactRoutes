
function formTest(props){



    return<>
        <label>Nom & prenom</label>
        <input
            key="nom"
            value={props.nom}
            onKeyUp={props.hundleChangeNom}
        />
        <input
            key="prenom"
            value={props.prenom}
            onKeyUp={props.hundleChangePrenom}
        />
    </>
}

export default formTest;