import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import { caretDownIcon, caretupIcon, editIcon, plusIcon } from "../base/icons";
import { useRecoilState } from "recoil";
import { currentUserAtom } from "../recoil_state/atoms";
import { validateEmail, validateFullname, validatePhone } from "../assets/validations";
import { OptionsSpan } from "./AddonsPage";

// Data
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

const errInitial = {
  fullname: false,
  email: false,
  password: false,
  phone: false,
  address: false
};

const availableLocations = [
  {
    id: 1,
    city: "edison",
    state: "NJ"
  },
  {
    id: 2,
    city: "columbus",
    state: "OH"
  },
];


// Base components (jsx level)
const Heading1 = ({text}) => <span className="capitalize text-lg font-medium">{text}</span>
const Heading2 = ({text}) => <span className="text-sm font-light">{text}</span>


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



function ProfileForm() {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState(errInitial);

  useEffect(() => {
    if(currentUser.isLoaded) setUser(currentUser);
  }, [currentUser.isLoaded]);


  const handleUpdate = e => {
    // Makes an API call and updates the Current User state
    e.preventDefault();
    setCurrentUser(user);
    console.log(user);
  }

  return (
    <form className="px-5 py-5">
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <Input
          onChange={e =>
            setUser(prev => ({ ...prev, 'fullname': validateFullname(e.target.value, setError) }))
          }
          placeholder=""
          value={user.fullname}
          label="fullname"
          type="text"
          error={error}
        />
        <Input
          onChange={e =>
            setUser(prev => ({ ...prev, 'email': validateEmail(e.target.value, setError)}))
          }
          placeholder=""
          value={user.email}
          label="email"
          type="text"
          error={error}
        />
        <Input
          onChange={e =>
            setUser(prev => ({ ...prev, 'phone': validatePhone(e.target.value, setError) }))
          }
          value={user.phone}
          label="phone"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="012-345-6789"
          error={error}
        />
        <Input
          onChange={e => console.log(e.target.value)}
          placeholder=""
          value={user.password}
          label="password"
          disable={true}
          type="password"
          error={error}
        />
        {user.location && <LocationDiv user={user} setUser={setUser} />}
        <StarchDiv />
      </div>
      <div className="w-full text-right mt-5">
        <Button onClick={e => handleUpdate(e)} text="update" />
      </div>
      <AddressDiv addresses={user.addresses} setUser={setUser} />
    </form>
  );
}

function LocationDiv({user, setUser}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-col justify-start items-start space-y-0">
      <Heading1 text="location" />
      <Heading2 text="Choose a location from the below" />
      <div className="flex flex-col justify-start items-start py-1">
        <span onClick={() => {setShowDropdown(!showDropdown)}} className={`border px-2 py-1 z-10 bg-gray-100 ${showDropdown ? 'rounded-tl-lg rounded-tr-lg': 'rounded-lg'} cursor-pointer capitalize`}>{user['location']['city']}, {user['location']['state']} {showDropdown ? caretupIcon : caretDownIcon}</span>
        {showDropdown && <div onClick={() => {setShowDropdown(false)}} className="absolute w-full h-full top-0 left-0 z-0"></div>}
        <div className="relative w-full p-2">
          <LocationOptions showDropdown={showDropdown} setUser={setUser} />
        </div>
      </div>
    </div>
  )
}

function LocationOptions({showDropdown, setUser}) {
  const handleLocationSelect = item => {
    setUser(prev => ({
      ...prev,
      'location': {
        'city': item.city,
        'state': item.state
      }
    }))
  }
  return (
    <ul className={`${showDropdown ? 'flex' : 'hidden'} w-40 border absolute top-0 left-0 z-10 rounded shadow-lg list-style-none flex flex-col justify-center items-start divide-y divide-gray-300`}>
      {availableLocations.map(item => <li key={item.id} onClick={() => handleLocationSelect(item)} className="w-full p-1 capitalize px-2 cursor-pointer hover:bg-gray-100">{item.city}, {" "}{item.state}</li>)}
    </ul>
  )
}

function StarchDiv() {
  return (
    <div className="flex flex-col justify-start items-start space-y-1">
      <Heading1 text="starch level" />
      <div className="space-x-2">
        <OptionsSpan options={['low', 'medium', 'high']} />
      </div>
    </div>
  )
}

function AddressDiv({ addresses, setUser }) {

    return (
        <div className="flex flex-col justify-start items-start py-4 space-y-2">
            <AddressHeader />
            <AddressList addresses={addresses} setUser={setUser} />
            <span className="text-sky-600 cursor-pointer">
                {plusIcon} Add New Address
            </span>
        </div>
    )
}

function AddressHeader() {
    return (
        <div className="flex flex-col">
            <Heading1 text="Addresses" />
            <span className="text-sm font-light">You can add up to 5 Addresses </span>
        </div>
    )
}

function AddressList({addresses, setUser}) {
  const handleMakePrimary = (id) => {
    setUser(
      prev => ({
        ...prev,
        'addresses': prev.addresses.map(ad => ({...ad, 'primary': ad.id===id}))
      })
    )
  }
  return (
    [...addresses].sort((a,b) => b.primary - a.primary).map((item) => (
      <li key={item.id}>
          {item.address}{" "}
          {item.primary ? (
          <span className="text-sky-700">(Primary)</span>
          ) : (
          <span onClick={() => handleMakePrimary(item.id)} className="cursor-pointer text-sky-500">
              - Make Primary
          </span>
          )} {" "}
          {editIcon} Edit
      </li>
  ))
  )
}