import { useState } from 'react'
import { HomeIconSvg } from '../../config/svg'
import styles from '../../styles/navBar.module.scss'
function NavOptions(){
    const [selected, setSelected] = useState<Number>(0)
    const [navData, setNavData] = useState([{
        image : "homeIcon.png",
        title : "Home"
    },{
        image : "projectIcon.png",
        title : "Projects"
    },{
        image : "educationIcon.png",
        title : "Education"
    },{
        image : "achievementIcon.png",
        title : "Achievements"
    }])

    const onSelect = (selectedIndex: Number) => {
        setSelected(selectedIndex);
    }
    return(
        <>
            {/* <li className={styles.navOptionContainer}> */}
                    <div className={styles.indicator} style={{top:`calc(79px *${selected})`}} >
                        <div className={styles.indicatorCircle}></div>
                    </div>
                <ul className={`${styles.navOption}`} >
                {
                    navData.map((data,index)=>(
                        <li className={styles.navOptionFlex} onClick={( )=>onSelect(index)}>
                                <div className={styles.navIcons}>
                                    <img src={data.image} width="100%" height="100%"/>
                                </div>
                                <p className={styles.navOptionsText}>{data.title}</p>
                            </li>
                    ))
                }
                </ul>
            {/* </li> */}
        </>
    )
}

export default NavOptions