import Sidebar from './component/sidebar/Sidebar';
import Header from './component/header/Header';
import Tablebox from './component/table/TableBox';
import './Dashboard.scss';
import Forms from './component/form/Form'
import AppBarInteraction from './component/drawer/Drawer'

function Dashboard() {
    return (
      <>
      <div className='dashboard'>
      <Sidebar/>
      <Header/>
      <Tablebox/>
      <Forms/>
      <AppBarInteraction/>
      </div>
     
      </>
    );
  }
  
  export default Dashboard;