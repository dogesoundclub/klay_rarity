import React, { useEffect, useState } from "react";
import { Alert, Breadcrumb } from "react-bootstrap";

function EngineSample() {
  const uri = process.env.REACT_APP_ENGINE_UNREBIL;
  return (
    <div>
      <img src={uri} alt="~" />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default EngineSample;
