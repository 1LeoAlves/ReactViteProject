export default function Icon(props) {
    return (
      <a href={props.href} className="cursor-grab w-12 h-12 bg-white p-2 rounded-full" target="_blank">
        <img src={`/${props.fileName}`} alt={props.fileName} className="h-full" />
      </a>
    );
  }
