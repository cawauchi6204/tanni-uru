import { MdHome, MdCloud, MdCloudUpload, MdAccountCircle } from "react-icons/md";

export const BottomBarData: {
  name: string,
  icon: JSX.Element,
  link: string,
  onClick: () => void,
}[] = [
  {
    name: "home",
    icon: <MdHome />,
    link: "./home",
    onClick: function(){
      console.log('click home')
    }

  },
  {
    name: "my notes",
    icon: <MdCloud />,
    link: "./mynotes",
    onClick: function(){
      console.log('click mynotes')
    }
  },
  {
    name: "upload",
    icon: <MdCloudUpload />,
    link: "./upload",
    onClick: function(){
      console.log('click upload')
    }
  },
  {
    name: "Profile",
    icon: <MdAccountCircle />,
    link: "./profile",
    onClick: function(){
      console.log('click profile')
    }
  },
]