import ImagePicture from "./ImagePicture";

export default function Bio(){
    return(
        <section id="#bio" className=" w-full h-[80vh]">
            <div className="flex">
                <ImagePicture width={3} height={3} source={"./FotoPerfil2_HDR.png"}/>
            </div>
        </section>
    )
}