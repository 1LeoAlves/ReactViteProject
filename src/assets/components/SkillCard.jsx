export default function SkillCard(props){
    return(
        <li className="flex flex-col bg-[#2d2d2d] p-3 rounded-[10px] " >
                <img className="p-6 w-full" src={props.src} alt="skil_Icon" />
                <h3 className="text-center">{props.title}</h3>
        </li>
    );
}