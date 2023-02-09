import { BottomBarData } from "./BottomBarData"


const BottomBar:React.FC = () => {
  return(
    <div className="bottomBarWrapper">
      <ul className="bottomBarUL">
        {BottomBarData.map((value, key)=>{
          return(
            <li
            key={key}
            className="bottomBarList"
            onClick={value.onClick}
            >
              <div>{value.icon}</div>
              <div className="bottomBarName">{value.name}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default BottomBar