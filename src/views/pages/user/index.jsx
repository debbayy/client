import React, { useEffect, useState } from 'react'
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { API } from "../../../config/api";
import axios from "axios"



const Users = () => {

    const [appState, setAppState] = useState();

    useEffect(() => {
        const apiUrl = 'https://fakestoreapi.com/users';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        });
    }, [setAppState]);
    console.log(appState, "ini response")

    return (
        <>
            <div  >
                <h2 className=' d-flex justify-content-center'>Data user</h2>
                <div className='my-5 d-flex justify-content-center' style={{ maxHeight: "50vh" }}>
                    <BootstrapTable

                        version="4"

                        pagination
                       // data={appState}
                    >
                        <TableHeaderColumn isKey dataField="id" className="tbl" width="10%">
                            No
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="email" tdStyle={{
                            whiteSpace: "pre-wrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                            thStyle={{
                                whiteSpace: "pre-wrap",
                            }} dataAlign='center' className="tbl">
                            NAMA
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="email" /* dataFormat={formatDate} */ tdStyle={{
                            whiteSpace: "pre-wrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                            thStyle={{
                                whiteSpace: "pre-wrap",
                                // textOverflow: "ellipsis",
                                // overflow: "hidden",
                            }} dataAlign='center' className="tbl">
                            EMAIL
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="email" /* dataFormat={formatDate} */ tdStyle={{
                            whiteSpace: "pre-wrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                            thStyle={{
                                whiteSpace: "pre-wrap",
                                // textOverflow: "ellipsis",
                                // overflow: "hidden",
                            }} dataAlign='email' className="tbl">
                            ALAMAT
                        </TableHeaderColumn>


                        <TableHeaderColumn
                            dataField='id'
                            className="tbl"
                            // dataFormat={btnAction}
                            dataAlign="center"


                        >
                            AKSI
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        </>
    )
}

export default Users
