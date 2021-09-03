import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';

import { requestGetUsers } from './store/api';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import WorkspaceMain from './components/WorkspaceMain/WorkspaceMain';
import WorkspaceHeader from './components/WorkspaceHeader/WorkspaceHeader';
import FormModal from './components/FormModal/FormModal';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  container: {
    flex: 1,
    marginTop: 60,
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

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(requestGetUsers());
  }, [requestStatus]);

  return (
    <div className={classes.root}>
      <Header />
      <Grid container className={classes.container}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.contentContainer}>
          <WorkspaceHeader setOpenModal={setOpenModal} />
          {loading ? <p>Loading...</p>
            : <WorkspaceMain users={users.data} setOpen={setOpenModal} />}
          <Footer />
        </Grid>
      </Grid>
      {/* form modals  */}
      <FormModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default App;
