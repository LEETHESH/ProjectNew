import React,{useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Br from "../Image/Br.jpg";
import { Container, Row, Col } from 'reactstrap';
import {useParams , Link} from "react-router-dom";
import axios from "axios"; 
import {
     CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
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
  
 const NewCard = (props) => {
    const classes = useStyles();
    const [cardImage, setCardImage] = React.useState([]);
    const [tableData, setTableData] = React.useState([]);

    const onClickEvemt = (e) => {
        
    }        
          useEffect(() => { 
            axios.get(`http://localhost:3003/users`)
            .then(res => {
               console.log(res.data)
               setCardImage(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
         } , [])

         function clickme(cardImage) {
           console.log(cardImage)
           setTableData((tableData) => {
             return[...tableData , cardImage]
           })
         };

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {
      cardImage.map((cardImage , id) =>{
        return (
            <>
            <a onClick ={clickme.bind(this , cardImage)}>
             <Container className="cardmargin">
            <div key={id} onClick={e=>onClickEvemt(e)}>
              <Card >{cardImage.id}
                <CardImg  src={Br} alt="Card image cap" className="cardimageprice"/>
                <CardBody>
                  <CardTitle tag="h5">{cardImage.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{cardImage.price}</CardSubtitle>
                </CardBody>
              </Card>
            </div>
            </Container></a>
            </>
          );
       })
   }
        </Grid>
      </div>
    );
  }
  export default NewCard;
















































//   export default function NewCard() {
//   const [cardImage, setCardImage] = React.useState([]);

//   const handleExpandClick = () => {
//     setCardImage();
//   };

//   useEffect(() => { 
//     axios.get("http://localhost:3003/users")
//     .then(res => {
//        console.log(res.data)
//        setCardImage(res.data)
//     })
//     .catch(err =>{
//         console.log(err)
//     })
//  } , [])
//   return (
//     <>
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//   {
//       cardImage.map((cardImage , id) =>{
//         return (
//             <div classname="cardimageprice" key={id}>
//               <Card >{cardImage.id}
//                 <CardImg top width="30%" hight="10%" src={Br} alt="Card image cap" />
//                 <CardBody>
//                   <CardTitle tag="h5">{cardImage.name}</CardTitle>
//                   <CardSubtitle tag="h6" className="mb-2 text-muted">{cardImage.price}</CardSubtitle>
//                 </CardBody>
//               </Card>
//             </div>
//           );
//       })
//   }
//     </Grid>
//     <div>
//     </>
//   );
// }