import React, { useState } from 'react';
import { Box, Typography, Button, Select, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import Web3 from 'web3';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%', 
        marginTop: theme.spacing(3),
      },
      box: {
        padding: theme.spacing(3),
        borderRadius: '10px',
        backgroundColor: 'rgba(45, 45, 45, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      },
      select: {
        marginTop: theme.spacing(2),
        backgroundColor: "#555",
        color: 'white',
      },
      button: {
        marginTop: theme.spacing(3),
        backgroundColor: '#ff9100',
        color: 'black',
        height: '60px',
        fontSize: '18px',
        borderRadius: '10px',
      },
}));

export default function DonationForm() {
    const classes = useStyles();
    const [sentence, setSentence] = useState('');
    const [donationAmount, setDonationAmount] = useState(0);

    const handleSentenceChange = (event) => {
        setSentence(event.target.value);
    };

    const handleDonationAmountChange = (event) => {
        setDonationAmount(event.target.value);
    };

    const submitDonation = async () => {
        // // assuming web3 and contract instances are initialized
        // const web3 = new Web3(window.ethereum);
        // // replace with your contract ABI and contract address
        // const contract = new web3.eth.Contract(ContractABI, ContractAddress);
        // // replace with the current user's account
        // const fromAccount = '0x...';
        // // call your contract method for donation here
        // await contract.methods.donate(sentence).send({from: fromAccount, value: web3.utils.toWei(donationAmount, 'ether')});
    };

    return (
        <div className={classes.form}>
          <Box className={classes.box}>
            <Typography variant="h3" component="h2" gutterBottom align="center">
              Contribute to our Meme Community!
            </Typography>
            <Typography variant="h6" color="inherit" align="center">
              Your donation helps keep our meme-based community alive. But that's not all - the top donator gets to have their 
              sentence displayed on our website. Donate, make an impact and have some fun!
            </Typography>
            <Typography variant="h6" color="inherit" align="center" style={{marginTop: '20px'}}>
              Choose your donation amount:
            </Typography>
            <Select
              variant="outlined"
              value={donationAmount}
              onChange={handleDonationAmountChange}
              className={classes.select}
              fullWidth
            >
              <MenuItem value={0.01}>0.01 ETH</MenuItem>
              <MenuItem value={0.1}>0.1 ETH</MenuItem>
              <MenuItem value={1}>1 ETH</MenuItem>
            </Select>
            <Button variant="contained" fullWidth className={classes.button} onClick={submitDonation}>
              Checkout with Metamask
            </Button>
          </Box>
        </div>
      );
}
