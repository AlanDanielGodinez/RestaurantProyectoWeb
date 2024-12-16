
export default function Imagencustom({ImgSrc, pt}){
    return(
        <div className="imagen-custom" style={{paddingTop: pt}}>
            
            <img src={ImgSrc} alt="" />
            </div>
    )
}