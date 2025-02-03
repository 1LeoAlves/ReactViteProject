export default function SkillCard(props){
    return(
        <li>
            <img src={props.src} alt="skil_Icon" />
            <h3>Skil Title</h3>
            <p>Tighe Descript</p>
        </li>
    );
}