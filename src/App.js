import { Fragment, useState } from 'react';
import './App.css';
import { AddUserComponent } from './component/AddUserComponent';

function App() {
  const [listUser, setListUser] = useState([])
  const [btnText, setBtnText] = useState('Submit')

  return (
    <Fragment>
      <AddUserComponent user={listUser} btnText={btnText}/>
    </Fragment>
  );
}

export default App;
