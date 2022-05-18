import React, { useState } from "react";
import {
  FormControlLabel,
  FormControl,
  Checkbox,
  FormGroup,
  TextField,
  RadioGroup,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Button,
} from "@mui/material";

const Dashboard = () => {
  const providedData = [
    {
      id: 1,
      first_name: "Jeanette",
      last_name: "Penddreth",
      email: "jpenddreth0@census.gov",
      gender: "Female",
    },
    {
      id: 2,
      first_name: "Giavani",
      last_name: "Frediani",
      email: "gfrediani1@senate.gov",
      gender: "Male",
    },
    {
      id: 3,
      first_name: "Noell",
      last_name: "Bea",
      email: "nbea2@imageshack.us",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Willard",
      last_name: "Valek",
      email: "wvalek3@vk.com",
      gender: "Male",
    },
  ];
  const [tableData, setTableData] = useState([...providedData]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [Gender, setGender] = useState("");
  const setGenderValue = (e) => {
    // setGender(e.target.value);
    const onGenderFilter = providedData.filter(
      (elem, ind) => elem.gender === e.target.value
    );
    setTableData(onGenderFilter);
  };
  var checked = false;
  const searchData = (e) => {
      checked = true;
      if(checked === true){
    const onSearchFilter = providedData.filter((elem, ind) =>
      elem.first_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTableData(onSearchFilter);
      }else 
      setTableData(tableData)
      checked = false;
  };
  const addDetails = () => {
    const newData = {
      first_name: firstName,
      last_name: lastName,
      email: emailId,
      gender: Gender,
    };
    if (
      newData.first_name !== "" &&
      newData.last_name !== "" &&
      newData.email !== "" &&
      newData.gender !== ""
    ) {
      setTableData([...tableData, newData]);
    } else {
      alert("Please fill the required fields");
    }
    setFirstName("");
    setLastName("");
    setEmailId("");
  };
  return (
    <div>
      <h1>Candidates</h1>
      <div>
        <FormGroup>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControlLabel
                onChange={setGenderValue}
                value="Male"
                name="gender"
                control={<Checkbox />}
                label="Male"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                onChange={setGenderValue}
                value="Female"
                name="gender"
                control={<Checkbox />}
                label="Female"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={searchData}
                id="standard-basic"
                label="Search here..."
                variant="standard"
              />
            </Grid>
          </Grid>
        </FormGroup>
      </div>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.sort((a,b)=>a.first_name > b.first_name ? 1 : -1).map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{row.first_name}</TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div>
        <h1>Add New Candidates</h1>
      </div>
      <FormGroup>
        <TextField
          required
          label="First Name"
          value={firstName}
          variant="standard"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          required
          label="Last Name"
          value={lastName}
          variant="standard"
          onChange={(e) => setLastName(e.target.value)}
        />

        <TextField
          required
          label="Email"
          value={emailId}
          variant="standard"
          onChange={(e) => setEmailId(e.target.value)}
        />
      </FormGroup>
      <div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => setGender(e.target.value)}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
        <br />
        <Button variant="contained" onClick={addDetails}>
          Add
        </Button>
      </div>
    </div>
  );
};
export default Dashboard;
