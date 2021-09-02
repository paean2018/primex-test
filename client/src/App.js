import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';

import { requestGetUsers } from './store/api';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import WorkspaceMain from './components/WorkspaceMain/WorkspaceMain';
import WorkspaceHeader from './components/WorkspaceHeader/WorkspaceHeader';
import AddUserModal from './components/FormModal/AddUserModal';
import EditUserModal from './components/FormModal/EditUserModal';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  container: {
    flex: 1,
    marginTop: '50px',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
});

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users, loading, requestStatus } = useSelector((state) => state.data);

  const [data, setData] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    dispatch(requestGetUsers());
  }, [requestStatus]);

  useEffect(() => {
    if (users?.data) {
      setData(users.data);
    }
  }, [users]);

  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.container}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.contentContainer}>
          <WorkspaceHeader setOpenAddModal={setOpenAddModal} />
          {loading ? <p>Loading...</p>
            : <WorkspaceMain users={data} setOpenEditModal={setOpenEditModal} />}
          <Footer />
        </Grid>
      </Grid>
      {/* form modals  */}
      <AddUserModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} />
      <EditUserModal openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} />
    </div>
  );
};

export default App;
