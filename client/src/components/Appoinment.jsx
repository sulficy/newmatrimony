import React from "react";
// import { Card, Input, Button, Typography } from "@material-tailwind/react";

export function Appoinment() {
  return (
    <Card color="transparent" shadow={false} className="p-6">
      <Typography variant="h4" color="blue-gray">
        Doctor Appointment Form
      </Typography>
      <form className="mt-4">
        <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
            Patient Name
          </Typography>
          <Input
            size="lg"
            placeholder="John Doe"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        </div>

        <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
            Appointment Date
          </Typography>
          <Input
            type="date"
            size="lg"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        </div>

        <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
            Appointment Time
          </Typography>
          <Input
            type="time"
            size="lg"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        </div>

        <div className="mb-4">
          <Typography variant="h6" color="blue-gray">
            Reason for Appointment
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Describe your issue"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        </div>

        <Button className="mt-6" fullWidth>
          Schedule Appointment
        </Button>
      </form>
    </Card>
  );
}

export default Appoinment