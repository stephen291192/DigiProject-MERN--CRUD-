import React, { useState } from "react";
import { CForm, CFormInput, CFormLabel, CButton } from "@coreui/react";
import { CSmartTable } from "@coreui/react-pro";

function Details() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const clearFuntion = () => {
    setFname("");
    setLname("");
    setMail("");
    setPhone("");
    setAge("");
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
      _style: { width: "15%", background: "#002663" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "Lname",
      _style: { width: "15%", background: "#002663" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "email",
      _style: { width: "15%", background: "#002663" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },
    {
      key: "age",
      _style: { width: "15%", background: "#002663" },
      _props: { color: "#fff", className: "fw-semibold" },
      filter: true,
      sorter: true,
    },

    {
      key: "show_details",
      label: "Action",
      _style: { width: "6%", background: "#002663" },
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
      <CForm className="w-50 m-5">
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
        <CFormLabel className=" mt-2">
          Email <code>*</code>
        </CFormLabel>
        <CFormInput
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
          disabled={!fname || !lname}
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
          disabled={!fname || !lname || !mail}
          type="number"
          placeholder="9999998888"
        />
        <CFormLabel className=" mt-2">
          Age <code>*</code>
        </CFormLabel>
        <CFormInput
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          disabled={!fname || !lname || !mail || !phone}
          type=""
          placeholder="1-100"
        />
        <CButton
          onClick={() => createFuntion()}
          className="mt-4 mx-2"
          color="success"
          variant="outline"
          disabled={!fname || !lname || !mail || !age || !phone}
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

      <hr />
      <div className="tableWidth">
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
                    <CButton className="updateBtn" onClick={() => {}}>
                      update
                      {/* <FaEdit style={{ fontSize: "20px", color: "#002663" }} /> */}
                    </CButton>

                    <CButton className="deleteBtn" onClick={() => {}}>
                      {" "}
                      delete
                      {/* <RiDeleteBinFill
                        style={{ fontSize: "22px", color: "#ea4335" }}
                      /> */}
                    </CButton>
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
    </div>
  );
}

export default Details;
