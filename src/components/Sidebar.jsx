import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Dashboard,
  Person,
  Notifications,
  AddCircle,
  Download,
} from "@mui/icons-material";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isStudent, setIsStudent] = useState(true);

  // Custom theme from Material UI
  const theme = useTheme();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!user.email.includes("@iitism.ac.in")) {
          setIsStudent(false);
        }
      }
    });
  }, []);

  return (
    <Box
      className="bg-white shadow-lg"
      p={3}
      sx={{ minWidth: "220px", display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed", width: "inherit" }}>
        <Typography
          variant="h5"
          className="text-purple-600"
          sx={{ marginBottom: "1.5rem" }}
        >
          Placement Cell
        </Typography>
        <List>
          {isStudent ? (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  className="hover:bg-purple-100"
                  onClick={() => navigate("/student")}
                >
                  <ListItemIcon className="text-purple-600">
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"
                    primaryTypographyProps={{ className: "text-purple-600" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  className="hover:bg-purple-100"
                  onClick={() => navigate("/student/profile")}
                >
                  <ListItemIcon className="text-purple-600">
                    <Person />
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    primaryTypographyProps={{ className: "text-purple-600" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  className="hover:bg-purple-100"
                  onClick={() => navigate("/student/notification")}
                >
                  <ListItemIcon className="text-purple-600">
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText
                    primary="Notification"
                    primaryTypographyProps={{ className: "text-purple-600" }}
                  />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  className="hover:bg-purple-100"
                  onClick={() => navigate("/company")}
                >
                  <ListItemIcon className="text-purple-600">
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"
                    primaryTypographyProps={{ className: "text-purple-600" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  className="hover:bg-purple-100"
                  onClick={() => navigate("/company/newjob")}
                >
                  <ListItemIcon className="text-purple-600">
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    primary="Add new Job"
                    primaryTypographyProps={{ className: "text-purple-600" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  className="hover:bg-purple-100"
                  onClick={() => navigate("/company/table")}
                >
                  <ListItemIcon className="text-purple-600">
                    <Download />
                  </ListItemIcon>
                  <ListItemText
                    primary="Download Excel"
                    primaryTypographyProps={{ className: "text-purple-600" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  className="hover:bg-purple-100"
                  onClick={() => navigate("/company/notification")}
                >
                  <ListItemIcon className="text-purple-600">
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText
                    primary="Send Notification"
                    primaryTypographyProps={{ className: "text-purple-600" }}
                  />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
