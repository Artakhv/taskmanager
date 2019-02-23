import React from "react";
import { Card, CardFooter } from "reactstrap";

const Footer = props => {
  return (
    <div>
      <Card>
        <CardFooter
          className="text-white bg-danger"
          style={{
            textAlign: "center",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%"
          }}
        >
          All Rights Reserved
        </CardFooter>
      </Card>
    </div>
  );
};

export default Footer;
