import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [tabName, setTabName] = useState("");

  const tabform = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  console.log(tabName);
  return (
    <div className="tabform">
      <ul>
        {tabform.map((t) => {
          return (
            <li>
              <a
                onClick={() => {
                  setTabName(t.name);
                }}
              >
                {t.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabForm;
