import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CIcon } from '@coreui/icons-react';
import {cilChevronCircleRightAlt} from '@coreui/icons';
import "../Styles/MenuPage.css"; // Create this file for styling

const MenuPanelItem = ({ label, path }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(path);
  };

  return (
    <div onClick={handleNavigation} className="panel-item">
      {label}  <CIcon icon={cilChevronCircleRightAlt}  style={{ width: '2rem', height: '2rem'}}/>
    </div>
  );
};

export default MenuPanelItem;
