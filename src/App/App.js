import './App.css';
import { SideMenu, Header } from '../components'
import { CssBaseline, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles()
  return (
    <div>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />

    </div>


  );
}

export default App;
