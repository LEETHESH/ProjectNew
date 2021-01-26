import React ,{useState}from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Quantity = (props) =>{
    const classes = useStyles();
    const[num , setNum] = useState(0)

    const onClickAdd = () =>{
    setNum(num + 1)
    }
  const onClickSub = () =>{
      if(num > 0){
        setNum(num - 1)
      }else{
          setNum(0)
      }
  
  }  
return(
    <>
    <Row>
    <Col xs="6" sm="4"><div className="quantitylist">{num}</div></Col>
    <Col xs="6" sm="4"><Button variant="contained" color="primary" className="addbutton mr-1" onClick={e=>onClickAdd(e)}>
    <AddCircleIcon />
  </Button>  <Button variant="contained" color="warning" className="substractbutton">
  <RemoveIcon onClick={e=>onClickSub(e)}/>
</Button> </Col>
  </Row>
    </>
)
}
export default Quantity;
