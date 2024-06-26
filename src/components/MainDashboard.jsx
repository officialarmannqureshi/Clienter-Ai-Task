import FolderBox from './FolderBox'
// import { Outlet } from "react-router-dom";
const MainDashboard = ({ children,contents,onFileChecked }) => {

    
  return (
    
      <div className='main-dash'>
        {contents.map((content) => (
          <FolderBox key={content.name} name={content.name} url={content.url} onFileChecked={onFileChecked} />
        ))}
        {children}
        
      </div>
    
  );
};
export default MainDashboard