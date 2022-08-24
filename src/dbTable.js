import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { woInfo } from "./woInfo.js";
import { woHeader } from "./woHeader";


const DatatablePage = () => {
  const data = {
    columns: woHeader,
    rows: woInfo
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;