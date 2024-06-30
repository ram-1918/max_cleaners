import { useState } from "react";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { editIcon, plusIcon } from "../base/icons";

export default function ProfilePage() {
  return (
    <div className="h-[70%] flex justify-center items-start">
      <div className="w-[50%] rounded-lg p-2">
        <ProfileHeader />
        <ProfileForm />
      </div>
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="flex justify-between items-center space-x-10">
      <BackButton text="Home" path="/" />
      <div className="w-[60%]">
        <Header text="User Profile" />
      </div>
    </div>
  );
}

const initialUser = {
  fullname: "",
  email: "",
  phone: "",
  password: "",
  addresses: [
    {
      id: 1,
      primary: true,
      address: "2649, Wildberry ct, Edison, NJ, 08817",
    },
    {
      id: 2,
      primary: false,
      address: "1 Ethel Rd, Edison, NJ, 08817",
    },
  ],
};

function ProfileForm() {
  const [user, setUser] = useState(initialUser);
  return (
    <form className="px-5 py-5">
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <Input
          onChange={(e) =>
            setUser((prev) => ({ ...prev, fullname: e.target.val }))
          }
          placeholder=""
          value={user.fullname}
          label="Fullname"
        />
        <Input
          onChange={(e) => console.log(e.target.val)}
          placeholder=""
          value={user.email}
          label="Email"
        />
        <Input
          onChange={(e) => console.log(e.target.val)}
          placeholder=""
          value={user.phone}
          label="Phone"
        />
        <Input
          onChange={(e) => console.log(e.target.val)}
          placeholder=""
          value={user.password}
          label="Password"
        />
      </div>
      <AddressDiv addresses={user.addresses} />
      <div className="w-full text-right">
        <Button text="update" />
      </div>
    </form>
  );
}

function AddressDiv({ addresses }) {
    return (
        <div className="flex flex-col justify-start items-start py-4 space-y-2">
            <AddressHeader />
            {addresses.map((item) => (
                <li key={item.id}>
                    {item.address}{" "}
                    {item.primary ? (
                    <span className="text-sky-700">(Primary)</span>
                    ) : (
                    <span className="cursor-pointer text-sky-500">
                        - Make Primary
                    </span>
                    )} {" "}
                    {editIcon} Edit
                </li>
            ))}
            <span className="text-sky-600 cursor-pointer">
                {plusIcon} Add New Address
            </span>
        </div>
    )
}

function AddressHeader() {
    return (
        <div className="flex flex-col">
            <span className="text-lg font-medium">Addresses</span>
            <span className="text-sm font-light">You can add up to 5 Addresses </span>
        </div>
    )
}