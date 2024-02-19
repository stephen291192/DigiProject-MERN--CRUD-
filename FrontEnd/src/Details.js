import React, { useState, useEffect } from "react";
import {
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CRow,
  CCol,
} from "@coreui/react";
import { CSmartTable } from "@coreui/react-pro";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "@coreui/coreui";
import Select from "react-select";
import moment from "react-moment";
import axios from "axios";
import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// import { ToastContainer,toast } from 'react-toast'
function Details() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [Faname, setFaname] = useState("");
  const [mname, setMname] = useState("");
  const [date, setDate] = useState("");

  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setqualification] = useState("");
  const [qualificationError, setqualificationError] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [FanameError, setFanameError] = useState("");
  const [mnameError, setMnameError] = useState("");
  const [mailError, setMailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [getData, setGetData] = useState([]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const clearFuntion = () => {
    setFname("");
    setLname("");
    setMail("");
    setPhone("");
    setAge("");
    setFaname("");
    setMname("");
    setDate("");
    setqualification("");
    setFnameError("");
    setFanameError("");
    setMnameError("");
    setMailError("");
    setPhoneError("");
    // setLnameError("")
  };

  const columns = [
    {
      key: "S_no",
      label: "S.No",
      _style: { width: "5%", background: "#002663", color: "#fff" },
      _props: { color: "#fff" },
      filter: false,
      sorter: false,
    },

    {
      key: "FName",
      label: "Name",
      _style: { width: "15%", background: "#002663", color: "#fff" },
      _props: { color: "#fff" },
      filter: true,
      sorter: true,
    },
    // {
    //   key: "LName",
    //   label:"Last Name",
    //   _style: { width: "5%", background: "#002663", color: "#fff" },
    //   _props: { color: "#fff", className: "fw-semibold" },
    //   filter: true,
    //   sorter: true,
    // },
    // {
    //   key: "FatherName",
    //   label:"Father Name",
    //   _style: { width: "10%", background: "#002663", color: "#fff" },
    //   _props: { color: "#fff", className: "fw-semibold" },
    //   filter: true,
    //   sorter: true,
    // },
    // {
    //   key: "MotherName",
    //   label: "Parent Name",
    //   _style: { width: "15%", background: "#002663", color: "#fff" },
    //   _props: { color: "#fff" },
    //   filter: true,
    //   sorter: true,
    // },
    {
      key: "DOB",
      label: "DOB",
      _style: { width: "15%", background: "#002663", color: "#fff" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "qualification",
      label: "Qualification",
      _style: { width: "15%", background: "#002663", color: "#fff" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "Email",
      label: "Email",
      _style: { width: "15%", background: "#002663", color: "#fff" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "PhoneNumber",
      label: " Number",
      _style: { width: "15%", background: "#002663", color: "#fff" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "show_details",
      label: "Action",
      _style: { width: "12%", background: "#002663", color: "#fff" },
      filter: false,
      sorter: false,
      _props: { color: "#fff", className: "fw-semibold" },
    },
  ];

  // Validation

  const FNameValidation = (e) => {
    const firstName = e.target.value.trim();

    if (firstName.length < 3) {
      setFnameError("First name must be at least 3 characters long");
    } else if (/\d/.test(firstName)) {
      // Check if the first name contains any numbers using a regular expression
      setFnameError("First name cannot contain numbers");
    } else {
      setFnameError("");
    }
  };

  const FatherNameValidation = (e) => {
    const FatherName = e.target.value.trim();

    if (FatherName.length < 3) {
      setFanameError("Father name must be at least 3 characters long");
    } else if (/\d/.test(FatherName)) {
      setFanameError("Father name cannot contain numbers");
    } else {
      setFanameError("");
    }
  };

  const MotherNameValidation = (e) => {
    const motherName = e.target.value.trim();

    if (motherName.length < 3) {
      setMnameError("Mother name must be at least 3 characters long");
    } else if (/\d/.test(motherName)) {
      setMnameError("Mother name cannot contain numbers");
    } else {
      setMnameError("");
    }
  };

  const QualificationValidation = (e) => {
    const qualification = e.target.value.trim();

    if (qualification.length < 2) {
      setqualificationError(
        "Qualification name must be at least 2 characters long"
      );
      // } else if (/\d/.test(qualification)) {
      //   setqualificationError("Qualification name cannot contain numbers");
    } else {
      setqualificationError("");
    }
  };

  const emailValidation = (e) => {
    const email = e.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMailError("Invalid email format");
    } else {
      setMailError("");
    }
  };

  const PhoneNumberValidation = (e) => {
    const phoneNumber = e.target.value.trim();
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError(
        "Invalid phone number format. Maximum 10 digits only allowed."
      );
    } else {
      setPhoneError("");
    }
  };

  //  Validation END

  // API Function Start

  useEffect(() => {
    GetDetails();
  }, []);
  //   Get Task API
  const GetDetails = async () => {
    setGetData([]);
    try {
      const response = await axios.get(`http://localhost:3001/api/GetDetails`);
      const data = response.data.detailsvalue.map((x, i) => {
        return {
          DetailsID: x._id,
          S_no: i + 1,
          FName: x.fname,
          LName: x.lname,
          FatherName: x.Faname,
          MotherName: x.mname,
          DOB: new Date(x.date).toLocaleDateString(),
          Gender: x.gender,
          Email: x.mail,
          PhoneNumber: x.phone,
          qualification: x.qualification,
        };
      });

      setGetData(data);
      console.log("responseresponse", data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const SaveDetails = async () => {
    const data = {
      fname,
      lname,
      Faname,
      mname,
      date,
      mail,
      phone,
      qualification,
    };

    try {
      const response = await axios.post(`http://localhost:3001/api/save`, data);

      if (response.status === 200 || response.status === 201) {
        console.log("response", response);
        toast.success("Details Created Successfully");
        GetDetails();
        clearFuntion();
      } else {
        toast.error("An error occurred");
      }
    } catch (error) {
      toast.error("An error occurred ", error);
    }
  };

  //update API Function

  const DetailsUpdate = async (detailsID) => {
    const data = {
      fname,
      lname,
      Faname,
      mname,
      date,
      mail,
      phone,
      qualification,
    };

    try {
      const response = await axios.post(
        `http://localhost:3001/api/detailsUpdate/${detailsID}`,
        data
      );

      if (response.status === 200) {
        return await response.json();
      } else if (response.status === 401) {
        return await response.json();
      } else if (response.status === 400 || response.status === 404) {
        return await response.json();
      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (err) {
      console.error("Error updating details:", err);
    }
  };

  // Delete API Function
  const DeleteTask = async (detailsID) => {
    try {
      await axios.delete(
        `http://localhost:3001/api/detailsdelete/${detailsID}`
      );
      toast.success(" Details Delete Successfully");
      GetDetails();
    } catch (error) {
      console.error(`Error deleting task with ID ${detailsID}:`, error);
    }
  };

  return (
    <div className="m-3">
      <CRow className="">
        <CCol sm={4}>
          <CForm className="">
            <CRow>
              <CCol sm={8}>
                <CFormLabel className="mt-2">
                  First Name <code>*</code>
                </CFormLabel>
                <CFormInput
                  type="fname"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                    FNameValidation(e);
                  }}
                  placeholder="First Name "
                />
                <span className="errorMsg">{fnameError}</span>
              </CCol>
              <CCol sm={4}>
                {" "}
                <CFormLabel className=" mt-2">
                  Last Name <code>*</code>
                </CFormLabel>
                <CFormInput
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  disabled={!fname || fnameError}
                  type="lName"
                  placeholder="Last Name"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm={6}>
                <CFormLabel className=" mt-2">
                  Father Name <code>*</code>
                </CFormLabel>
                <CFormInput
                  value={Faname}
                  onChange={(e) => {
                    setFaname(e.target.value);
                    FatherNameValidation(e);
                  }}
                  disabled={!fname || !lname || fnameError}
                  type="FName"
                  placeholder="Father Name"
                />
                <span className="errorMsg">{FanameError}</span>
              </CCol>

              <CCol sm={6}>
                <CFormLabel className=" mt-2">
                  Mother Name <code>*</code>
                </CFormLabel>
                <CFormInput
                  value={mname}
                  onChange={(e) => {
                    setMname(e.target.value);
                    MotherNameValidation(e);
                  }}
                  disabled={
                    !fname || !Faname || !lname || FanameError || fnameError
                  }
                  type="lName"
                  placeholder="Mother Name"
                />
                <span className="errorMsg">{mnameError}</span>
              </CCol>
            </CRow>
            <CRow>
              <CCol sm={6}>
                {" "}
                <CFormLabel className=" mt-2">
                  Date of Birth <code>*</code>
                </CFormLabel>
                <CFormInput
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  disabled={
                    !fname ||
                    !Faname ||
                    !mname ||
                    !lname ||
                    FanameError ||
                    mnameError ||
                    fnameError
                  }
                  type="date"
                  placeholder="dd/mm/yyyy"
                />
              </CCol>
              <CCol sm={6}>
                <CFormLabel className="mt-2">
                  Qualification <code>*</code>
                </CFormLabel>
                <CFormInput
                  value={qualification}
                  onChange={(e) => {
                    setqualification(e.target.value);
                    QualificationValidation(e);
                  }}
                  // options={options}
                  disabled={
                    !fname ||
                    !lname ||
                    !date ||
                    !Faname ||
                    !mname ||
                    FanameError ||
                    mnameError ||
                    fnameError
                  }
                />
                <span className="errorMsg">{qualificationError}</span>
              </CCol>
            </CRow>
            <CRow>
              <CCol sm={6}>
                <CFormLabel className=" mt-2">
                  Email <code>*</code>
                </CFormLabel>
                <CFormInput
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                    emailValidation(e);
                  }}
                  disabled={
                    !fname ||
                    !lname ||
                    !Faname ||
                    !mname ||
                    !date ||
                    !qualification ||
                    FanameError ||
                    mnameError ||
                    fnameError
                  }
                  type="email"
                  placeholder="name@example.com"
                />
                <span className="errorMsg">{mailError}</span>
              </CCol>
              <CCol sm={6}>
                <CFormLabel className=" mt-2">
                  Pnone Number <code>*</code>
                </CFormLabel>
                <CFormInput
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    PhoneNumberValidation(e);
                  }}
                  disabled={
                    !fname ||
                    !lname ||
                    !Faname ||
                    !mname ||
                    !date ||
                    !mail ||
                    !qualification ||
                    FanameError ||
                    mnameError ||
                    fnameError ||
                    mailError
                  }
                  type="text"
                  placeholder="9999998888"
                />
                <span className="errorMsg">{phoneError}</span>
              </CCol>
            </CRow>

            <CButton
              onClick={() => SaveDetails()}
              className="mt-4 mx-2"
              color="success"
              variant="outline"
              disabled={
                !fname ||
                !lname ||
                !Faname ||
                !mname ||
                !date ||
                !mail ||
                !phone ||
                !qualification ||
                FanameError ||
                mnameError ||
                fnameError ||
                mailError ||
                phoneError
              }
            >
              Save
            </CButton>
            <CButton
              onClick={() => clearFuntion()}
              className="mt-4 mx-2"
              color="danger"
              variant="outline"
            >
              Clear
            </CButton>
          </CForm>
        </CCol>
        <CCol sm={8}>
          <div className="tableWidth">
            <CSmartTable
              itemsPerPageSelect
              clickableRows
              columns={columns}
              //   columns={columns.filter((x) => x.label != "Action")}
              items={getData}
              itemsPerPage={5}
              pagination
              scopedColumns={{
                show_details: (item) => {
                  return (
                    <div>
                      <td className="gaponly">
                        <button
                          className="updateBtn"
                          onClick={() => {
                            DetailsUpdate(item.DetailsID);
                          }}
                        >
                          <FaEdit
                            style={{ fontSize: "20px", color: "#002663" }}
                          />
                        </button>
                        {/* {JSON.stringify(item)} */}
                        <button
                          className="deleteBtn"
                          onClick={() => {
                            DeleteTask(item.DetailsID);
                          }}
                        >
                          <RiDeleteBinFill
                            style={{ fontSize: "22px", color: "#ea4335" }}
                          />
                        </button>
                      </td>
                    </div>
                  );
                },
                //   MotherName:(items)=>{
                //     return(
                //       {FatherName }
                //     )
                //   }
              }}
              sorterValue={{ column: "name", state: "asc" }}
              tableProps={{
                striped: true,
                hover: true,
              }}
            />
          </div>
        </CCol>
      </CRow>

      <hr />
    </div>
  );
}

export default Details;
