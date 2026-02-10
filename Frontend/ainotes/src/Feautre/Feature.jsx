import Style from "../Feautre/Feature.module.css"
function Feature({icon,title,des}){
    return(
        <>
        <div className={Style.container}>
        <div className={Style.box}>

        <div className={Style.icons}>
        {icon}
        </div>
        <div className={Style.title}>
        <p>{title}</p>
        </div>

        <div className={Style.des}>
        <p>{des}</p>
        </div>

        </div>
        </div>
        </>
    )
}

export default Feature;