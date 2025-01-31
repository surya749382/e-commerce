import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "onTheWay" },
  { label: "Delivered", value: "delivered" }, // fixed typo in the value
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" }, // fixed typo in the value
];

const Order = () => {
  return (
    <div className=" px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option) => {
                return (
                  <div className="flex items-center" key={option.value}>
                    <input
                      className="h-4 w-4 border-gray-300 text-indigo-600"
                      defaultValue={option.value}
                      type="checkbox"
                      name={option.value}
                      id={option.value}
                    />
                    <label
                      className="ml-3 text-sm text-gray-600"
                      htmlFor={option.value}
                    >
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1].map(() => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
