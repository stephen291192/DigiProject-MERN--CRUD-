import React, { useState } from "react";
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

  const clearFuntion = () => {
    setFname("");
    setLname("");
    setMail("");
    setPhone("");
    setAge("");
    setFaname("");
    setMname("");
    setDate("");
    setGender("");
  };

  const createFuntion = () => {
    alert("waiting");
  };

  const data = [
    {
      name: "Rajesh",
      Lname: "V",
      age: "15",
      email: "dsfsd@gmail.com",
    },
    {
      name: "Rajesh",
      Lname: "V",
      age: "15",
      email: "dsfsd@gmail.com",
    },
  ];

  const columns = [
    // {
    //   key: "S_no",
    //   label: "S.No",
    //   _style: { width: "5%", background: "#002663" },
    //   _props: { color: "#fff", className: "fw-semibold" },
    //   filter: false,
    //   sorter: false,
    // },

    {
      key: "name",
      _style: { width: "15%", background: "#002663", color: "#fff" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "Lname",
      _style: { width: "15%", background: "#002663", color: "#fff" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "email",
      _style: { width: "15%", background: "#002663", color: "#fff" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "age",
      _style: { width: "15%", background: "#002663", color: "#fff" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },

    {
      key: "show_details",
      label: "Action",
      _style: { width: "6%", background: "#002663", color: "#fff" },
      filter: false,
      sorter: false,
      _props: { color: "#fff", className: "fw-semibold" },
    },
  ];

  // Validation

  // const FNameValidation={()=>{

  // }}

  return (
    <div className="">
      <CRow className="">
        <CCol sm={4}>
          <CForm className=" m-5">
            <CRow>
              <CCol sm={8}>
                {" "}
                <CFormLabel className="mt-2">
                  First Name <code>*</code>
                </CFormLabel>
                <CFormInput
                  type="fname"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  placeholder="First Name "
                />
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
                  disabled={!fname}
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
                  }}
                  disabled={!fname || !lname}
                  type="lName"
                  placeholder="Father Name"
                />
              </CCol>
              <CCol sm={6}>
                <CFormLabel className=" mt-2">
                  Mother Name <code>*</code>
                </CFormLabel>
                <CFormInput
                  value={mname}
                  onChange={(e) => {
                    setMname(e.target.value);
                  }}
                  disabled={!fname || !Faname || !lname}
                  type="lName"
                  placeholder="Mother Name"
                />
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
                  disabled={!fname || !Faname || !mname || !lname}
                  type=""
                  placeholder="1-100"
                />
              </CCol>
              <CCol sm={6}>
                {" "}
                <CFormLabel className=" mt-2">
                  Gender <code>*</code>
                </CFormLabel>
                <CFormInput
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  disabled={!fname || !lname || !date || !Faname || !mname}
                  type=""
                  placeholder="1-100"
                />
              </CCol>
            </CRow>
            <CFormLabel className=" mt-2">
              Email <code>*</code>
            </CFormLabel>
            <CFormInput
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              disabled={
                !fname || !lname || !Faname || !mname || !date || !gender
              }
              type="email"
              placeholder="name@example.com"
            />
            <CFormLabel className=" mt-2">
              Pnone Number <code>*</code>
            </CFormLabel>
            <CFormInput
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              disabled={
                !fname ||
                !lname ||
                !Faname ||
                !mname ||
                !date ||
                !mail ||
                !gender
              }
              type="text"
              placeholder="9999998888"
            />

            <CButton
              onClick={() => createFuntion()}
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
                !gender
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
          <div className="tableWidth m-5">
            <CSmartTable
              itemsPerPageSelect
              clickableRows
              columns={columns}
              //   columns={columns.filter((x) => x.label != "Action")}
              items={data}
              // itemsPerPage={Number(itemsPerPage)}
              scopedColumns={{
                show_details: (item) => {
                  return (
                    <div>
                      <td className="gaponly">
                        <button className="updateBtn" onClick={() => {}}>
                          <FaEdit
                            style={{ fontSize: "20px", color: "#002663" }}
                          />
                        </button>

                        <button className="deleteBtn" onClick={() => {}}>
                          <RiDeleteBinFill
                            style={{ fontSize: "22px", color: "#ea4335" }}
                          />
                        </button>
                      </td>
                    </div>
                  );
                },
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
