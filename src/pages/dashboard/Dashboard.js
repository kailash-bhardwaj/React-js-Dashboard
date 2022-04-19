import Sidebar from './component/sidebar/Sidebar';
import Header from './component/header/Header';
import Tablebox from './component/table/TableBox';
import './Dashboard.scss';
import Forms from './component/form/Form'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function DashboardRouts() {
       ReactDOM.render((
       
   <BrowserRouter>
         <Switch>
    
           <Route path="/dashboard">
          {Dashboard()} 
           
           </Route>
           <Route path="/products">
          {Products()} 
           
           </Route>
         </Switch>
       </BrowserRouter>
      
      ), document.getElementById('root'));

    
  }
  function Dashboard() {
return(
  <>
  <div className='dashboard'>
      <Sidebar/>
      <Header/>
      <Tablebox />
      </div>
  </>

);
  }

  function Products() {
    return(
      <>
      <div className='dashboard'>
          <Sidebar/>
          <Header/>
          <Forms />
          </div>
      </>
    
    );
      }

  export default DashboardRouts;

      {/* <div className='dashboard'>
      <Sidebar/>
      <Header/>
      <Tablebox/>
      <Forms/>
      <AppBarInteraction/>
      </div>
      */}