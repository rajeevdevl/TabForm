import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState("");

  const tabform = [
    {
      id: 1,
      name: "Profile",
      component: Profile,
    },
    {
      id: 2,
      name: "Interests",
      component: Interests,
    },
    {
      id: 3,
      name: "Settings",
      component: Settings,
    },
  ];

  const SelectedComponent = tabform[activeTab - 1]?.component;

  return (
    <div className="tabform">
      <ul>
        {tabform.map((t) => {
          return (
            <li key={t.id}>
              <a
                onClick={() => {
                  setActiveTab(t.id);
                }}
              >
                {t.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="tabBody">{activeTab && <SelectedComponent />}</div>
    </div>
  );
};

export default TabForm;
