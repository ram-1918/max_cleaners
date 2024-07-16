import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentUserAtom } from "../recoil_state/atoms";
import { useNavigate } from "react-router";
import Input from "../components/Input";
import Header from "../components/Header";
import Button from "../components/Button";
import { initial_address } from "../recoil_state/initial_data";

export default function AddressSection() {
  const navigate = useNavigate();
  const [error, ] = useState("");
  const [, setCurrentUser] = useRecoilState(currentUserAtom);
  const [newaddress, setNewAddress] = useState(initial_address);
  return (
    <div className="w-full h-full fixed -top-1 z-10 left-0 right-0 flex items-center justify-center p-4 bg-[rgba(0,0,0,0.3)]">
      <div className="w-[40%] p-4 flex flex-col justify-start items-start gap-4 rounded-lg bg-white">
        <div className="w-full text-center">
          <Header text="Add new address" />
        </div>
        <Input
          onChange={(e) =>
            setNewAddress((prev) => ({ ...prev, address1: e.target.value }))
          }
          value={newaddress.address1}
          label="address 1"
          type="text"
          error={error}
        />
        <Input
          onChange={(e) =>
            setNewAddress((prev) => ({ ...prev, address2: e.target.value }))
          }
          value={newaddress.address2}
          label="address 2"
          type="text"
          error={error}
        />
        <Input
          onChange={(e) =>
            setNewAddress((prev) => ({ ...prev, city: e.target.value }))
          }
          value={newaddress.city}
          label="city"
          type="text"
          error={error}
        />
        <Input
          onChange={(e) =>
            setNewAddress((prev) => ({ ...prev, state: e.target.value }))
          }
          value={newaddress.state}
          label="state"
          type="text"
          error={error}
        />
        <Input
          onChange={(e) =>
            setNewAddress((prev) => ({ ...prev, zip: e.target.value }))
          }
          value={newaddress.zip}
          label="zip"
          type="text"
          error={error}
        />
        <div className="w-full text-right">
          <Button
            onClick={() => {
              setCurrentUser((prev) => ({
                ...prev,
                addresses: [
                  ...prev.addresses,
                  {
                    id: prev.addresses.length + 1,
                    primary: false,
                    address: format_address(newaddress),
                  },
                ],
              }));
              navigate("../");
            }}
            text="submit"
          />
        </div>
      </div>
    </div>
  );
}

const format_address = (newaddress) => {
  return `${newaddress.address1 + " " + newaddress.address2}, ${
    newaddress.city
  }, ${newaddress.state}, ${newaddress.zip}`;
};
