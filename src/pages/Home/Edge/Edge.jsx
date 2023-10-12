import s from '../../styles/edge.module.scss';


const Edge = ({title, icon, text}) => {
    return (
        <div className="">
           <img src={icon} alt="" className="block mx-auto mb-5" />
           <div className="text-center text-white text-lg font-bold">{title}</div>
           <p className={s.edge_text}>
             {text}
           </p>
        </div>
    )
}
export default Edge;